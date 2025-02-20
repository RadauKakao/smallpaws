use anyhow::{Context, Result, bail};
use poem::{
    handler,
    web::{Data, Json, Path, Query},
};
use redb::{Database, ReadableTable, TableDefinition};
use serde::{Deserialize, Serialize};
use std::sync::Arc;
use tracing::{info, instrument};

#[derive(Debug, Serialize, Deserialize)]
struct CustomizableForm {
    pub modification_key: String,
    pub encrypted: bool,
    pub name: String,
    pub data: String,
}

const TABLE: TableDefinition<&str, String> = TableDefinition::new("my_data");

#[derive(Debug, Serialize, Deserialize)]
struct ModQuery {
    pub modification_key: Option<String>,
}

#[handler]
#[instrument(skip(db, body))]
pub fn set_form(
    Path(id): Path<String>,
    Query(ModQuery { modification_key }): Query<ModQuery>,
    Json(body): Json<CustomizableForm>,
    db: Data<&Arc<Database>>,
) -> Result<()> {
    let transaction = db.begin_write().context("failed to begin transaction")?;
    {
        let mut table = transaction
            .open_table(TABLE)
            .context("failed to open table")?;
        {
            let res = table.get(id.as_str()).context("failed to get form")?;
            if let Some(content) = res {
                info!("found existing form {:?}", &content.value());
                let form = serde_json::from_str::<CustomizableForm>(&content.value())
                    .context("failed to parse form")?;
                if form.modification_key != modification_key.unwrap_or_else(|| "".to_string()) {
                    bail!("modification key is invalid");
                }
            }
        }
        table
            .insert(
                id.as_str(),
                serde_json::to_string(&body).context("failed to serialize form")?,
            )
            .context("failed to insert form")?;
    }
    transaction
        .commit()
        .context("failed to commit transaction")?;

    Ok(())
}

#[handler]
#[instrument(skip(db))]
pub fn get_form(
    Path(id): Path<String>,
    db: Data<&Arc<Database>>,
) -> Result<Json<CustomizableForm>> {
    let transaction = db.begin_read()?;
    let table = transaction.open_table(TABLE)?;
    let res = table.get(id.as_str())?;
    if let Some(content) = res {
        Ok(Json(serde_json::from_str::<CustomizableForm>(
            &content.value(),
        )?))
    } else {
        bail!("form not found")
    }
}

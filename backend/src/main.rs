use std::sync::Arc;

use poem::{EndpointExt, Route, Server, get, listener::TcpListener};
use redb::Database;
use tracing::Level;
use tracing_subscriber::{
    filter::Targets, fmt::format::FmtSpan, layer::SubscriberExt, util::SubscriberInitExt,
};

mod endpoints;

#[tokio::main]
async fn main() -> Result<(), std::io::Error> {
    let filter = Targets::new().with_default(Level::INFO);

    let subscriber = tracing_subscriber::fmt::layer()
        .with_span_events(FmtSpan::CLOSE)
        .with_file(false)
        .with_line_number(true);

    tracing_subscriber::registry()
        .with(subscriber)
        .with(filter)
        .init();

    let db = Database::builder().create("smallpaws.db").unwrap();

    let app = Route::new()
        .at(
            "/form/:id",
            get(endpoints::get_form).post(endpoints::set_form),
        )
        .data(Arc::new(db));
    Server::new(TcpListener::bind("0.0.0.0:3000"))
        .run(app)
        .await
}

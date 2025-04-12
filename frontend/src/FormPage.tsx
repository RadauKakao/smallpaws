import React from 'react';
import CategoryBox from './components/CategoryPage';
import { useFormContext } from './contexts/FormContext';
import { Category, Question } from './types/Form';
import IconButton from './components/IconButton';
import { EyeIcon, WrenchScrewdriverIcon } from '@heroicons/react/16/solid';

export default function FormPage() {
  const { form, setForm } = useFormContext();
  const [advancedOptions, setAdvancedOptions] = React.useState(false);

  if (!form) return <h1>Form not found</h1>;

  return (
    <>
      <IconButton onClick={() => setAdvancedOptions(!advancedOptions)} className="absolute top-2 right-2">
        {!advancedOptions ? (
          <EyeIcon className="h-6 w-6 transition-transform group-hover:scale-90 group-hover:text-emerald-400" />
        ) : (
          <WrenchScrewdriverIcon className="h-6 w-6 transition-transform group-hover:scale-90 group-hover:text-emerald-400" />
        )}
      </IconButton>

      <h2
        role="textbox"
        className="mb-4 w-fit overflow-visible border-b-1 text-center text-2xl"
        contentEditable={true}
        suppressContentEditableWarning={true}
        onInput={(e) =>
          setForm((prev) => {
            if (!e?.currentTarget) return prev;
            return prev.withName(e?.currentTarget?.textContent || '');
          })
        }
      >
        {form?.name}
      </h2>

      {form.categories.map((category) => (
        <CategoryBox id={category.id} key={category.id.toString()} advancedOptions={advancedOptions} />
      ))}

      <button
        className="flex w-fit items-center justify-center gap-2 px-2 py-1 hover:backdrop-brightness-90"
        onClick={() => setForm((prev) => prev.addCategory(Category.new('New category', [Question.new('')])))}
      >
        Add new Category
      </button>
    </>
  );
}

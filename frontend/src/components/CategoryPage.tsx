import { useFormContext } from '../contexts/FormContext';
import { ArrowDownIcon, ArrowUpIcon, PlusIcon, TrashIcon } from '@heroicons/react/16/solid';
import { Question, CategoryID } from '../types/Form';
import IconButton from './IconButton';
import QuestionLine from './QuestionsLine';

function CategoryPage({ id }: { id: CategoryID }) {
  const { form, setForm } = useFormContext();
  const category = form.getCategory(id);

  if (!category) return null;

  const header = (
    <div className="flex w-full items-center justify-between gap-4 px-2">
      <input
        type="text"
        className="small-caps min-w-20 shrink grow border-b-1 text-xl font-semibold tracking-widest"
        value={category.name}
        onChange={(e) => setForm((prev) => prev.withCategory(id, (category) => category.withName(e.target.value)))}
      />

      <div className="flex">
        <IconButton
          onClick={() => setForm((prev) => prev.withCategory(id, (category) => category.addQuestion(Question.new(''))))}
        >
          <PlusIcon className="h-4 w-4 transition-transform group-hover:scale-90 group-hover:text-blue-500" />
        </IconButton>

        <IconButton onClick={() => setForm((prev) => prev.withMovedCategory(id, 'up'))}>
          <ArrowUpIcon className="h-4 w-4 transition-transform group-hover:scale-90 group-hover:text-blue-500" />
        </IconButton>
        <IconButton onClick={() => setForm((prev) => prev.withMovedCategory(id, 'down'))}>
          <ArrowDownIcon className="h-4 w-4 transition-transform group-hover:scale-90 group-hover:text-blue-500" />
        </IconButton>

        <IconButton onClick={() => setForm((prev) => prev.removeCategory(id))}>
          <TrashIcon className="h-4 w-4 transition-transform group-hover:scale-90 group-hover:text-red-400" />
        </IconButton>
      </div>
    </div>
  );

  const questionBlock = (
    <div className="w-full bg-white p-1 text-black">
      {category.questions.map((question) => (
        <QuestionLine
          question={question}
          categoryID={id}
          key={question.id.toString()}
          onChange={(categoryMapper) =>
            setForm((prev) => {
              const category = prev.getCategory(id)!;
              const updatedCategory = categoryMapper(category);
              return prev.withCategory(id, () => updatedCategory);
            })
          }
        />
      ))}
    </div>
  );

  return (
    <div className="flex w-full flex-col items-center gap-2 bg-blue-300 p-2 text-white" key={id.toString()}>
      {header}
      {questionBlock}
    </div>
  );
}

export default CategoryPage;

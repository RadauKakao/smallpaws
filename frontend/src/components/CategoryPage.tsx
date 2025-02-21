import { useFormContext } from '../contexts/FormContext';
import { ArrowDownIcon, ArrowUpIcon, PlusIcon, TrashIcon } from '@heroicons/react/16/solid';
import { Question, CategoryID } from '../types/Form';
import Box from './Box';
import QuestionLine from './QuestionsLine';
import IconButton from './IconButton';

function CategoryBox({ id, advancedOptions }: { id: CategoryID; advancedOptions: boolean }) {
  const { form, setForm } = useFormContext();
  const category = form.getCategory(id);

  if (!category) return null;

  const questionBlock = category.questions.map((question) => (
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
      advancedOptions={advancedOptions}
    />
  ));

  const buttons = (
    <>
      <IconButton
        onClick={() => {
          setForm((prev) => prev.withCategory(id, (category) => category.addQuestion(Question.new(''))));
        }}
      >
        <PlusIcon className="h-4 w-4 transition-transform group-hover:scale-90 group-hover:text-blue-500" />
      </IconButton>
      <IconButton
        onClick={() => {
          setForm((prev) => prev.withMovedCategory(id, 'up'));
        }}
      >
        <ArrowUpIcon className="h-4 w-4 transition-transform group-hover:scale-90 group-hover:text-blue-500" />
      </IconButton>
      <IconButton
        onClick={() => {
          setForm((prev) => prev.withMovedCategory(id, 'down'));
        }}
      >
        <ArrowDownIcon className="h-4 w-4 transition-transform group-hover:scale-90 group-hover:text-blue-500" />
      </IconButton>
      <IconButton
        onClick={() => {
          setForm((prev) => prev.removeCategory(id));
        }}
      >
        <TrashIcon className="h-4 w-4 transition-transform group-hover:scale-90 group-hover:text-red-400" />
      </IconButton>
    </>
  );

  return (
    <Box
      editableTitle={true}
      title={category.name}
      onTitleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => prev.withCategory(id, (category) => category.withName(e.target.value)));
      }}
      buttons={advancedOptions ? buttons : null}
    >
      {questionBlock}
    </Box>
  );
}

export default CategoryBox;

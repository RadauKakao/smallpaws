import { ArrowDownIcon, ArrowUpIcon, TrashIcon } from '@heroicons/react/16/solid';
import { Question, CategoryID, Category } from '../types/Form';
import IconButton from './IconButton';
import SelectionButton from './SelectionButton';

function QuestionLine({
  question,
  onChange,
  advancedOptions,
}: {
  question: Question;
  categoryID: CategoryID;
  onChange: (mapper: (category: Category) => Category) => void;
  advancedOptions: boolean;
}) {
  return (
    <div
      key={question.id.toString()}
      className="flex flex-row items-center gap-1 px-2 py-1 hover:backdrop-brightness-90"
    >
      <SelectionButton
        selection={question.selection}
        onClick={() => onChange((cat) => cat.withQuestion(question.id, (q) => q.withNextSelection()))}
        className="h-4 w-4 min-w-4 shrink-0 transition-transform group-hover:scale-75"
      />

      <input
        type="text"
        className="mx-2 min-w-10 grow border-b-1"
        value={question.value}
        onChange={(e) => onChange((cat) => cat.withQuestion(question.id, (q) => q.withValue(e.target.value)))}
      />

      <div className="flex flex-row" hidden={!advancedOptions}>
        <IconButton onClick={() => onChange((cat) => cat.withMovedQuestion(question.id, 'up'))}>
          <ArrowUpIcon className="h-4 w-4 transition-transform group-hover:scale-90 group-hover:text-violet-400" />
        </IconButton>
        <IconButton onClick={() => onChange((cat) => cat.withMovedQuestion(question.id, 'down'))}>
          <ArrowDownIcon className="h-4 w-4 transition-transform group-hover:scale-90 group-hover:text-violet-400" />
        </IconButton>
        <IconButton onClick={() => onChange((cat) => cat.removeQuestion(question.id))}>
          <TrashIcon className="h-4 w-4 transition-transform group-hover:scale-75 group-hover:text-red-400" />
        </IconButton>
      </div>
    </div>
  );
}

export default QuestionLine;

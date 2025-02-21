import CategoryPage from './components/CategoryPage';
import { useFormContext } from './contexts/FormContext';
import { Category, Question } from './types/Form';

function App() {
  const { form, setForm } = useFormContext();

  return (
    <div className="m-auto flex w-full max-w-md flex-col items-center gap-2 p-4">
      <h1 className="m-4 text-center text-4xl font-extrabold">Small Paws</h1>

      {form.categories.map((category) => (
        <CategoryPage id={category.id} key={category.id.toString()} />
      ))}

      <button
        className="flex w-fit items-center justify-center gap-2 px-2 py-1 hover:backdrop-brightness-90"
        onClick={() => setForm((prev) => prev.addCategory(Category.new('New category', [Question.new('')])))}
      >
        Add new Category
      </button>
    </div>
  );
}

export default App;

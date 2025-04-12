import { Route, Routes, useNavigate } from 'react-router';
import FormPage from './FormPage';
import HomePage from './HomePage';
import { HomeIcon } from '@heroicons/react/16/solid';
import IconButton from './components/IconButton';
import { FormContextProvider } from './contexts/FormContext';

function App() {
  const navigate = useNavigate();
  return (
    <>
      <IconButton onClick={() => navigate('/')} className="absolute top-2 left-2">
        <HomeIcon className="h-6 w-6 transition-transform group-hover:scale-90 group-hover:text-emerald-400" />
      </IconButton>
      <div className="m-auto flex w-full max-w-lg flex-col items-center gap-2 overflow-visible p-4">
        <h1 className="m-4 text-center text-4xl font-extrabold">Small Paws</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/form/:id"
            element={
              <FormContextProvider>
                <FormPage />
              </FormContextProvider>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

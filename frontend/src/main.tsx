import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { FormContextProvider } from './contexts/FormContext.tsx';
//@ts-ignore
import '@fontsource-variable/outfit';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormContextProvider>
      <App />
    </FormContextProvider>
  </StrictMode>
);

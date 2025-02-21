import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { Form } from '../types/Form';

type FormContextType = {
  form: Form;
  setForm: Dispatch<SetStateAction<Form>>;
};

const FormContext = createContext<FormContextType>({
  form: Form.new('Init', []),
  setForm: (_) => {},
});

function FormContextProvider({ children }: { children: React.ReactNode }) {
  const [form, setForm] = useState<Form>(Form.new('Init', []));

  useEffect(() => {
    if (sessionStorage.getItem('create_new') === 'true') {
      const form = Form.fromPOJO(JSON.parse(sessionStorage.getItem('form')!));
      setForm(form);
      sessionStorage.removeItem('create_new');
    }
  }, []);

  return <FormContext.Provider value={{ form, setForm }}>{children}</FormContext.Provider>;
}

function useFormContext() {
  return useContext(FormContext);
}

export { FormContext, FormContextProvider, useFormContext };

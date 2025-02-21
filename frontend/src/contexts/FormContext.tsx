import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { Form } from '../types/Form';
import { useParams } from 'react-router';

type FormContextType = {
  form: Form | undefined;
  setForm: Dispatch<SetStateAction<Form>>;
};

const FormContext = createContext<FormContextType>({
  form: undefined,
  setForm: (_) => {},
});

function FormContextProvider({ children }: { children: React.ReactNode }) {
  const { id } = useParams<{ id: string }>();
  const [form, setForm] = useState<Form | undefined>(undefined);

  useEffect(() => {
    if (sessionStorage.getItem('create_new') === 'true') {
      const form = Form.fromPOJO(JSON.parse(sessionStorage.getItem('form')!));
      setForm(form);
      sessionStorage.removeItem('create_new');
      sessionStorage.removeItem('form');
    } else if (id) {
      const data = localStorage.getItem(`${id}-data`);
      if (data) {
        const loadedFrom = Form.fromPOJO(JSON.parse(data));
        console.log(Form.generateTsRepresenation(loadedFrom));
        setForm(loadedFrom);
      }
    }
  }, []);

  useEffect(() => {
    if (id && !!form) {
      localStorage.setItem(`${id}-meta`, JSON.stringify({ name: form.name, date: new Date().toISOString() }));
      localStorage.setItem(`${id}-data`, JSON.stringify(form));
    }
  }, [form]);

  const reSetForm: Dispatch<SetStateAction<Form>> = (newForm) => {
    if (typeof newForm === 'function') return setForm((prev) => (!!prev ? newForm(prev) : prev));
    else return setForm(newForm);
  };

  return <FormContext.Provider value={{ form, setForm: reSetForm }}>{children}</FormContext.Provider>;
}

function useFormContext() {
  return useContext(FormContext);
}

export { FormContext, FormContextProvider, useFormContext };

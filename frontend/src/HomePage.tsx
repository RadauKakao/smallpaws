import { useNavigate } from 'react-router';
import Box from './components/Box';
import FormTemplates from './assets/FormTemplates';
import React from 'react';
import { typeid } from 'typeid-js';

function Spacer() {
  return <div className="col-span-2 mx-auto my-2 w-4/5" />;
}

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = React.useState('empty');
  const [formName, setFormName] = React.useState('');

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <Box title="New Form" onTitleChange={() => {}} buttons={null}>
        <div className="grid w-full grid-cols-2">
          <div className="col-span-2 flex flex-row gap-2 px-2">
            <legend className="text-lg font-semibold">Form Name</legend>
            <input
              type="text"
              className="min-w-1 grow border-b-1"
              placeholder="New Form"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
            />
          </div>
          <Spacer />
          <legend className="col-span-2 px-2 text-lg font-semibold">Templates</legend>
          {FormTemplates.map((template) => (
            <label
              key={template.id.toString()}
              htmlFor={`template${template.id}`}
              className="flex items-center gap-2 px-2 py-1 hover:backdrop-brightness-90"
            >
              <input
                type="radio"
                name="template"
                id={`template${template.id}`}
                checked={selectedTemplate === template.id}
                value={template.id}
                onChange={(e) => e.target.checked && setSelectedTemplate(e.target.value)}
              />
              <legend className="text-lg font-semibold">{template.name}</legend>
            </label>
          ))}
          <Spacer />
          <button
            className="col-start-2 px-2 py-1 hover:backdrop-brightness-90"
            onClick={() => {
              const template =
                FormTemplates.find((t) => t.id === selectedTemplate)?.template || FormTemplates[0].template;
              const id = typeid('form');
              sessionStorage.setItem('create_new', 'true');
              sessionStorage.setItem('form', JSON.stringify(formName !== '' ? template.withName(formName) : template));
              navigate(`/form/${id}`);
            }}
          >
            <legend className="text-lg font-semibold">Create</legend>
          </button>
        </div>
      </Box>
    </div>
  );
}

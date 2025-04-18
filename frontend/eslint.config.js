import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import reactCompiler from 'eslint-plugin-react-compiler';

export default tseslint.config([
  { ignores: ['dist'] },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  { ...pluginReact.configs.flat.recommended, settings: { react: { version: 'detect' } } },
  reactCompiler.configs.recommended,
  { rules: { 'react/react-in-jsx-scope': 'off' } },
  eslintConfigPrettier,
]);

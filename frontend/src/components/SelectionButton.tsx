import React from 'react';
import { Selection } from '../types/Form';
import {
  QuestionMarkCircleIcon,
  MinusCircleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/16/solid';

interface SelectionButtonProps {
  selection: Selection;
  onClick: () => void;
  className?: string;
}

const SelectionButton: React.FC<SelectionButtonProps> = ({ selection, onClick, className }) => {
  const getIcon = () => {
    switch (selection) {
      case Selection.MUST_HAVE:
        return <ExclamationCircleIcon className={className + ' text-green-400'} />;
      case Selection.WOULD_LIKE:
        return <CheckCircleIcon className={className + ' text-blue-400'} />;
      case Selection.MAYBE:
        return <QuestionMarkCircleIcon className={className + ' text-yellow-400'} />;
      case Selection.OFF_LIMITS:
        return <MinusCircleIcon className={className + ' text-red-400'} />;
      case Selection.UNSET:
        return <div className={className + ' rounded-sm border-2 border-gray-400'} />;
      default:
        return null;
    }
  };

  return (
    <button type="button" className={`group flex h-8 w-8 cursor-pointer items-center justify-center`} onClick={onClick}>
      {getIcon()}
    </button>
  );
};

export default SelectionButton;

import React from 'react';

interface IconButtonProps {
  onClick: () => void;
  children: React.ReactElement;
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, children }) => {
  return (
    <button type="button" className={`group flex h-8 w-8 cursor-pointer items-center justify-center`} onClick={onClick}>
      {children}
    </button>
  );
};

export default IconButton;

import React from 'react';

interface Props {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export const Button = ({ onClick, text, disabled = false }: Props) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

import React from 'react';

interface Props {
  text: string;
}

export const Span = ({ text }: Props) => {
  return <span className="font-normal text-lg">{text}</span>;
};

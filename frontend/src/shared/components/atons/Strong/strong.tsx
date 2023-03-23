import React from 'react';

interface Props {
  text: string;
}

export const Strong = ({ text }: Props) => {
  return <strong className="font-medium text-2xl ">{text}</strong>;
};

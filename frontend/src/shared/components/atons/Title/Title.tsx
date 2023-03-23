import React from 'react';

interface Props {
  text: string;
}

export const Title = ({ text }: Props) => {
  return <h1 className="text-3xl font-semibold">{text}</h1>;
};

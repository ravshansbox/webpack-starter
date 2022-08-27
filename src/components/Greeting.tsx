import { ComponentType } from 'react';

type GreetingProps = {
  message: string;
};
export const Greeting: ComponentType<GreetingProps> = ({ message }) => {
  return <h1>{message}</h1>;
};

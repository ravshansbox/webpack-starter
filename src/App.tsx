import { ComponentType } from 'react';
import { Greeting } from './components/Greeting';

export const App: ComponentType = () => {
  return <Greeting message="Hello" />;
};

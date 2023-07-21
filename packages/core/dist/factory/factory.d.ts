import { ReactNode } from 'react';

interface factoryProps {
    children: ReactNode;
}
declare function Factory({ children }: factoryProps): JSX.Element;

export { Factory };

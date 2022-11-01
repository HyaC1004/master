import { createContext, ReactNode, useState } from "react";

interface ContextType {
  count: number;
  increase: (n?: number) => void;
}
export const Counter = createContext<ContextType | null>(null);

export const CounterProvider = (props: {children: ReactNode}) => {
  const [number, setNumber] = useState<number>(0);

  const increaseNumber = (n?: number) => {
    setNumber((num) => num + (n ?? 1));
  };

  return (
    <Counter.Provider value={{ count: number, increase:increaseNumber }}>
      {props.children}
    </Counter.Provider>
  );
};

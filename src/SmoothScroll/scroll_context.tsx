import { createContext, useContext, ReactNode, Dispatch, SetStateAction } from "react";

interface ScrollData {
  ease: number;
  current: number;
  previous: number;
  rounded: number;
}

interface ScrollContextType extends ScrollData {
  updateScrollData: (newData: ScrollData) => void;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export const useScrollContext = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};

interface ScrollProviderProps {
  children: ReactNode;
  data: ScrollData;
  setData: Dispatch<SetStateAction<ScrollData>>;
}

export const ScrollProvider = ({ children, data, setData }: ScrollProviderProps) => {
  const updateScrollData = (newData: ScrollData) => {
    setData(newData);
  };

  const contextValue: ScrollContextType = {
    ease: data.ease,
    current: data.current,
    previous: data.previous,
    rounded: data.rounded,
    updateScrollData,
  };

  return <ScrollContext.Provider value={contextValue}>{children}</ScrollContext.Provider>;
};

import React, { SetStateAction, useEffect } from "react";

const useResize = (breakPoint: number, setFunction: React.Dispatch<SetStateAction<boolean>>): void => {
  useEffect(() => {
    const handleScreenSize = (): void => {
      setFunction(window.innerWidth < breakPoint)
    }
    handleScreenSize();
    window.addEventListener('resize', handleScreenSize);

    return () => {
      window.removeEventListener('resize', handleScreenSize);
    }
  });
}

export default useResize;
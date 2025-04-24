import React from 'react';
import "./Hero.scss";

interface PropsType {
  children: React.ReactNode;
  directionReverse?: boolean | false;
}

export default function Hero({ children, directionReverse }: Readonly<PropsType>) {
  return (
    <div className={`hero section${directionReverse ? " direction-reverse" : ""}`}>
      {children}
    </div>
  )
}
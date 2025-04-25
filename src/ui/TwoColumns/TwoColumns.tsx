import React from 'react';
import "./TwoColumns.scss";

interface PropsType {
  children: React.ReactNode;
  directionReverse?: boolean | false;
}

export default function TwoColumns({ children, directionReverse }: Readonly<PropsType>) {
  return (
    <div className={`two-columns section${directionReverse ? " direction-reverse" : ""}`}>
      {children}
    </div>
  )
}
import React from 'react'
import "./SectionComponent.css";

type SectionComponentProps = {
  children: React.ReactNode;
}

function SectionComponent({children}: Readonly<SectionComponentProps>) {
  return (
    <div className="section-component">
      {children}
    </div>
  )
}

export default SectionComponent
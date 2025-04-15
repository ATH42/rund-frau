import React, { ReactNode } from 'react'

interface GridComponentProps {
  children: ReactNode
}

const GridComponent: React.FC<GridComponentProps> = ({ children }) => {
  return <div className="grid grid-cols-2 gap-5">{children}</div>
}

export default GridComponent

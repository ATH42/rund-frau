import React, { ReactNode } from 'react'

interface GridComponentProps {
  children: ReactNode
}

const GridComponent: React.FC<GridComponentProps> = ({ children }) => {
  return <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:w-2/3 w-full">{children}</div>
}

export default GridComponent

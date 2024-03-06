import { ReactNode } from "react"

interface DivProps {
  children: ReactNode;
  styles: string;
}

const Div: React.FC<DivProps> = ({children, styles}) => {
  return (
    <div className={`${styles}`}>
      {children}
    </div>
  )
}

export default Div
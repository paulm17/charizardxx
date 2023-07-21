import { ReactNode } from "react"

interface factoryProps {
  children: ReactNode
}

function Factory({ children }: factoryProps) {
  return <>{children}</>
}

export { Factory }

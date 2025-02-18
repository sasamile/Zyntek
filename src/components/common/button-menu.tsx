import { cn } from "@/lib/utils"
import { useState } from "react"

export function ButtonMenu() {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      <div className={cn(isActive && "")}></div>
    </div>
  )
}

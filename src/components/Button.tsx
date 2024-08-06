type ButtonProps = {
  children: React.ReactNode
  buttonType?: "primary" | "secondary"
  onClick: () => Promise<void>
}

export function Button({ children, buttonType, onClick }: ButtonProps) {
  return (
    <button className={`h-[45px] bg-[#473a2b]
       text-white rounded-md cursor-pointer hover:bg-[#322618] w-full 
       ${buttonType === "secondary" ? "opacity-85" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
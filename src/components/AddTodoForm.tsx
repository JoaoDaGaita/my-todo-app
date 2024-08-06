import { useContext, useState } from "react";
import { Button } from "./Button";
import { TodosContext } from "../contexts/TodosContextProvider";

export function AddTodoForm() {
  const [todoText, setTodoText] = useState("")
  const { handleAddTodo } = useContext(TodosContext)

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleAddTodo(todoText)
      setTodoText("")
    }}
    >
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input type="text" value={todoText} className="h-[45px] border border-black/[12%] my-2 text-sm block w-full px-4"
        onChange={(e) => {
          setTodoText(() => e.target.value)
        }}
      />

      <Button>Add to list</Button>
    </form >
  )
}
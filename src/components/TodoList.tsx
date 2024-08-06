import { useContext } from "react"
import { DeleteButton } from "./DeleteButton"
import { TodosContext } from "../contexts/TodosContextProvider"

export function TodoList() {
  const { handleToggleTodo, todos, handleDeleteTodo } = useContext(TodosContext)
  return (
    <ul>
      {
        todos.length === 0 ? <li className="h-full flex justify-center items-center font-bold">Start By adding a todo</li> : null
      }
      {todos.map((todo) => (
        <li key={todo.id} className="flex justify-between items-center px-8 h-12 text-sm cursor-pointer
          border-b border-black/[0.08]"
          onClick={() => handleToggleTodo(todo.id)}
        >
          <span className={`${todo.isCompleted === true ? " line-through text-[#ccc]" : ""} `}>
            {todo.text}
          </span>

          <DeleteButton id={todo.id} onDeleteTodo={handleDeleteTodo} />
        </li>
      ))
      }
    </ul >
  )
}
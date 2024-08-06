import { createContext, useEffect, useState } from "react"
import { Todo } from "../lib/types"
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type TodosContextProviderProps = {
  children: React.ReactNode
}

type TTodosContext = {
  todos: Todo[]
  handleAddTodo: (todoText: string) => void
  handleToggleTodo: (id: number) => void
  handleDeleteTodo: (id: number) => void
  numberOfCompletedTodos: number
  totalNumberOfTodos: number
}

export const TodosContext = createContext<TTodosContext>({} as TTodosContext)


const getInitialTodos = () => {
  const savedTodos = localStorage.getItem("todos")
  if (savedTodos) {
    return JSON.parse(savedTodos)
  } else {
    return []
  }
}

export function TodosContextProvider({ children }: TodosContextProviderProps) {
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos)
  const { isAuthenticated } = useKindeAuth()

  const totalNumberOfTodos = todos.length
  const numberOfCompletedTodos = todos.filter((todo) => todo.isCompleted).length
  const handleAddTodo = (todoText: string) => {
    if (!todoText || todoText.trim() === "") {
      return
    }

    if (todos.length >= 3 && !isAuthenticated) {
      alert("Log in to add more than 3 todos")
      return
    }
    else {
      setTodos((prev) => [...prev, {
        id: prev.length + 1,
        text: todoText,
        isCompleted: false
      }
      ])
    }
  }

  const handleToggleTodo = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted }
      }

      return todo
    }))
  }

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <TodosContext.Provider
      value={{
        todos,
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo,
        numberOfCompletedTodos,
        totalNumberOfTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}
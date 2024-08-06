type DeleteButtonProps = {
  onDeleteTodo: (id: number) => void
  id: number
}

export function DeleteButton({ id, onDeleteTodo }: DeleteButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation()
        onDeleteTodo(id)
      }}
    >
      ❌
    </button>
  )
}
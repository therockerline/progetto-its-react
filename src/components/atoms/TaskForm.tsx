import { createRef, useEffect } from "react"
import type { Task } from "../../types"

type TaskFormProps = {
  onSubmit: (newItem: Task) => void
}

export function TaskForm({
  onSubmit
}: TaskFormProps) {

  const dateRef = createRef<HTMLInputElement>()
  const descriptionRef = createRef<HTMLTextAreaElement>()
  const submitRef = createRef<HTMLButtonElement>()

  useEffect(() => {

  }, [])

  const handleSubmit = () => {
    const date = dateRef.current?.value
    const description = descriptionRef.current?.value
    onSubmit({
      date,
      description,
      done: false
    })
  }

  return (
    <div className="taskForm">
      <input ref={dateRef} type="date" />
      <textarea ref={descriptionRef} />
      <button ref={submitRef} onClick={handleSubmit}>conferma task</button>
    </div>
  )
}
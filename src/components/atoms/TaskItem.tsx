import type { Task } from "../../types"

export type TaskItemProps = {
  idx: number,
  task: Task
}

export const TaskItem = ({ idx, task }: TaskItemProps) => {

  return (
    <div className="taskForm">
      <div>{idx}]</div>
      <div>{task.description}</div>
      <input type="checkbox" checked={task.done} />
    </div>
  )
}
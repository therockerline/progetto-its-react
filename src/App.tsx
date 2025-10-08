import './App.css'
import { StateContext } from './context/StateContext'
import { TaskForm } from './components/atoms/TaskForm'
import { TaskItem } from './components/atoms/TaskItem'
import { useEffect, useState } from 'react'
import type { Task } from './types'
function App() {

  const [allTasks, setAllTasks] = useState<Task[] | undefined>(undefined)

  useEffect(() => {
    //inizializzazione
    const strTasks = localStorage.getItem('todo-app-tasks') ?? '[]'
    setAllTasks(() => [
      ...(JSON.parse(strTasks))
    ])
  }, [])

  useEffect(() => {
    if (allTasks)
      localStorage.setItem('todo-app-tasks', JSON.stringify(allTasks))
  }, [allTasks])

  function handleOnSubmit(newTask: Task): void {
    setAllTasks((prevTasks) => [
      newTask,
      ...prevTasks!,
    ])
  }

  return (
    <StateContext>
      <TaskForm onSubmit={handleOnSubmit} />
      {allTasks?.map((currentTask, idx) => {
        return <TaskItem key={idx} idx={idx} task={currentTask} />
      })}
    </StateContext>
  )
}

export default App

import { TaskContext } from "./TasksContext"

export function TasksProvider({ children, value }) {

  return (
    <TaskContext.Provider value={value}>
        {children}
    </TaskContext.Provider>
  )
}


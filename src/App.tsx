import React, { useState } from 'react'
import DisplayTask from './components/DisplayTask'

export interface taskInterface {
  id: number,
  complete: boolean, 
  task: string, 
  priority: 1 | 2 | 3
}

type currentTaskInterface = {
  task: string, 
  priority: 1 | 2 | 3
}

const App = () => {

  const [task, setTask] = useState<taskInterface[]>([])
  const [currentTask, setCurrentTask] = useState<currentTaskInterface>({task: "", priority: 1})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCurrentTask(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleComplete = (id: number) => {
    setTask(task.map(ele => {
      if (ele.id == id) ele.complete = !ele.complete
      return ele
    }))
  }

  const handleDelete = (id: number) => {
    setTask(task.filter(ele => ele.id != id))
  }

  const handleSubmit = () => {
    setTask(prev => [...prev, {id: Math.random(), complete: false, ...currentTask}])
  }

  return (
    <div className='container w-3/4 m-auto mt-4 p-4 border rounded-lg'>
      <div className='grid grid-cols-5 gap-x-3 mb-4'>
        <input className='col-span-3 border p-2 rounded-lg focus:outline-sky-700 ' onChange={handleChange} name='task' value={currentTask.task} type="text" />
        <select className='border rounded-lg' onChange={handleChange} name="priority" value={currentTask.priority} id="">
          <option value={1}>Low</option>
          <option value={2}>Medium</option>
          <option value={3}>High</option>
        </select>
        <button className='rounded-lg border bg-sky-700 text-white font-bold active:bg-white active:text-black' onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <DisplayTask tasks={task} handleComplete={handleComplete} handleDelete={handleDelete} />
      </div>
    </div>
  )
}

export default App
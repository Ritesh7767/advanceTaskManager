import type { taskInterface } from '../App'
import { TiTick } from 'react-icons/ti'
import { MdDelete } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

interface DisplayTaskInterface {
    tasks: taskInterface[],
    handleComplete: (id: number) => void,
    handleDelete: (id: number) => void
}

const DisplayTask = ({tasks, handleComplete, handleDelete}: DisplayTaskInterface) => {

    const [todos, setTodos] = useState<taskInterface[]>([])

    useEffect(() => {
        setTodos([...tasks.sort((a, b) => b.priority - a.priority)])
    }, [tasks])
    
    const handlePriorityFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value == "all") return setTodos(tasks)
        setTodos(tasks.filter(ele => ele["priority"] == e.target.value as unknown as number))
    }

    const handleCompleteFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let value = e.target.value == "1" ? true : false
        setTodos(tasks.filter(ele => ele.complete == value))
    }


  return (
    <div className='border'>
        <table className='w-full text-center'>
            <thead>
                <tr>
                    <th>Sr No.</th>
                    <th>Task</th>
                    <th>
                        <select name="" id="" onChange={handlePriorityFilter}>
                            <option value="all">Priority</option>
                            <option value="3">High</option>
                            <option value="2">Medium</option>
                            <option value="1">Low</option>
                        </select>
                    </th>
                    <th>
                        <select name="" id="" onChange={handleCompleteFilter}>
                            <option value={"1"}>Complete</option>
                            <option value={"0"}>InComplete</option>
                        </select>
                    </th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody className=''>
                {
                    todos.map((ele, index) => (
                        <tr className='border' key={index}>
                            <td>{index + 1}</td>
                            <td style={{textDecoration: ele.complete ? "line-through": "none"}}>{ele.task}</td>
                            <td>{ele.priority == 1 ? "Low" : ele.priority == 2 ? "Medium": "High"}</td>
                            <td onClick={() => handleComplete(ele.id)} className=''>{ele.complete ? <RxCross2/> : <TiTick/>}</td>
                            <td onClick={() => handleDelete(ele.id)} className=''><MdDelete/></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default DisplayTask
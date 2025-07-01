import type { taskInterface } from '../App'
import { CgCross } from 'react-icons/cg'
import { TiTick } from 'react-icons/ti'
import { MdDelete } from 'react-icons/md'

interface DisplayTaskInterface {
    tasks: taskInterface[],
    handleComplete: (id: number) => void,
    handleDelete: (id: number) => void
}

const DisplayTask = ({tasks}: DisplayTaskInterface) => {

  return (
    <div className='border'>
        <table className='w-full text-center'>
            <thead>
                <tr>
                    <th>Sr No.</th>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Completed</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody className=''>
                {
                    tasks.map((ele, index) => (
                        <tr className='border' key={index}>
                            <td>{index + 1}</td>
                            <td>{ele.task}</td>
                            <td>{ele.priority == 1 ? "Low" : ele.priority == 2 ? "Medium": "High"}</td>
                            <td className=''>{ele.complete ? <CgCross/> : <TiTick/>}</td>
                            <td className=''><MdDelete/></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default DisplayTask
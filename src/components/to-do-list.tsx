import { SetStateAction, useState } from "react"
import PrimaryBtn from "./primary-btn";
import OutlineBtn from "./outline-btn";
import DangerOutlineBtn from "./danger-outline-btn";

const ToDoList = () => {

  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | null>(null)

  function handleInputChange(event: { target: { value: SetStateAction<string>; }; }) {
    setNewTask(event.target.value)
  }
  function addTask() {

    if (newTask.trim()?.length > 0) {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }

  }
  function deleteTask(index: number) {
    const updatedTask = tasks.filter((_, i) => i !== index)
    setTasks(updatedTask);
  }

  function updateTask(index: number) {
    const selectedtask = tasks[index]
    setNewTask(selectedtask)
    setEditIndex(index)
  }

  return (
    <>


      <div className="max-w-3xl  mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">TODO</h2>
        <div className="card" >
          <div className="flex gap-3 items-center">
            <input className="form-control " type="text" placeholder="Enter a task... " value={newTask} onChange={handleInputChange} />
            <PrimaryBtn onclick={addTask} title="Add" />

          </div>
        </div>
        <br />
        <div>
          {tasks.length === 0 ? <div className="card text-center">
            <p>No task created yet!</p>
          </div> :
            <div className=" space-y-3">
              {tasks?.map((task, index) => {
                return <div className="card" key={index}>
                  <div className="flex justify-between gap-3 items-center ">
                    <span>{task}</span>
                    <div className="flex items-center gap-3">
                      <OutlineBtn disabled={editIndex !== null} onclick={() => updateTask(index)} title="Edit" />

                      <DangerOutlineBtn disabled={editIndex !== null} onclick={() => deleteTask(index)} title="Delete" />
                    </div>
                  </div>
                </div>
              })}

            </div>}
        </div>

      </div>

    </>
  )
}

export default ToDoList
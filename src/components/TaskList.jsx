import Task from "./Task"

const TaskList = () => {
  return (
    <div className=' md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      <h2 className=' font-black text-3xl text-center'>Lista de Tareas</h2>
      <p className=' text-lg mt-5 text-center mb-10'>Administra tus<span className=' text-orange-600 font-bold'> Tareas</span></p>

      <Task />
      <Task /><Task />
      <Task />
      <Task />
      <Task />
 
    </div>
  )
}

export default TaskList

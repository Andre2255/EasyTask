
import Task from "./Task"

const TaskList = ({ tareas, setTarea, eliminarTarea }) => {


  return (
    <div className=' md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {tareas && tareas.length ? (
        <>
          <h2 className=' font-black text-3xl text-center'>Lista de Tareas</h2>
          <p className=' text-lg mt-5 text-center mb-10'>Administra tus<span className=' text-orange-600 font-bold'> Tareas</span></p>

          {tareas.map((tarea) => [
            <Task key={tarea.id} tarea={tarea} setTarea={setTarea} eliminarTarea={eliminarTarea}/>
          ])}
        </>
      ) : (
        <>
         <h2 className=' font-black text-3xl text-center'>No hay tareas</h2>
          <p className=' text-lg mt-5 text-center mb-10'>Empieza a agregar tareas ahora<span className=' text-orange-600 font-bold'> y apareceran aqui</span></p>

        </>
      )}



    </div>
  )
}

export default TaskList

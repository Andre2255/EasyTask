
const Task = ({tarea, setTarea, eliminarTarea}) => {
   const {nombre, creador, email, fecha, detalle, id} = tarea

   const handleEliminar = ()=>{
    const respuesta = confirm("¿Desea eliminar esta tareas?")
    if(respuesta){
        eliminarTarea(id)
    }

   }
    return (
        <div className='mx-5 my-4 bg-white shadow-md px-5 py-10 rounded-xl'>

            <p className=' font-bold mb-3 text-gray-700 uppercase'>
                Tarea: <span className=' font-normal normal-case'>{nombre}</span>
            </p>
            <p className=' font-bold mb-3 text-gray-700 uppercase'>
                Creador : <span className=' font-normal normal-case'>{creador}</span>
            </p>
            <p className=' font-bold mb-3 text-gray-700 uppercase'>
                Email : <span className=' font-normal normal-case'>{email}</span>
            </p>
            <p className=' font-bold mb-3 text-gray-700 uppercase'>
                Fecha : <span className=' font-normal normal-case'>{fecha}</span>
            </p>
            <p className=' font-bold mb-3 text-gray-700 uppercase'>
                Detalle : <span className=' font-normal normal-case'>{detalle}</span>
            </p>

            <div className=" flex justify-between mt-10 px-8">
                <button className=" py-2 px-10 bg-orange-600 text-white hover:bg-orange-700 font-bold uppercase rounded" onClick={() => setTarea(tarea)} type="button" >Editar</button>
                <button className=" py-2 px-10 bg-red-600 text-white hover:bg-red-700 font-bold uppercase rounded" onClick={handleEliminar} type="button">Eliminar</button>
            </div>
        </div>
    )
}

export default Task

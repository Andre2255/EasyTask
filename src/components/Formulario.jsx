import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({ tareas, setTareas, tarea, setTarea }) => {
  const [nombre, setNombre] = useState("")
  const [creador, setCreador] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [detalle, setDetalle] = useState("")

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(tarea).length > 0) {
      setNombre(tarea.nombre)
      setCreador(tarea.creador)
      setEmail(tarea.email)
      setFecha(tarea.fecha)
      setDetalle(tarea.detalle)
    }
  }, [tarea])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //validando si hay campos vacios en el formulario
    if ([nombre, creador, email, fecha, detalle].includes('')) {
      setError(true)
      return
    }
    setError(false)

    //task object
    const objectTarea = {
      nombre, creador, email, fecha, detalle
    }

    if (tarea.id) {
      //edit task
      objectTarea.id = tarea.id
      const tareaActualizada = tareas.map(tareaState => tareaState.id === tarea.id ? objectTarea : tareaState)
      setTareas(tareaActualizada);
      setTarea({})
    } else {
      //add the object
      objectTarea.id = generarId()
      setTareas([...tareas, objectTarea])
    }


    //reset all values from form
    setNombre('')
    setCreador('')
    setEmail('')
    setFecha('')
    setDetalle('')
  }


  return (
    <div className=' md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className=' font-black text-3xl text-center'>Nueva Tarea</h2>


      <p className=' text-lg mt-5 text-center mb-10'>Añade tareas y<span className=' text-orange-600 font-bold'> Administralas</span></p>

      <form onSubmit={handleSubmit} className=' bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        {error && <Error>Todos los campos son obligatiorios</Error>}
        <div className=' mb-5'>
          <label className=' block text-gray-700 uppercase font-bold' htmlFor="Nombre de la tarea">Nombre de la tarea</label>
          <input className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='Nombre de la tarea' type="text" placeholder='Nombre de la tarea' onChange={(e) => setNombre(e.target.value)} value={nombre} />
        </div>

        <div className=' mb-5'>
          <label className=' block text-gray-700 uppercase font-bold' htmlFor="Nombre del credor">Creador</label>
          <input className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='Nombre del credor' type="text" placeholder='Nombre del creador' onChange={(e) => setCreador(e.target.value)} value={creador} />
        </div>

        <div className=' mb-5'>
          <label className=' block text-gray-700 uppercase font-bold' htmlFor="Email">Email</label>
          <input className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='Email' type="Email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>

        <div className=' mb-5'>
          <label className=' block text-gray-700 uppercase font-bold' htmlFor="Fecha de creacion">Fecha de creacion</label>
          <input className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='Fecha de creacion' type="date" onChange={(e) => setFecha(e.target.value)} value={fecha} />
        </div>

        <div className=' mb-5'>
          <label className=' block text-gray-700 uppercase font-bold' htmlFor="Detalle">Detalle</label>
          <textarea className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='Detalle' type="Text" placeholder='Detalle de la tarea' onChange={(e) => setDetalle(e.target.value)} value={detalle} />
        </div>

        <input type="submit" className=' bg-orange-600 w-full p-3 text-white uppercase font-bold hover:bg-orange-700 transition-all' value={tarea.id ? "Editar Tarea" : "Agregar Tarea"} />
      </form>
    </div>
  )
}

export default Formulario

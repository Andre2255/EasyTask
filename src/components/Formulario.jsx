import React from 'react'

const Formulario = () => {
  return (
    <div className=' md:w-1/2 lg:w-2/5'>
      <h2 className=' font-black text-3xl text-center'>Nueva Tarea</h2>


      <p className=' text-lg mt-5 text-center mb-10'>Añade tareas y<span className=' text-orange-600 font-bold'> Administralas</span></p>

      <form className=' bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        <div className=' mb-5'>
          <label className=' block text-gray-700 uppercase font-bold' htmlFor="Nombre de la tarea">Nombre de la tarea</label>
          <input className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='Nombre de la tarea' type="text" placeholder='Nombre de la tarea' />
        </div>

        <div className=' mb-5'>
          <label className=' block text-gray-700 uppercase font-bold' htmlFor="Nombre del credor">Creador</label>
          <input className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='Nombre del credor' type="text" placeholder='Nombre del creador' />
        </div>

        <div className=' mb-5'>
          <label className=' block text-gray-700 uppercase font-bold' htmlFor="Email">Email</label>
          <input className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='Email' type="Email" placeholder='Email' />
        </div>

        <div className=' mb-5'>
          <label className=' block text-gray-700 uppercase font-bold' htmlFor="Fecha de creacion">Fecha de creacion</label>
          <input className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='Fecha de creacion' type="date" />
        </div>

        <div className=' mb-5'>
          <label className=' block text-gray-700 uppercase font-bold' htmlFor="Detalle">Detalle</label>
          <textarea className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='Detalle' type="Text" placeholder='Detalle de la tarea'/>
        </div>

        <input type="submit" className=' bg-orange-600 w-full p-3 text-white uppercase font-bold hover:bg-orange-700 transition-all' value={"Agregar Tarea"} />
      </form>
    </div>
  )
}

export default Formulario

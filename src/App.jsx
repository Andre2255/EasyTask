import { useState, useEffect } from "react"
import Header from "./components/Header"
import Fomulario from "./components/Formulario"
import TaskList from "./components/TaskList"


function App() {

  const [tareas, setTareas] = useState([])
  const [tarea, setTarea] = useState({})
  const [datosCargados, setDatosCargados] = useState(false);

  useEffect(() =>{
    const obtenerLS = ()=>{
      const tareasLS = JSON.parse(localStorage.getItem('tareas')) ?? [];
      setTareas(tareasLS)
      setDatosCargados(true);
    }
    obtenerLS()
  }, []);

  useEffect(() =>{
    if (datosCargados) {
    localStorage.setItem('tareas', JSON.stringify(tareas));
    }
  }, [tareas]);

  const eliminarTarea = (id)=>{
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    console.log(tareasActualizadas)
    setTareas(tareasActualizadas)
  }

  return (
    <div className=" container mx-auto mt-20">
      <Header />
      <div className=" mt-12 md:flex p-10">
        <Fomulario tareas={tareas} setTareas={setTareas} tarea={tarea} setTarea={setTarea} />
        <TaskList tareas={tareas} setTarea={setTarea} eliminarTarea={eliminarTarea}/>
      </div>

    </div>
  )
}

export default App

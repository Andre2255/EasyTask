import { useState } from "react"
import Header from "./components/Header"
import Fomulario from "./components/Formulario"
import TaskList from "./components/TaskList"


function App() {

  const [tareas, setTareas] = useState([])

  return (
    <div className=" container mx-auto mt-20">
      <Header />
      <div className=" mt-12 md:flex p-10">
        <Fomulario setTareas={setTareas}/>
        <TaskList />
      </div>

    </div>
  )
}

export default App

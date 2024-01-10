import Header from "./components/Header"
import Fomulario from "./components/Formulario"
import TaskList from "./components/TaskList"


function App() {

  return (
    <div className=" container mx-auto mt-20">
      <Header />
      <div className=" mt-12 md:flex">
        <Fomulario />
        <TaskList />
      </div>

    </div>
  )
}

export default App

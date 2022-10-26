import './App.css';
// import Ejemplo4 from './hooks/Ejemplo4';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Clock from './components/pure/clock';
import ClockF from './components/pure/clockF';
import Greetingstyled from './components/pure/greetingStyled';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Componente propio greetings.jsx */}
        {/* <Greeting name="Oveja"></Greeting> */}

        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name="Ezequiel"></GreetingF> */}

        {/* Componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}

        {/* Ejemplo de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre="Ezequiel"> */}
          {/* Todo lo que hau aquí dentro es tratado como prop.children */}
          {/* <h3>Contenido del prop.children</h3> */}
        {/* </Ejemplo4> */}

        {/* <Greetingstyled name='Ezequiel'></Greetingstyled> */}

        <Clock></Clock>

        <ClockF></ClockF>
      </header>
    </div>
  );
}

export default App;

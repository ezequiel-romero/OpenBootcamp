import './App.css';
// import Ejemplo4 from './hooks/Ejemplo4';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import Clock from './components/pure/clock';
// import ClockF from './components/pure/clockF';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';
// import Greetingstyled from './components/pure/greetingStyled';
// import TaskListComponent from './components/container/task_list';
import OptionalRender from './components/pure/optionalRender';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* Componente propio greetings.jsx */}
        {/* <Greeting name="Oveja"></Greeting> */}

        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name="Ezequiel"></GreetingF> */}

        {/* Ejemplo de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre="Ezequiel"> */}
          {/* Todo lo que hau aquí dentro es tratado como prop.children */}
          {/* <h3>Contenido del prop.children</h3> */}
        {/* </Ejemplo4> */}

        {/* <Greetingstyled name='Ezequiel'></Greetingstyled> */}

        {/* Ejercicio sesiones 4, 5 y 6 */}
        {/* <Clock></Clock> */}
        {/* <ClockF></ClockF> */}
      {/* </header> */}

      {/* Componente de listado de tareas */}
      {/* <TaskListComponent></TaskListComponent> */}

      <OptionalRender></OptionalRender>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import ContactListComponent from './components/container/contact_list_component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ContactListComponent></ContactListComponent>
        </div>
      </header>
    </div>
  );
}

export default App;

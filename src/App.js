import './App.css';
import {OpenModal, OpenModalAccount} from './components/OpenModal';

function App() {

 


  function handleOpenModal() {
  
      OpenModal();
    
      
  }

  function handleOpenModal2() {
    OpenModalAccount();
  }


  return (
    <div className="App">

      <button onClick={handleOpenModal}>Abrir modal</button>
      <button onClick={handleOpenModal2}>Abrir modal</button>
    </div>
  );
}

export default App;

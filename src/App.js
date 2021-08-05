import './Components/App.css';
import Class from './Components/Class';
import Top from './Components/Top';

function App() {
  return (
    <>
     <Top/> 
    <div className="container-fluid">
      <div className="row">
      <div className="col">
        <Class/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
   <>
<Navbar title="UtilsApp"></Navbar>

<div className="container mt-5">
<TextForm title="Enter text here: "></TextForm>
</div>

   </>
  );
}

export default App;

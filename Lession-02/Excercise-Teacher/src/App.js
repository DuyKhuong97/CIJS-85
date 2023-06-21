import './App.css';
import Input from './input';
import Options from './option';
import Consume from './consume';


const App= () =>{
  return (
    <div className="Container">
      <Input/>
      <hr/>
      <Options/>
      <Consume/>
    </div>
  );
}

export default App;

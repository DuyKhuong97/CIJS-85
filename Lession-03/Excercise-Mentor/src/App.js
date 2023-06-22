
import './App.css';
import Navsecion from './Navsection';
import ProductList from './ProductsContainer/ProductList';


function App() {
  return (
    <div className="Container">
      <Navsecion/>
      <div>
      <ProductList/>
      </div>

    </div>
  );
}

export default App;

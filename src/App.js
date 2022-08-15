import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'Hp laptop', price: 150000 },
    { name: 'Iphone', price: 50000 },
    { name: 'Watch', price: 1500 },
    { name: 'Breslate', price: 1800 },
  ]

  return (
    <div className="App">

      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }

      {/* <Product name="Laptop" price="80000"></Product>
      <Product name="Phone" price="75000"></Product>
      <Product name="Watch" price="750"></Product> */}
    </div>
  );
}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;

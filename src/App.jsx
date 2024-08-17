/* eslint-disable react/prop-types */
import './App.css';
import data from './data.js';

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {
    color: 'red',
    fontSize: '50px',
    textTransform: 'uppercase',
  };
  return <h1 style={style}>Warteg boy</h1>;
}

function Menu() {
  // const foods = [];
  const foods = data;
  const numFoods = foods.length;
  return (
    <main className="menu">
      <h2>Menu Kita</h2>
      {numFoods > 0 ? (
        <ul className="foods">
          {foods.map((food) => (
            <Food food={food} key={food.nama} />
          ))}
        </ul>
      ) : (
        <p>Kosong, gan. Besok dateng lagi.</p>
      )}
    </main>
  );
}

function Food({ food }) {
  return (
    <li className="food">
      <img src={food.foto} alt={food.nama} width="100" height="70" />
      <div>
        <h3>{food.nama}</h3>
        <p>{food.deskripsi}</p>
        <span>{food.harga}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 20;
  const jamTutup = 22;
  const isOpen = hour >= jamBuka && hour <= jamTutup;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            {new Date().getFullYear()} Warung Mang Udin | jam buka {jamBuka} -
            jam tutup {jamTutup}
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          Maaf gan masih tutup. Coba dateng lagi sekitar jam {jamBuka}-
          {jamTutup}.
        </p>
      )}
    </footer>
  );
}

export default App;

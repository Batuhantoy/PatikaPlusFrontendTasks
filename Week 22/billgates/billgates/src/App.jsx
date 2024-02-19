import { useState } from 'react';
import Card from './components/card.jsx';
import Receipt from './components/receipt.jsx';
import "./style.css";

function App() {

  const products = [
    {
      id: 0,
      name: "Skyscraper",
      price: 50,
      image: "../src/asset/skyscraper.jpg",
      quantity: 0
    },
    {
      id: 1,
      name: "Cruise Ship",
      price: 100,
      image: "../src/asset/cruise-ship.jpg",
      quantity: 0

    },
    {
      id: 2,
      name: "NBA Team",
      price: 150000,
      image: "../src/asset/nba-team.jpg",
      quantity: 0
    },
    {
      id: 3,
      name: "Skyscraper1",
      price: 500,
      image: "../src/asset/skyscraper.jpg",
      quantity: 0
    },
    {
      id: 4,
      name: "Cruise Ship1",
      price: 1000,
      image: "../src/asset/cruise-ship.jpg",
      quantity: 0

    },
    {
      id: 5,
      name: "NBA Team1",
      price: 1200,
      image: "../src/asset/nba-team.jpg",
      quantity: 0
    }
  ]

  const [balance, setBalance] = useState(1000000000);
  const [basket, setBasket] = useState(products);
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateBalance = (newBalance) => {
    setBalance(newBalance);
  };

  function updateBasket(id, state) {
    const newBasket = structuredClone(basket);
    if (state === "buy") {
      newBasket[id].quantity += 1;
      setBasket(newBasket);
      setCount(count + 1);
      setTotalPrice(totalPrice + newBasket[id].price);
    } else {
      newBasket[id].quantity -= 1;
      setBasket(newBasket);
      setCount(count - 1);
      setTotalPrice(totalPrice - newBasket[id].price)
    }
  }

  return (
    <>
      <div>
        <h1 style={{ backgroundColor: 'green', textAlign: 'center', fontWeight: 'bold', color: 'white' }}>${balance}</h1>
        <div className='card'>
          {basket.map((card) => {
            return (
              <Card
                key={card.name}
                id={card.id}
                name={card.name}
                price={card.price}
                image={card.image}
                balance={balance}
                updateBalance={updateBalance}
                updateBasket={updateBasket}
              />
            );
          })}
        </div>
        {count > 0 && (
          <div className="receipt">
            <div className='receiptName'>Your Receipt</div>
            {basket.map((item) => {
              if (item.quantity > 0) {
                return (
                  <Receipt
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                  />
                );
              }
            })}
            <hr className='receiptLine' />
            <div className='total'>
              <div>TOTAL</div>
              <div>${totalPrice}</div>
              <br />
              <br />
            </div>
          </div>

        )}
      </div>
    </>
  )
}

export default App
import { useState } from "react";

function Cart() {
  const products = [
    { id: 1, name: "San pham A", price: 100000 },
    { id: 2, name: "San pham B", price: 200000 },
    { id: 3, name: "San pham C", price: 150000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Bai 3: Gio Hang</h2>
      <h3>Danh sach san pham</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.price.toLocaleString()} VND
            <button onClick={() => addToCart(p)}>Them</button>
          </li>
        ))}
      </ul>

      <h3>Gio hang</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price.toLocaleString()} VND
          </li>
        ))}
      </ul>

      <p>
        <b>Tong tien:</b> {total.toLocaleString()} VND
      </p>
    </div>
  );
}

export default Cart;

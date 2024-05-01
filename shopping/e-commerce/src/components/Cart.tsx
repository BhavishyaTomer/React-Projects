const cartItems = [];

const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const total = subtotal + tax + shippingCharges;
const discount = 400;
const Cart = () => {
  return (
    <div className="cart">
      <main></main>
      <aside>
        <p>Subtotal: *{subtotal}</p>
        <p>Shipping Charges: {shippingCharges}</p>
<p>Tax: *{tax}</p>
<p>
Discount <em>*{discount}</em>
</p>
      </aside>
    </div>
  );
};
export default Cart;
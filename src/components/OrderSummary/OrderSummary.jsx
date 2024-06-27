import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../redux/features/cartSlice";
import "./OrderSummary.css";
import { useDispatch, useSelector } from "react-redux";
function extractStartingPrice(priceString) {
  return parseFloat(priceString.split(" ")[0]);
}
function OrderSummary() {
  const cartItems = useSelector((state) => state.cart.cartItem);
  // console.log("item", cartItems);
  const price = cartItems.price;
  // console.log("price", price);
  const dispatch = useDispatch();

  const handleIncrement = (itemId) => {
    // console.log("itemid", itemId);
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };
  const handleClearCartItems = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((total, item) => {
    // console.log("itemprice", item.price);
    // console.log("extractitemprice", extractStartingPrice(item.price));
    return total + extractStartingPrice(item.price) * item.quantity;
  }, 0);

  const totalItem = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return (
    <div className="order-summary">
      <div className="order-heading">
        <p>Order Summary</p>
        {cartItems.length > 0 ? (
          <button className="empty-cart-button" onClick={handleClearCartItems}>
            <img src="/delete.png" alt="" />
            Empty Cart
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="order-details">
        {cartItems.length === 0 ? (
          <>
            <img src="/empty-cart.png" alt="" className="empty-order" />
            <p>Your cart is empty!</p>
          </>
        ) : (
          <table className="order-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>Product Image </th>
                <th>Name</th>
                <th> Price</th>
                <th>Quantity</th>
                <th style={{ textAlign: "right" }}>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                return (
                  <>
                    <tr key={item.id}>
                      <td>
                        <img
                          src="/delete.png"
                          alt=""
                          className="delete-icon"
                          onClick={() => handleRemove(item.id)}
                        />
                      </td>
                      <td>
                        <img
                          src={item.image}
                          alt=""
                          className="product-image"
                        />
                      </td>
                      <td>{item.name}</td>
                      {/* <td>₹{extractStartingPrice(item.price)}</td> */}
                      <td>₹{item.price}</td>
                      <td>
                        <div className="quantity">
                          <img
                            src="/minus.png"
                            alt=""
                            className="plus-minus"
                            onClick={() => handleDecrement(item.id)}
                          />{" "}
                          {item.quantity}
                          <img
                            src="/plus.png"
                            alt=""
                            className="plus-minus"
                            onClick={() => handleIncrement(item.id)}
                          />
                        </div>{" "}
                      </td>
                      <td style={{ textAlign: "right" }}>
                        ₹{item.quantity * extractStartingPrice(item.price)}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>&nbsp;</th>
                <th colSpan={3}></th>
                <th>
                  {/* Total Items <span style={{ marginLeft: "2px", marginRight: "2px" }}>: </span> */}
                  Total Items <span>: </span>
                  <span style={{ color: "red" }}>{totalItem}</span>
                </th>

                <th style={{ textAlign: "right" }}>
                  Total Price <span>:</span>
                  <span style={{ color: "red" }}>₹{totalPrice}</span>
                </th>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </div>
  );
}

export default OrderSummary;

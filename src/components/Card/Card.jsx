import { useDispatch } from "react-redux";
import "./Card.css";
import { addToCart } from "../../redux/features/cartSlice";

export default function Card({
  id,
  name,
  image,
  price,
  foodType,
  rating,
  quantity,
}) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    // quantity += 1;
    const snackData = { id, name, image, price, foodType, rating, quantity };

    dispatch(addToCart(snackData));
  };

  const vegImage = "/public/veg.png";
  const nonvegImage = "/public/nonveg.png";
  return (
    <div className="card">
      <img src={image} alt="" className="card-image" />
      <div className="details">
        <div className="first-section">
          <p>
            {/* <span>Price:</span> ₹150 per serving */}
            <span>Name:</span> {name}
          </p>
          {foodType.dietary === "Vegetarian" ? (
            <img src={vegImage} alt="" className="food-type" />
          ) : (
            <img src={nonvegImage} alt="" className="food-type" />
          )}
        </div>
        <p>
          {" "}
          <span>Price:</span> ₹{price}
        </p>
        <p>
          <span>Snack Type:</span> {foodType.type}
        </p>
        <div className="last-section">
          <p>
            <span>Rating:</span> <span className="rating">{rating} ⭐</span>
          </p>
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}

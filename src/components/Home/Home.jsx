import Card from "../Card/Card";
import "./Home.css";
import snacks from "../../staticData/staticData";
import { useSelector } from "react-redux";

function shuffleArray(arr) {
  // creates a shallow copy of input Array, ensures that original array is not modified
  let shuffledArray = arr.slice();
  for (let i = shuffledArray.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function Home() {
  const allSnacks = [
    ...snacks.savoury,
    ...snacks.sweet,
    ...snacks.healthy,
    ...snacks.iceCreams,
  ];

  const shuffledSnacks = shuffleArray(allSnacks);

  // useSelector helps to select the state stored in the reducer

  const { displayedSnacks } = useSelector((state) => state.displaySnack);
  const { selectedFilters } = useSelector((state) => state.filter);
  const filteredItems =
    selectedFilters.length > 0
      ? shuffledSnacks.filter(
          (item) =>
            selectedFilters.includes(item.foodType.type) ||
            selectedFilters.includes(item.foodType.dietary)
        )
      : shuffledSnacks;
  return (
    <div className="home">
      {displayedSnacks.length > 1 &&
        displayedSnacks.map((snack) => (
          <Card
            key={snack.id}
            id={snack.id}
            name={snack.name}
            image={snack.image}
            price={snack.price}
            foodType={snack.foodType}
            rating={snack.rating}
            quantity={snack.quantity}
          />
        ))}
      {displayedSnacks.length === 1 &&
        displayedSnacks.map((snack) => (
          <Card
            key={snack.id}
            id={snack.id}
            name={snack.name}
            image={snack.image}
            price={snack.price}
            foodType={snack.foodType}
            rating={snack.rating}
            quantity={snack.quantity}
          />
        ))}

      {displayedSnacks.length === 0 &&
        filteredItems.map((snack) => (
          <Card
            key={snack.id}
            id={snack.id}
            name={snack.name}
            image={snack.image}
            price={snack.price}
            foodType={snack.foodType}
            rating={snack.rating}
            quantity={snack.quantity}
          />
        ))}
    </div>
  );
}

export default Home;

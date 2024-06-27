// import "./SideBar.css";
// import { useState } from "react";
// function SideBar({ isOpen, toggleSideBar }) {
//   const items = [
//     { name: "Sweet", id: 1 },
//     { name: "Savoury", id: 2 },
//     { name: "Healthy", id: 3 },
//     { name: "Ice Cream", id: 4 },
//     { name: "Vegetarian", id: 5 },
//     { name: "Non-Vegetarian", id: 6 },
//   ];
//   const [filter, setFilter] = useState("");
//   const [toggleImages, setToggleImages] = useState(items.map(() => false));
//   const imageToggle = (index) => {
//     const newToggleImages = [...toggleImages];
//     newToggleImages[index] = !newToggleImages[index];
//     setToggleImages(newToggleImages);
//     const selectedFilter = items
//       .filter((item, index) => newToggleImages[index])
//       .map((item) => item.name);
//     // console.log("selectedFilter", selectedFilter);
//     setFilter(selectedFilter);
//   };

//   // console.log("filter", filter);
//   return (
//     <div className="side-bar">
//       <div className="cancel-div">
//         <img
//           src="cancel.png"
//           alt=""
//           className="cancel"
//           onClick={toggleSideBar}
//         />
//       </div>
//       <p className="title">
//         What's your snack mood? Filter to find the best fit!
//       </p>
//       <ul className="search-category">
//         <h2>Choose your snack type</h2>
//         {items.map((item, index) => (
//           <li key={item.id}>
//             <img
//               src={toggleImages[index] ? "accept.png" : "radio.png"}
//               onClick={() => imageToggle(index)}
//               alt=""
//             />
//             {item.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SideBar;

import { useDispatch } from "react-redux";
import "./SideBar.css";
import { useState } from "react";
import { setFilters } from "../../redux/features/filterSlice";
function SideBar({ isOpen, toggleSideBar }) {
  const items = [
    { name: "Sweet", id: 1 },
    { name: "Savoury", id: 2 },
    { name: "Healthy", id: 3 },
    { name: "Ice Cream", id: 4 },
    { name: "Vegetarian", id: 5 },
    { name: "Non-Vegetarian", id: 6 },
  ];
  const dispatch = useDispatch();
  const [toggleImages, setToggleImages] = useState(items.map(() => false));
  const imageToggle = (index) => {
    const newToggleImages = [...toggleImages];
    newToggleImages[index] = !newToggleImages[index];
    setToggleImages(newToggleImages);
    const selectedFilter = items
      .filter((item, index) => newToggleImages[index])
      .map((item) => item.name);
    // console.log("selectedfilter", selectedFilter);
    dispatch(setFilters(selectedFilter));
  };

  return (
    <div className="side-bar">
      <div className="cancel-div">
        <img
          src="cancel.png"
          alt=""
          className="cancel"
          onClick={toggleSideBar}
        />
      </div>
      <p className="title">
        What's your snack mood? Filter to find the best fit!
      </p>
      <ul className="search-category">
        <h2>Choose your snack type</h2>
        {items.map((item, index) => (
          <li key={item.id}>
            <img
              src={toggleImages[index] ? "accept.png" : "radio.png"}
              onClick={() => imageToggle(index)}
              alt=""
            />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;

{
  /* <li>
          {" "}

          <img
            src={toggleImage ? "accept.png" : "radio.png"}
            onClick={imageToggle}
          />
          Sweet
        </li>
        <li>
          {" "}

          <img
            src={toggleImage ? "accept.png" : "radio.png"}
            onClick={imageToggle}
          />
          Savoury
        </li>
        <li>
          {" "}
    
          <img
            src={toggleImage ? "accept.png" : "radio.png"}
            onClick={imageToggle}
          />
          Healthy
        </li>
        <li>
          {" "}
      
          <img
            src={toggleImage ? "accept.png" : "radio.png"}
            onClick={imageToggle}
          />
          Ice Cream
        </li>
        <li>
          {" "}

          <img
            src={toggleImage ? "accept.png" : "radio.png"}
            onClick={imageToggle}
          />
          Vegetarian
        </li>
        <li>
          {" "}
       
          <img
            src={toggleImage ? "accept.png" : "radio.png"}
            onClick={imageToggle}
          />
          Non-Vegetarian
        </li> */
}

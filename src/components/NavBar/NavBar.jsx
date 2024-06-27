import SearchBar from "../SearchBar/SearchBar";
import SideBar from "../SideBar/SideBar";
import "./NavBar.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function NavBar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  // const cart = useSelector((state) => state.cart);
  const cartItem = useSelector((state) => state.cart.cartItem);
  const cartCount = cartItem.length;
  // console.log("cartItem", cartItem);
  const location = useLocation();
  const navigate = useNavigate();
  const navigation = {
    // represents the destination URL
    href: "/orderSummary",
    // comparing the current URL path (location.pathname) with the href path.
    current: location.pathname === "/orderSummary",
  };

  const isOrderSummaryPage = useIsOrderSummaryPage();
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className="nav">
      {/* <div className={`navbar-content ${isSideBarOpen ? "shifted" : ""}`}></div> */}
      <div className="left-item">
        <img src="/public/fast-food.png" alt="" className="logo" />
        <h1 className="heading">Snack Bite</h1>
      </div>
      {!isOrderSummaryPage && (
        <div className="center">
          <SearchBar />
        </div>
      )}

      <div className="right-item">
        <div className="cart-img">
          {cartCount > 0 ? (
            <img
              src="/public/full-cart.png"
              alt=""
              className="logo cart"
              onClick={() => navigate(navigation.href)}
            />
          ) : (
            <img
              src="/public/empty-cart.png"
              alt=""
              className="logo cart"
              onClick={() => navigate(navigation.href)}
            />
          )}

          {<span className="cart-count">{cartCount}</span>}
        </div>
        {!isOrderSummaryPage && (
          <img
            src="/public/menu.png"
            alt=""
            className="logo menu"
            onClick={toggleSideBar}
          />
        )}
      </div>

      {isSideBarOpen && (
        <SideBar isOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />
      )}
    </div>
  );
}

function useIsOrderSummaryPage() {
  const location = useLocation();
  return location.pathname === "/orderSummary";
}

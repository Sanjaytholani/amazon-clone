import React, { useContext } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { StateContext } from "./Context";
function Header() {
  const [{ basket }] = useContext(StateContext);
  console.log(basket);
  return (
    <nav className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__Link">
          <div className="header__options">
            <span className="header__optionsLineOne">Hello User</span>
            <span className="header__optionsLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header__Link">
          <div className="header__options">
            <span className="header__optionsLineOne">Returns</span>
            <span className="header__optionsLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__Link">
          <div className="header__options">
            <span className="header__optionsLineOne">Your</span>
            <span className="header__optionsLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__Link">
          <div className="header__basket">
            <ShoppingBasketIcon />
            <span className="header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;

import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Welcome to our place. You will find happiness and food here." />
      <h1 className="app__header-h1">
        People who love to eat are always the best people.
      </h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        A recipe has no soul. You, as the cook, must bring soul to the recipe.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;

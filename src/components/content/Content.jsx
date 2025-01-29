import React from "react";
import "./content.scss";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import drawer from "../../assets/images/closeUpDrwer.png";
import { Link } from "react-router-dom";
import items from "../items";

function Item({ item, key, alt, id }) {
  return (
    <Paper>
      <Link to={`/product/${id}`} key={key}>
        <div className="carousel-style">
          <h2>{item.name}</h2>
          <img src={item.src} height="300px" alt={alt} />
        </div>
      </Link>
    </Paper>
  );
}

export default function Content() {
  return (
    <div className="carousel-div">
      <Carousel>
        {items.map((item, i) => (
          <Item key={item.id} item={item} alt={item.name} id={item.id} />
        ))}
      </Carousel>
      <img src={drawer} className="drawer" alt={drawer} />
    </div>
  );
}

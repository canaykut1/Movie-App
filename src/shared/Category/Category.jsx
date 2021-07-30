import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../MovieCard/MovieCard";
import "./Category.scss";

const Category = ({ header, movies }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows:false
  };
  return (
    <div className="category-component">
      <h2>{header}</h2>
      <Slider {...settings}>
        {movies.map((m,i) => (
          <MovieCard title={m.title ? m.title : m.name} posterPath={m.poster_path} key={i} />
        ))}
      </Slider>
    </div>
  );
};

export default Category;

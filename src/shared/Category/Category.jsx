import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../MovieCard/MovieCard";
import "./Category.scss";

const Category = ({ header, movies }) => {
  const movieSize = movies.length;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: movieSize >= 8 ? 8 : movieSize,
    slidesToScroll: movieSize >= 8 ? 8 : movieSize,
    arrows: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: movieSize >= 6 ? 6 : movieSize,
          slidesToScroll: movieSize >= 6 ? 6 : movieSize,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: movieSize >= 5 ? 5 : movieSize,
          slidesToScroll: movieSize >= 5 ? 5 : movieSize,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: movieSize >= 4 ? 4 : movieSize,
          slidesToScroll: movieSize >= 4 ? 4 : movieSize,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: movieSize >= 3 ? 3 : movieSize,
          slidesToScroll: movieSize >= 3 ? 3 : movieSize,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: movieSize >= 2 ? 2 : movieSize,
          slidesToScroll: movieSize >= 2 ? 2 : movieSize,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: movieSize >= 1 ? 1 : movieSize,
          slidesToScroll: movieSize >= 1 ? 1 : movieSize,
        },
      },
    ],
  };
  return (
    <div className="category-component">
      <h2>{header}</h2>
      <Slider {...settings}>
        {movies.map((m, i) => (
          <MovieCard movie={m} key={i} />
        ))}
      </Slider>
    </div>
  );
};

export default Category;

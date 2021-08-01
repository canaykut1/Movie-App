import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../MovieCard/MovieCard";
import "./Category.scss";

const Category = ({ header, movies }) => {
  const totalMovies = movies.length;
  const settings = {
    autoplay: true,
    autoplaySpeed: 8000,
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: totalMovies >= 8 ? 8 : totalMovies,
    slidesToScroll: totalMovies >= 8 ? 8 : totalMovies,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: totalMovies >= 6 ? 6 : totalMovies,
          slidesToScroll: totalMovies >= 6 ? 6 : totalMovies,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: totalMovies >= 5 ? 5 : totalMovies,
          slidesToScroll: totalMovies >= 5 ? 5 : totalMovies,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: totalMovies >= 4 ? 4 : totalMovies,
          slidesToScroll: totalMovies >= 4 ? 4 : totalMovies,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: totalMovies >= 3 ? 3 : totalMovies,
          slidesToScroll: totalMovies >= 3 ? 3 : totalMovies,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: totalMovies >= 2 ? 2 : totalMovies,
          slidesToScroll: totalMovies >= 2 ? 2 : totalMovies,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: totalMovies >= 1 ? 1 : totalMovies,
          slidesToScroll: totalMovies >= 1 ? 1 : totalMovies,
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

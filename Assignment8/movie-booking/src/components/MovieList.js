// src/components/MovieList.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { movies } from "../data/movies";

export const MovieList = () => {
  const navigate = useNavigate();

  return React.createElement(
    "div",
    { className: "grid grid-cols-4 gap-4 p-4" },
    movies.map((movie) =>
      React.createElement(
        "div",
        {
          key: movie.id,
          className:
            "cursor-pointer shadow-lg p-2 rounded-lg hover:scale-105 transition",
          onClick: () => navigate(`/movie/${movie.id}`),
          tabIndex: 0,
          role: "button",
          onKeyDown: (e) => {
            if (e.key === "Enter") navigate(`/movie/${movie.id}`);
          },
        },
        React.createElement("img", {
          src: movie.image || "https://via.placeholder.com/150?text=No+Image",
          alt: movie.title,
          className: "w-full h-40 object-cover rounded",
        }),
        React.createElement(
          "h2",
          { className: "text-center mt-2 font-semibold" },
          movie.title
        )
      )
    )
  );
};

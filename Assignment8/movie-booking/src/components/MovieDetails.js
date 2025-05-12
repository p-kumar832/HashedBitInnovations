import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { movies } from "../data/movies";

export const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));
  const navigate = useNavigate();
  return (
    React.createElement("div", { className: "p-4 text-center" },
      React.createElement("h1", { className: "text-2xl font-bold mb-4" }, movie.title),
      React.createElement("img", { src: movie.image, alt: movie.title, className: "mx-auto h-60 mb-4" }),
      React.createElement("button", {
        onClick: () => navigate("/book"),
        className: "bg-blue-600 text-white px-4 py-2 rounded"
      }, "Book Seat")
    )
  );
};

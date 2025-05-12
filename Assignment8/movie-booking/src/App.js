import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieList } from "./components/MovieList";
import { MovieDetails } from "./components/MovieDetails";
import { BookingForm } from "./components/BookingForm";
import { ConfirmationPage } from "./components/ConfirmationPage";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    React.createElement(Router, null,
      React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(MovieList) }),
        React.createElement(Route, { path: "/movie/:id", element: React.createElement(MovieDetails) }),
        React.createElement(Route, { path: "/book", element: React.createElement(BookingForm, { setUser }) }),
        React.createElement(Route, { path: "/confirmation", element: React.createElement(ConfirmationPage, { user }) })
      )
    )
  );
} 
import React from "react";

export const ConfirmationPage = ({ user }) => {
  if (!user) return React.createElement("div", { className: "p-4 text-center" }, "No booking information found.");
  return (
    React.createElement("div", { className: "p-4 text-center" },
      React.createElement("h2", { className: "text-xl font-bold mb-2" }, "Seat Booked Successfully!"),
      React.createElement("p", null, "Booking ID: ", React.createElement("strong", null, user.bookingId)),
      React.createElement("p", null, "Name: ", user.name),
      React.createElement("p", null, "Email: ", user.email),
      React.createElement("p", null, "Mobile: ", user.mobile)
    )
  );
};

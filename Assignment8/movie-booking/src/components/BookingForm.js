import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const BookingForm = ({ setUser }) => {
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...form, bookingId: uuidv4().slice(0, 8) });
    navigate("/confirmation");
  };

  return (
    React.createElement("form", { onSubmit: handleSubmit, className: "max-w-md mx-auto p-4" },
      React.createElement("input", {
        name: "name",
        placeholder: "Name",
        value: form.name,
        onChange: handleChange,
        className: "block w-full p-2 mb-4 border",
        required: true
      }),
      React.createElement("input", {
        name: "email",
        placeholder: "Email",
        value: form.email,
        onChange: handleChange,
        className: "block w-full p-2 mb-4 border",
        required: true
      }),
      React.createElement("input", {
        name: "mobile",
        placeholder: "Mobile",
        value: form.mobile,
        onChange: handleChange,
        className: "block w-full p-2 mb-4 border",
        required: true
      }),
      React.createElement("button", {
        type: "submit",
        className: "bg-green-600 text-white px-4 py-2 rounded"
      }, "Submit")
    )
  );
};

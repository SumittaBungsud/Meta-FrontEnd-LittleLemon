import React from "react";
import heroImg from "../img/restauranfood.jpg";

function Hero() {
  return (
    <section id="home">
      <div
        className="hero"
        style={{
          backgroundColor: "#495E57",
          width: "100vw",
          height: "377px",
          position: "relative",
        }}
      >
        <section className="hero-container">
          <h1
            style={{
              fontSize: "3.4rem",
              color: "#F4CE14",
            }}
          >
            Little Lemon
          </h1>
          <p
            style={{
              fontSize: "1.8rem",
              color: "#f0f0f0",
              lineHeight: 0,
            }}
          >
            Chicago
          </p>
          <p
            style={{
              width: "27rem",
              fontSize: "1.2rem",
              color: "#ffffff",
            }}
          >
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button
            className="button"
            style={{
              backgroundColor: "#F4CE14",
              fontSize: "1.2rem",
              fontWeight: "bold",
              borderWidth: "0",
              borderRadius: "8px",
              padding: "0.8rem 1.5rem",
            }}
          >
            Reserve a Table
          </button>
        </section>
        <img src={heroImg} alt="restaurant food" />
      </div>
    </section>
  );
}

export default Hero;

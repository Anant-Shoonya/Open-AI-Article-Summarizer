import React from "react";
import logo from "../assets/Logo.png";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} className="w-44" />
        <button
          type="button"
          className="black_btn"
          onClick={() => {
            window.open("https://github.com/Anant-Shoonya");
          }}
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with
        <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        "Streamline your reading with Summize, an open-source article summarizer
        that converts lengthy articles into clear and concise summaries."
      </h2>
    </header>
  );
};

export default Hero;

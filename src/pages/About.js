import React from "react";

const About = () => {
  return (
    <div className="text-stone-900">
      <h1 className="text-stone-900 text-6xl mb-4">GitHub Finder</h1>
      <p className="text-stone-900 mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a
          href="https://www.udemy.com/course/modern-react-front-to-back/"
          className=""
        >
          {" "}
          React Front To Back
        </a>{" "}
        Udemy course by
        <strong>
          <a href="https://traversymedia.com"> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-black">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a className="text-black">Linh Bui</a>
      </p>
    </div>
  );
};

export default About;

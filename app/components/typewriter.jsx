'use client';

import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{

        strings: [
          "Full-Stack Developer",
          "Ui Designer",
          "Blockchain Enthusiast",
        ],
        autoStart: true,
        delay: 175,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
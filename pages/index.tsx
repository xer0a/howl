import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

let rotationIndex = 0;
let rotationClass = "rotate-[45deg]";

const Home: NextPage = () => {
  const [rotationAmount, setRotationIndex] = useState(rotationIndex);
  const handleRotationChange = () => {
    rotationIndex++;

    switch (rotationIndex) {
      case 1:
        rotationClass = "rotate-[135deg] duration-300";
        break;
      case 2:
        rotationClass = "rotate-[225deg] duration-200";
        break;
      case 3:
        rotationClass = "rotate-[315deg] duration-200";
        break;
      case 4:
        rotationClass = "rotate-[405deg] duration-200";
        rotationIndex = 0;
        break;
    }
    setRotationIndex(rotationIndex);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Howl's Revolving Door</title>
        <meta
          name="description"
          content="Howl's Revolving Door Component Concept WIP"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div>{rotationClass}</div>
      <div>Rotation index {rotationIndex}</div> */}

      <div className="flex absolute h-full w-full justify-center items-center ">
        <div className="relative flex justify-center items-center">
          <div className={rotationClass}>
            <div
              onClick={handleRotationChange}
              className="border-black grid hover:cursor-pointer hover:w-72 hover:h-72 duration-200 grid-cols-2 text-white bg-white w-60 h-60 border-2 overflow-hidden rounded-full"
            >
              <div className="bg-[#56a353]"></div>
              <div className="bg-[#3758ab]"></div>
              <div className="bg-[#d94c4c]"></div>
              <div className="bg-black"></div>
            </div>
          </div>
          <div className="border-1 border-white absolute w-4 h-4 bg-yellow-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

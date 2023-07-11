import React from "react";
import ustyles from "./underwater.module.css"

export default function Underwater() {
  function whales() {
    return Array.from(
      { length: 4 },
      (_, x) => (
        <div className={`whalePos size${x+1}`} key={x}>
          <div className={`whaleRotate size${x+1}`} key={x + "i"}>
            <div className="whale" key={x + "j"}></div>
            <div className="fin" key={x + "k"}></div>
          </div>
        </div>
      )
    )
  }

  function triangles() {
    return Array.from(
      { length: 20 },
      (_,x) => (
        <div className="triangle" key={x}></div>
      )
    )
  }

  function gradient() {
    return Array.from(
      { length: 43 },
      (_,x) => (
        <div className={`ray${x+1}`} key={x}></div>
      )
    )
  }

  function bubbles() {
    return Array.from(
      { length: 12 },
      (_,x) => (
        <span className={`bubbleY${x+1}`} key={x + 'i'}>
          <span className={`bubbleX${x+1}`} key={x + 'j'}></span>
        </span>
      )
    )
  }

  return (
  <>
    <div className={ustyles.container}>
      <div className={ustyles.whaleContainer}>
        {whales()}
      </div>
      <div className={ustyles.cPos}>
        <div className={ustyles.cc}>
          <div className="circle one"></div>
          <div className="circle two"></div>
          <div className="circle three"></div>
          <div className="circle four"></div>
        </div>
      </div>
      <div className={ustyles.triangleContainer}>
        <div className={ustyles.triangleBar}>
          {triangles()}
        </div>
      </div>
      <div className={ustyles.gradientContainer}>
        <div className={`${ustyles.overlay} ${ustyles.one}`}></div>
        <div className={ustyles.gradient}>
          {gradient()}
        </div>
      </div>
      <div className={ustyles.rocks}>
        <div className={`${ustyles.rock} ${ustyles.one}`}></div>
        <div className={`${ustyles.rock} ${ustyles.two}`}></div>
        <div className={`${ustyles.rock} ${ustyles.three}`}></div>
        <div className={`${ustyles.rock} ${ustyles.four}`}></div>
      </div>
      <div className={ustyles.bubbleContainer}>
        {bubbles()}
      </div>
    </div>
  </>)
}
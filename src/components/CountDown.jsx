import React from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const CountDown = ()=> {

  return (
    <>
      <div className = "App-header">
        <h1> Count Down circle Timer </h1>
        <CountdownCircleTimer
          className = "countdown-circle"
          isPlaying
          duration={10}
          colors={[
            ['#004777', 0.33],
            ['#F7B801', 0.33],
            ['#A30000', 0.33],
          ]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
    </>
  );
};

export default CountDown;
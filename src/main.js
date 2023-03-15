import React, { Component } from 'react'
import './App.css'
import { ReactComponent as BottleIcon } from './assets/bottleIcon.svg'

class Main extends Component {
  render() {
    return (
      <>
        <div id="main">
          <div className="intro">
            <p className="welcome">Welcome</p>
            <p className="user">Caitlin</p>
          </div>

          <div className="hydrationCard">
            <p className="date">{new Date(Date.now()).toLocaleString().split(',')[0]}</p>
            <p className="mainText">Remember</p>
            <p className="mainText">to Hydrate!</p>
            <div className="image">
              <BottleIcon />
            </div>
            <p className="subText">Water is essential for high performance on the track</p>
          </div>

          <div className="stats">
            <div className="statsItem">
              <p>Max: <span className="val">{'100 mL'}</span></p>
              <div className="divider" />
            </div>

            <div className="statsItem">
              <p>Current: <span className="val">{'20 mL'}</span></p>
              <div className="divider" />
            </div>
          </div>

          <div className="percentage"> 
            <div className="circle">
              <p className="numberVal">{'20'}%</p>
              <p className="supportingText">FILLED</p>
            </div>
          </div>

          <div className="warning">
            {/* <p className="warningTextGood">you have enough water</p> */}
            <p className="warningTextBad">you don't have enough water</p>
          </div>
        </div>
      </>
    )
  }
}

export default Main

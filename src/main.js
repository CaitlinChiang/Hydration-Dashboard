import React, { Component } from 'react'
import './App.css'
import { ReactComponent as BottleIcon } from './assets/bottleIcon.svg'
import { ref, onValue} from "firebase/database";
import { db } from './firebaseConfig'

class Main extends Component {
  state = {
    initialLevel: 0,
    currentLevel: 0,
    percentage: 100
  }

  render() {
    const { initialLevel, currentLevel, percentage } = this.state

    const dbRef = ref(db, 'NEW')

    onValue(dbRef, (snapshot) => {
      const val = snapshot.val()

      this.setState({
        initialLevel: val.initialLevel,
        currentLevel: val.currentLevel,
        percentage: Number((val.currentLevel / val.initialLevel) * 100).toFixed(1)
      })
    })

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
              <h3 className="waterLabel">Water Levels</h3>

              <p>Max: <span className="val">{initialLevel}</span></p>
              <div className="divider" />

              <p>Current: <span className="val">{currentLevel}</span></p>
              <div className="divider" />
            </div>

            <div className="statsItem">
              <div className="circle">
                <p className="numberVal">{percentage}%</p>
                <p className="supportingText">FILLED</p>
              </div>
            </div>
          </div>

          <div className="actions">
            <div className="action-items">
              <p>+ Half Refill</p>
            </div>

            <div className="action-items">
              <p>+ Full Refill</p>
            </div>
          </div>

          <div className="warning">
            {percentage < 20 ? <p className="warningTextBad">you don't have enough water</p> : <p className="warningTextGood">you have enough water</p>}
          </div>
        </div>
      </>
    )
  }
}

export default Main

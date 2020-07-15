import React from 'react';
import './App.css';
import ProptimusOmega from './proptimusOmega'
import ProptimusBeta from './proptimusBeta'
import ProptimusPrime from './proptimusPrime'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      callForHelp: "https://i.pinimg.com/originals/f8/7d/ec/f87dec9d6334af383a27f73e48ccf154.png",
      activeProp: "",
      proptimusPhotos: {
        "Proptimus Prime": "http://pngimg.com/uploads/transformers/transformers_PNG3.png",
        "Proptimus Beta": "https://library.kissclipart.com/20181004/jbw/kissclipart-alola-exeggutor-height-clipart-optimus-prime-trans-6afe73e9efab0cac.png",
        "Proptimus Omega": "https://cdn.shopify.com/s/files/1/0076/4103/8906/products/Transformers-Movie-Studio-Series-38-Voyager-G1-Optimus-Prime-Semi-truck-Render_1024x1024.png?v=1549582726",
      },
      consoleLogs: {
        "Proptimus Prime": "It's time to kick brass!",
        "Proptimus Beta": "Better help has arrived.",
        "Proptimus Omega": "Bad help has arrived!",
        "Home": "I am Proptimus Prime, and I send this message to any surviving Poptobots taking refuge among the state: We are here. We are wating."
      },
      catchPhrases: {
        "Proptimus Prime": "I am the last drilled prop - Proptimus Prime!!!",
        "Proptimus Beta": "I am the middle drilled prop - Proptimus Beta...",
        "Proptimus Omega": "I am the first drilled prop - Proptimus Omega..."
      }
    }
  }


  callForBadHelp = (event) => {
    this.setState({ activeProp: "Proptimus Omega" })
    console.log(this.state.consoleLogs["Proptimus Omega"])
  }

  callForBetterHelp = (event) => {
    this.setState({ activeProp: "Proptimus Beta" })
    console.log(this.state.consoleLogs["Proptimus Beta"])
  }

  gimmeAllYouGot = (event) => {
    this.setState({ activeProp: "Proptimus Prime" })
    console.log(this.state.consoleLogs["Proptimus Prime"])
  }

  sendThemHome = (event) => {
    this.setState({ activeProp: "Home" })
    console.log(this.state.consoleLogs["Home"])
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            onClick={this.callForBadHelp}
            src={this.state.callForHelp}
            className="App-logo"
            alt="logo"
          />

          {this.state && this.state.activeProp === "Proptimus Omega" /*Which Proptobot should be checked for?*/ &&
            <>
              <p className="">Will this do, human?</p>
              <ProptimusOmega /*Specify your Proptobot here.*/
                photo={this.state.proptimusPhotos[this.state.activeProp]}
                catchPhrase={this.state.catchPhrases[this.state.activeProp]}
                callForBetterHelp={this.callForBetterHelp}/*You need to pass all of your props to this component here.*/
              />
            </>
          }

          {this.state && this.state.activeProp === "Proptimus Beta" /*Which Proptobot should be checked for?*/ &&
            <>
              <p className="">Are you sure this situation warrants this?</p>
              <ProptimusBeta /*Specify your Proptobot here.*/
                photo={this.state.proptimusPhotos[this.state.activeProp]}
                catchPhrase={this.state.catchPhrases[this.state.activeProp]}/*You need to pass all of your props to this component here.*/
                gimmeAllYouGot={this.gimmeAllYouGot}
              />
            </>
          }

          {this.state && this.state.activeProp === "Proptimus Prime" /*Which Proptobot should be checked for?*/ &&
            <>
              <p className="">There are no bigger guns!</p>
              <ProptimusPrime /*Specify your Proptobot here.*/
                photo={this.state.proptimusPhotos[this.state.activeProp]}
                catchPhrase={this.state.catchPhrases[this.state.activeProp]}/*You need to pass all of your props to this component here.*/
                sendThemHome={this.sendThemHome}
              />
            </>
          }

        </header>
      </div>
    );
  }
}

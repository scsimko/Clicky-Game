import React from 'react';
import Card from './Card';
import Nav from './Nav';
import Jumbotron from './Jumbotron';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.state.cards = this.props.cards;
    this.state.score = 0;
    this.state.highScore = 0;
  };

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    };

    return array;
  };

  componentDidMount = () => {
    this.setState({cards:this.shuffle(this.state.cards)});
  };

  handleRestart = () => {
    //If score is larger than highscore, set highscore equal to score
    if (this.state.score > this.state.highScore){
      this.setState({highScore:this.state.score})
    };
    //reset score and shuffle cards
    this.setState({score:0, cards:this.shuffle(this.state.cards)});

    //copy current card array
    const newCardsState = this.state.cards;

    this.state.cards.forEach((value, index) => {
      //update copied card array
      newCardsState[index].clicked = false;
      //update state to reflect copied card array
      this.setState({cards:newCardsState});
    });
  }

  handleClick = (id) => {
    if(this.state.cards[id].clicked){
      this.handleRestart();
    }else{
      const newCardsState = this.state.cards;
      const newScoreState = this.state.score + 1;
      newCardsState[id].clicked = true;
      this.setState({cards:newCardsState, score: newScoreState});
    this.setState({cards:this.shuffle(this.state.cards)});
    };
  };

  render() {
    return(
      <React.Fragment>
        <Nav score={this.state.score} highScore={this.state.highScore}></Nav>
        <Jumbotron></Jumbotron>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              {this.state.cards.map((value, index) => <Card key={index} handleClick={this.handleClick} src={value.src} alt={value.alt} id={index}></Card> )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
};

export default Main;
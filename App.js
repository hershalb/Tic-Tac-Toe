import React, { Component } from 'react';
import { AppRegistry, View, Text, Alert } from 'react-native';

import Box from './Box.js';

class AwesomeProject extends Component {
  constructor(props) {
    super(props);

    this.grid = [[null, null, null], [null, null, null], [null, null, null]]
    this.state = {
      letter: 'X',
      endGame: false,
    };

    this.moveCount = 0;
  }
  toggleLetter(x, y) {
    if (this.state.letter === 'X') {
      this.setState({ letter: 'O' });
    } else {
      this.setState({ letter: 'X'});
    }
    this.moveCount++;
    var n = 3;

    this.grid[x][y] = this.state.letter;

    //check col
    for(i=0;i<n;i++){
      if(!this.grid[x][i] || this.grid[x][i] != this.state.letter) {
        break;
      }
      if(i == n-1){
        this.alertOver(this.state.letter);
      }
    }

    //check row
    for(i = 0; i < n; i++){
      if(!this.grid[i][y] || this.grid[i][y] != this.state.letter) {
        break;
      }
      if(i == n-1){
        this.alertOver(this.state.letter);
      }
    }

    //check diag
    if(x == y){
      //we're on a diagonal
      for(i = 0; i < n; i++){
        if(!this.grid[i][i] || this.grid[i][i] != this.state.letter) {
          break;
        }
        if(i == n-1){
          this.alertOver(this.state.letter);
        }
      }
    }

    //check anti diag (thanks rampion)
    for(i = 0;i<n;i++){
      if(!this.grid[i][(n-1)-i] || this.grid[i][(n-1)-i] != this.state.letter) {
        break;
      }
      if(i == n-1){
        this.alertOver(this.state.letter);
      }
    }

    //check draw
    if(this.moveCount == (n*n - 1)){
      this.alertOver(this.state.letter);
    }
  }
  alertOver(letter) {
    this.setState({endGame: true, letter: 'X'});
    this.grid = [[null, null, null], [null, null, null], [null, null, null]]
    var message = letter + " has won the game. Click here to start a new game.";
    Alert.alert('Game Over!', message);
  }
  render() {
    var width = 100;
    return (
      <View>
          <Text style={{paddingTop: 50, textAlign: 'center',
                        fontSize: 50,
                        fontWeight: 'bold'}}>Tic Tac Toe</Text>
          <Text style={{paddingTop: 50, textAlign: 'center',
                        fontSize: 30,
                        fontWeight: 'bold'}}>It is {this.state.letter}'s turn</Text>
          <View style={{flexDirection: 'row', marginTop : 100, flex: 1, height: 100, marginLeft: 35}}>
            <Box position={[0, 0]} letter={this.state.letter} toggleLetter={this.toggleLetter.bind(this)}/>
            <Box position={[0, 1]} letter={this.state.letter} toggleLetter={this.toggleLetter.bind(this)}/>
            <Box position={[0, 2]} letter={this.state.letter} toggleLetter={this.toggleLetter.bind(this)}/>
          </View>
          <View style={{flexDirection: 'row',flex: 1, height: 100, marginTop: 5, marginLeft: 35}}>
            <Box position={[1, 0]} letter={this.state.letter} toggleLetter={this.toggleLetter.bind(this)}/>
            <Box position={[1, 1]} letter={this.state.letter} toggleLetter={this.toggleLetter.bind(this)}/>
            <Box position={[1, 2]} letter={this.state.letter} toggleLetter={this.toggleLetter.bind(this)}/>
          </View>
          <View style={{flexDirection: 'row', flex: 1, height: 100, marginTop: 5, marginLeft: 35}}>
            <Box position={[2, 0]} letter={this.state.letter} toggleLetter={this.toggleLetter.bind(this)}/>
            <Box position={[2, 1]} letter={this.state.letter} toggleLetter={this.toggleLetter.bind(this)}/>
            <Box position={[2, 2]} letter={this.state.letter} toggleLetter={this.toggleLetter.bind(this)}/>
          </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
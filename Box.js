import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';



export default class Box extends Component {
  constructor(props) {
	super(props);

	this.state = {
	  clicked: false,
	  letter: ''
	};
  }
  pressLetter() {
  	if (!this.state.clicked) {
	    this.setState({ clicked: true, letter: this.props.letter});
	    this.props.toggleLetter(this.props.position[0], this.props.position[1]);
	}
  }
  render() {
    return (
    <TouchableOpacity onPress={this.pressLetter.bind(this)}>
      <View style={{
      	backgroundColor: 'blue', 
      	width: 100, 
      	height: 100, 
      	marginRight: 5}}>
	      <Text style={{
	      	textAlign: 'center',
	      	fontWeight: 'bold',
	      	fontSize: 80,
	      }}>
	      	{this.state.letter}
	      </Text>
      </View>
      </TouchableOpacity>
    )
  }
 }
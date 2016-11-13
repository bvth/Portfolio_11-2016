import React from 'react';
import {Button} from 'react-bootstrap';
import Card from './business_card.js';

export default class Contact extends React.Component{
	constructor(props){
        super(props);
        this.state={
            isVisible: false
        }
        // this.onShowClick = this.onShowClick.bind(this);
        // this.onHideClick = this.onHideClick.bind(this);
    }
	onShowClick(){
    	this.setState({isVisible: true})
    }
    onHideClick(){
        this.setState({isVisible:false})
    }
	render(){
		let display = this.state.isVisible ? "box show":"box hidden";
		console.log(display);
		return (
		<div id="contact" className="contact text-center">
			<div className="dline"></div>
			<Button bsStyle="success" onClick={this.onShowClick.bind(this)}>Contact me!</Button>
			<div className={display}>
				<div onClick={this.onHideClick.bind(this)} className="close-button" ></div>
				<Card/>
			</div>
		</div>
		);
	}
}

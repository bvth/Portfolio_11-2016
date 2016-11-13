import React from 'react';
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
		<div className="contact text-center">
			<div className="dline"></div>
			<button onClick={this.onShowClick.bind(this)}>Contact me!</button>
			<div className={display}>
				<form  className="box-contact" action="mail.php" method="POST">
					<div onClick={this.onHideClick.bind(this)} className="close-button" ></div>
					<input className="box-input" type="name" name="name" placeholder="name"/>
					<input className="box-input" type="email" name="email" placeholder="email"/>
					<input className="box-input" type="tel" name="tel" placeholder="phone number"/>
					<textarea className="box-input" rows="5" name="message" placeholder="message"/>
					<button className="box-button" type="button" name="button" >Send</button>
				</form>
			</div>
		</div>
		);
	}
}

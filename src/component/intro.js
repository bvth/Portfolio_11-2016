import React from 'react';

export default class Intro extends React.Component{
    render(){
        return(
            <section id="intro" className="intro container">
                <div className="row">
    				<div className="col-md-8">
    					<h1 className="intro-heading">Thanh Bui</h1>
    					<p className="intro-text">Vietnamese</p>
    					<p className="intro-text">IT student at Vaasa UAS, Finland</p>
    					<p className="intro-text">Front-end Developer</p>
    					<p className="intro-text">Wish to be Front-end expert</p>
    					<p className="intro-text"><a href="https://linkedin.com/in/thanh-bui-29a5a199"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></p>
    					<p className="warning">Note: This is just a prototype, not mobile-friendly! Not - yet!</p>
    				</div>
    				<div className="col-md-4">
    					<img className="intro-ava" src="images/ava2.jpg"/>
    				</div>
    			</div>
            </section>
        )
    }
}

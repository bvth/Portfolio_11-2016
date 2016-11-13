import React from 'react';

export default class Projects extends React.Component{
    render(){
        return(
            <section className="projects container" id="projects">
    			<div className="projects-text">
    				<span>I have done few things...</span>
    			</div>

    			<a href="http://www.cc.puv.fi/~e1300501/BothniaSlowriders/">
    				<div className="project-exp col-md-3 text-center">
    					<span>Bothnia Slowriders</span>
    				</div>
    			</a>
    			<a href="http://www.cc.puv.fi/~e1300501/TJkorjausrakennus/">
    				<div className="project-exp col-md-3 text-center">
    					<span>TJ korjausrakennus</span>
    				</div>
    			</a>
    			<a href="http://www.cc.puv.fi/~e1300501/AnderssenKurki/">
    				<div className="project-exp col-md-3 text-center">
    					<span>Anderssen & Kurkki</span>
    				</div>
    			</a>
    		</section>
        )
    }
}

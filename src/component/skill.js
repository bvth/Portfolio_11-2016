import React from 'react';

export default class Skills extends React.Component{
    render(){
        return(
            <section className="skills container" id="skills">
    			<div className="hexa text-center less"><h1>Less</h1></div>
    			<div className="hexa text-center css"><h1>CSS</h1></div>
    			<div className="hexa text-center html"><h1>HTML5</h1></div>
    			<div className="hexa text-center pts"><h1>Photoshop</h1></div>
    			<div className="hexa text-center bts"><h1>Bootstrap</h1></div>
    			<div className="hexa text-center js"><h1>Javascript</h1></div>
    			<div className="hexa text-center php"><h1>PHP</h1></div>
    			<div className="hexa text-center mysql"><h1>MySQL</h1></div>
    			<div className="hexa text-center reactjs"><h1>ReactJS</h1></div>
    			<div className="skills-text">
    				<span>...really about web-thing</span>
    			</div>
    		</section>
        )
    }
}

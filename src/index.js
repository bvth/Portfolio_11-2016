import React from 'react';
import {render} from 'react-dom';
import "font-awesome/less/font-awesome.less";
import Intro from './component/intro.js';
import Skills from './component/skill.js';
import Projects from './component/project.js'
import Contact from './component/contact.js';
import Navi from './component/nav.js';

require('../style/default.less');


var mountNode = document.getElementById('app');

class BigDiv extends React.Component{
    render(){
        return(
            <div>
                <Navi/>
                <Intro/>
                <Skills/>
                <Projects/>
                <Contact/>
            </div>
        )
    }
}
render(<BigDiv/>, mountNode);

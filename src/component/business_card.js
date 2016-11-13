import React from 'react';

export default class Card extends React.Component{
    render(){
        return(
            <div className="bcard">
                <h2>Email</h2><span>thanh.bui1995@gmail.com</span>
                <h2>Linkedin</h2><span><a href="https://fi.linkedin.com/in/thanh-bui-29a5a199">https://fi.linkedin.com/in/thanh-bui-29a5a199</a></span>
                <h2>Github</h2><span><a href="https://github.com/bvth">github.com/bvth</a></span>
            </div>
        )
    }
}

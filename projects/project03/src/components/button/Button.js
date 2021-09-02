import React from 'react';
import './Button.css';
class ButtonComp extends React.Component{
   
    render(){    
        //const func = this.showVideo(this.props.id); 
        return (
            <div>
                <button className={this.props.name} style={this.props.style} onClick={this.props.onClick}>{this.props.button}</button>
            </div>
       );

    }
}

export default ButtonComp;
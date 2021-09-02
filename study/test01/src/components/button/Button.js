import React from 'react';
import './Button.css';
import { Button } from "reactstrap";
class ButtonComp extends React.Component{
   
    render(){    
        //const func = this.showVideo(this.props.id); 
        return (
            <div>
                <Button className={this.props.name} style={this.props.style} onClick={this.props.onClick} color="warning" >{this.props.button}</Button>{' '}
            </div>
       );

    }
}

export default ButtonComp;
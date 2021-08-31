import React from 'react';
import Video from '../video/Video';
import './Button.css'
class ButtonComp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            embed : this.props.embed,
            id : this.props.id,
            button : this.props.button
        };
    }
    change(event){
        event.preventDefault();
        alert("valor");
        return (<Video link={this.state.embed} id={this.state.id}/>);        
    }
    render(){     
        return (
            <button className="button" onClick={this.change} >{this.state.button}</button>
        );
    }
}

export default ButtonComp;
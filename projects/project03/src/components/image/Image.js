import React from 'react';
import './Image.css'

class Image extends React.Component{
    render(){
        return (
            <img className="image" src={this.props.image} alt=""></img>
        );
    }
}

export default Image;
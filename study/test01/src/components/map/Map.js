import React from 'react';
import './Map.css'

class Maps extends React.Component{
    constructor(){
        super();
        this.state = {
            title : "map from egypt",
            link : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.76973637316!2d31.188423500795015!3d30.059469890329336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sbr!4v1630274896135!5m2!1sen!2sbr",
            with : "99.7%",
            sytle : "boder : none; margin:0; padding:0;",
            allowfullscreen : true,
            loading : "lazy"
        }
    }
    render(){
        return (
            <iframe className="map" src={this.state.link} title={this.state.title} width={this.state.with} style={this.state.style} allowFullScreen={this.state.allowfullscreen} loading={this.state.loading}></iframe>
        );
    }
}

export default Maps;
import React from 'react';
import './Video.css'
class Video extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            link : this.props.embed,
            title : "",
            allow : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            fullscreen : true,
        }
      
    }
    
    render(){
        return (
            <div className="modalvideo" style={{display : this.props.view}}>
                <iframe src={this.state.link} title={this.state.title} allow={this.state.allow} allowFullScreen={this.state.fullscreen}></iframe>
            </div>
        );
    }
}

export default Video;
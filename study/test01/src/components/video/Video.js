import React from 'react';
import './Video.css'
class Video extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title : "",
            allow : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            fullscreen : true,
        }
      
    }
    
    render(){
        return (
            <div id="modalvideo" style={{display : this.props.view}}>
                <iframe src={this.props.embed} title={this.state.title} allow={this.state.allow} allowFullScreen={this.state.fullscreen} className="video"></iframe>
            </div>
        );
    }
}

export default Video;
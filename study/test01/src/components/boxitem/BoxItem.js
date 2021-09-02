import React from 'react';
import Title from '../title/Title';
import SubTitle from '../subtitle/Subtitle';
import Image from '../image/Image';
import Description from '../description/Description';
//import ButtonComp from '../button/Button';
import './../button/Button.css';
import Video from '../video/Video';
import {Card} from 'react-bootstrap';
import './BoxItem.css'
class BoxItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title : this.props.title,
            subtitle : this.props.subtitle,
            image : this.props.image,
            description : this.props.description,
            button : this.props.button,
            embed : this.props.embed ,
            id : this.props.key,
            videoview : "none",
            buttonview : "none"
            
        };
        this.showVideo = this.showVideo.bind(this);
        this.closeVideo = this.closeVideo.bind(this);
        
    }
    showVideo(){
        
       this.setState({ videoview: "flex" });
       this.setState({ buttonview: "block" });
     
    }
    closeVideo(){
        this.setState({ videoview: "none" });
        this.setState({ buttonview: "none" });
        
    }
    render(){
        
        return (
            
            <Card className="card" id={this.state.id}>
              
                <Image image = {this.state.image}/>
                <Card.Body>
                    <Card.Title><Title title = {this.state.title}/></Card.Title>
                    <Card.Title><SubTitle subtitle = {this.state.subtitle}/></Card.Title>
                    <Description description = {this.state.description}/>
                    <button className="button" onClick={this.showVideo}>{this.props.button}</button>
                </Card.Body>
                <button className="close" onClick={this.closeVideo} style={{display : this.state.buttonview}}>X</button>
                <Video view = {this.state.videoview} embed = {this.state.embed} id={this.state.id} ></Video>
            </Card>
         
        );
    }
}

export default BoxItem;
import React from 'react';
import Title from '../title/Title';
import SubTitle from '../subtitle/Subtitle';
import Image from '../image/Image';
import Description from '../description/Description';
import Button from '../button/Button';
import './../button/Button.css';
import Video from '../video/Video';
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
            buttonview : "none",  
            videoembed : "",          
        };
        this.showVideo = this.showVideo.bind(this);
        this.closeVideo = this.closeVideo.bind(this);
        
    }
    showVideo(){
       this.setState({ videoview: "flex" });
       this.setState({ buttonview: "block" });
        this.setState({ videoembed: this.state.embed });
    }
    closeVideo(){
        this.setState({ videoview: "none" });
        this.setState({ buttonview: "none" });
        this.setState({ videoembed: "" });
    }
    render(){
        
        return (
            
            <section className="card">
             
                <Image image = {this.state.image}/>
                <div>
                    <article><Title title = {this.state.title}/></article>
                    <article><SubTitle subtitle = {this.state.subtitle}/></article>
                    <Description description = {this.state.description}/>
                    <Button name="button" onClick={this.showVideo} button={this.state.button}/>
                </div>
                <Button name="close" onClick={this.closeVideo} style={{display : this.state.buttonview}} button="X"/>
                <Video view = {this.state.videoview} embed = {this.state.videoembed} id={this.state.id} ></Video>
            </section>
         
        );
    }
}

export default BoxItem;
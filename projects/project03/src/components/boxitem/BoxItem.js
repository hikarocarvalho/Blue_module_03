import React from 'react';
import SubTitle from '../subtitle/Subtitle';
import Image from '../image/Image';
import Description from '../description/Description';
import Button from '../button/Button';
import './../button/Button.css';
import './BoxItem.css'
import Video from '../video/Video';
import {Card ,CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import {Container, Row,Col} from 'reactstrap';


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
            <Container className="count-einer">
            <Row >
                <Col md="12" lg="12" >
                
                <Card className="carditem" id="card">
                    <Image image = {this.state.image}/>
                    <CardBody className="bodyitem">
                        <CardTitle><SubTitle subtitle = {this.state.title}/></CardTitle>
                        <CardSubtitle tag="h6" className="description"><SubTitle subtitle = {this.state.subtitle}/></CardSubtitle>
                        <CardText ><Description description = {this.state.description}/></CardText>
                        
                    </CardBody>
                    <Button name="button" onClick={this.showVideo} button={this.state.button}/>
                        <Button name="close" onClick={this.closeVideo} style={{display : this.state.buttonview}} button="X"/>
                        <Video view = {this.state.videoview} embed = {this.state.videoembed} id={this.state.id} ></Video>
                    
                </Card>
                
                </Col>
            </Row>
         </Container>
        );
    }
}

export default BoxItem;
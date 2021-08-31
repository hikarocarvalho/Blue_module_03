import React from 'react';
import Title from '../title/Title';
import SubTitle from '../subtitle/Subtitle';
import Image from '../image/Image';
import Description from '../description/Description';
import ButtonComp from '../button/Button';
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
            key : this.props.key,
            embed : this.props.embed ,
            id : "image"+this.props.key
        }
    }
    
  
    render(){
        return (
            <Card className="card" id={this.state.key}>
              
                <Image  id={this.state.id} image = {this.state.image}/>
                <Card.Body>
                    <Card.Title><Title title = {this.state.title}/></Card.Title>
                    <Card.Title><SubTitle subtitle = {this.state.subtitle}/></Card.Title>
                    <Description description = {this.state.description}/>
                    <ButtonComp button = {this.state.button} id = {this.state.id} embed = {this.state.embed}/>
                    
                </Card.Body>
            </Card>
         
        );
    }
}

export default BoxItem;
import logo from './components/logo.png';
import Image from './components/image/Image';
import image from './components/images.jpeg';
import background from './components/background.png'
import './App.css';
import React from 'react';
import BoxItem from './components/boxitem/BoxItem';
import 'react-bootstrap';
import Title from './components/title/Title';
import {Col} from 'reactstrap';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      documentarys :[
      {
        id : 1,
        title : "Giza, A Cidade Perdida das Grandes Pirâmides do Egito",
        subtitle : "(Egiptologia com Zahi Hawass Episódio 01)",
        image : image,
        embed : "https://www.youtube.com/embed/micW2VAS2DY?version=3&enablejsapi=1",
        description : "Caminhe pelas ruas das cidades do antigo egito",
        button: "Veja o video!"
      },{
        id : 2,
        title : "As Tumbas Perdidas de Tebas",
        subtitle : "(Egiptologia com Zahi Hawass Episódio 02)",
        image : image,
        embed : "https://www.youtube.com/embed/lCPFZ6WzFJE?version=3&enablejsapi=1",
        description : "Vizualize os problemas que causaram o desaparecimento de várias tumbas!",
        button: "Veja o video!"
      },{
        id : 3,
        title : "Segredos no Vale dos Reis",
        subtitle : "(Egiptologia com Zahi Hawass Episódio 03)",
        image : image,
        embed : "https://www.youtube.com/embed/VQm1cwEABuE?version=3&enablejsapi=1",
        description : "Conheça agora o segredo contido no vale dos reis!",
        button: "Veja o video!"
      },{
        id : 4,
        title : "Os Tesouros Perdidos do Museu do Cairo",
        subtitle : "(Egiptologia com Zahi Hawass Episódio 04)",
        image : image,
        embed : "https://www.youtube.com/embed/RsFCzP-96Qw?version=3&enablejsapi=1",
        description : "Veja as Maravilias históricas que foram perdidas!",
        button: "Veja o video!"
      },{
        id : 5,
        title : "Saqqara: O Culto da Morte",
        subtitle : "(Egiptologia com Zahi Hawass Episódio 05)",
        image : image,
        embed : "https://www.youtube.com/embed/r_KpYgsUpK4?version=3&enablejsapi=1",
        description : "Conheça mais sobre as praticas funebres do antigo Egito!",
        button: "Veja o video!"
      },{
        id : 6,
        title : "O Garoto Rei Tutancâmon",
        subtitle : "(Egiptologia com Zahi Hawass Episódio 10)",
        image : image,
        embed : "https://www.youtube.com/embed/AZZwGX-EBE4?version=3&enablejsapi=1",
        description : "Navegue pelos segredos contidos na tumba do Faraó mais jovem que existiu!",
        button: "Veja o video!"
      }
    ]
  };
  }
  render(){
    const {documentarys} = this.state;
    return (

      <div className="body" style={{ backgroundImage: `url(${background})` }}>
    
        <header className="title">
            <div className="logo">
              <Image image={logo}/>
            </div>
            <Title title="Documentarios Da História do Egito!"/>
        </header>
        <section className="items">
          {documentarys.map((docs) => (
            
              <Col sm="12" md="6" lg="4" height="90%" className="justify-content-md-center">
                <BoxItem className='item' title = {docs.title} subtitle = {docs.subtitle} image = {docs.image} description = {docs.description} button={docs.button} key = {docs.id} embed = {docs.embed}></BoxItem>
              </Col>
            
          ))}
        </section>
      </div>
    );
  }
}

export default App;

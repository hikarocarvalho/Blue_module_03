import logo from './components/logo.png';
import Image from './components/image/Image';
import image from './components/images.jpeg';
import background from './components/background.png'
import './App.css';
import BoxItem from './components/boxitem/BoxItem';
import 'react-bootstrap';
import Title from './components/title/Title';

function App() {
  var listitems =[
    {
      title : "Giza, A Cidade Perdida das Grandes Pirâmides do Egito",
      subtitle : "(Egiptologia com Zahi Hawass Episódio 01)",
      image : image,
      embed : "https://www.youtube.com/embed/micW2VAS2DY",
      description : "Caminhe pelas ruas das cidades do antigo egito",
      button: "Veja o video!"
    },{
      title : "As Tumbas Perdidas de Tebas",
      subtitle : "(Egiptologia com Zahi Hawass Episódio 02)",
      image : image,
      embed : "https://www.youtube.com/embed/lCPFZ6WzFJE",
      description : "Vizualize os problemas que causaram o desaparecimento de várias tumbas!",
      button: "Veja o video!"
    },{
      title : "Segredos no Vale dos Reis",
      subtitle : "(Egiptologia com Zahi Hawass Episódio 03)",
      image : image,
      embed : "https://www.youtube.com/embed/VQm1cwEABuE",
      description : "Conheça agora o segredo contido no vale dos reis!",
      button: "Veja o video!"
    },{
      title : "Os Tesouros Perdidos do Museu do Cairo",
      subtitle : "(Egiptologia com Zahi Hawass Episódio 04)",
      image : image,
      embed : "https://www.youtube.com/embed/RsFCzP-96Qw",
      description : "Veja as Maravilias históricas que foram perdidas!",
      button: "Veja o video!"
    },{
      title : "Saqqara: O Culto da Morte",
      subtitle : "(Egiptologia com Zahi Hawass Episódio 05)",
      image : image,
      embed : "https://www.youtube.com/embed/r_KpYgsUpK4",
      description : "Conheça mais sobre as praticas funebres do antigo Egito!",
      button: "Veja o video!"
    },{
      title : "O Garoto Rei Tutancâmon",
      subtitle : "(Egiptologia com Zahi Hawass Episódio 10)",
      image : image,
      embed : "https://www.youtube.com/embed/AZZwGX-EBE4",
      description : "Navegue pelos segredos contidos na tumba do Faraó mais jovem que existiu!",
      button: "Veja o video!"
    }
  ];
  let rows = []
  for (let i = 0; i < listitems.length; i++) {
    rows.push(<BoxItem className='item' title = {listitems[i]['title']} subtitle = {listitems[i]['subtitle']} image = {listitems[i]['image']} description = {listitems[i]['description']} button={listitems[i]['button']} key = {i}></BoxItem>);
  }
  
  return (
    <div className="body" style={{ backgroundImage: `url(${background})` }}>
   
      <header className="title">
          <div className="logo">
            <Image image={logo}/>
          </div>
          <Title title="Documentarios Da História do Egito!"/>
      </header>
      <section className="items">
          {rows}
      </section>
    </div>
  );
}

export default App;

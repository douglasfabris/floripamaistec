import './card.css'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'


function Card(props) {
    return (
        <div className='card'>
            <div className ='foto'>
                <img src={props.foto} alt="Foto" width="150px"></img>
            </div>
            <div className='info'>
                <h2>{props.nome}</h2>
                <p>Idade: {props.idade} anos</p>
                <img src={github} width='15px'></img>
                <a href={props.github}>GitHub</a><br></br>
                <img src={linkedin} width='15px'></img>
                <a href={props.linkedin}>Linkedin</a>
            </div>
        </div>
      );
}

export default Card;
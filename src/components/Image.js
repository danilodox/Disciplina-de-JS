import { Component } from 'react';
import imagem from '../images/imagem2.jpg'

export default class HelloPersonal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showImage: false
        }
    }

    toogleImage() {
        this.setState({
            showImage: !this.state.showImage
        });
    }

    image() {
        return (this.state.showImage && <abbr className='centro' title="Pica Pau"><img alt='Imagem do pica pau' src={ imagem }/></abbr>);
    }
    
    render() {
        return (
            <div className='centro'>
                <button className='botao' onClick={() => this.toogleImage()}>
                    Clique para {this.state.showImage ? "esconder" : "mostrar"} o Pica Pau!
                </button>
                {this.image()}
            </div>
        );
    }
}
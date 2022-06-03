import React from 'react';
import './Inicio.css';




require("./App.css");
require("./Menu.css");
require("./Vitrine.css");
require("./Produtos.css");


const Inicio = () =>{

    const [quantidade_jogos, adicionaJogo] = React.useState(0);

    return(
    <div>
        <div className='body'>
            <div className='posts' >Posts
                <br></br>
                <div >
                    <div>
                        <a className='botao'> em destaque</a> 
                        <a className='botao'>recentes</a>
                    </div>
                </div>
            </div>
            <div>
                <p>memes</p>
                <div>
                    <button>up</button>
                    <p>numeros de likes positivos</p>
                    <button>up</button>
                </div>
                <div>
                    <div>
                        <p>perfil</p>
                    </div>
                    <div>
                       <p>texto de descrição/ tags</p> 
                    </div>
                    <div>
                        <p>imagem/video/gif do meme</p>
                    </div>
                    <div>
                        <a>comentário</a>
                        <a>Repostar</a>
                        <a>Salvar</a>
                    </div>
                </div> 
            </div>
        </div>
    </div> 
    );
}
export default Inicio;
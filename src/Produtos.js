const Produtos = (props) => {

    const adicionaJogo = props.adicionaJogo
    const quantidade_jogos = props.quantidade_jogos

    require("./Produtos.css");

    const Produtos = [
        {
            nome: "Marvel's Spider-Man: Miles Morales",
            preco: "250,00",
            imagem: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/PRfYtTZQsuj3ALrBXGL8MjAH.jpg"
        },
        {
            nome: "The Last of Us Part II",
            preco: "199,50",
            imagem: "https://image.api.playstation.com/vulcan/img/rnd/202010/2618/Y02ljdBodKFBiziorYgqftLE.png"
        },
        {
            nome: "God of War",
            preco:  "100,00",
            imagem: "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7"
        },
        {
            nome: "Marvel's Spider-Man: Game of the Year Edition",
            preco: "200,00",
            imagem: "https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png"
        },
        {
            nome: "Bloodborne™",
            preco: "100,00",
            imagem: "https://image.api.playstation.com/vulcan/img/rnd/202010/2614/Sy5e8DmeKIJVjlAGraPAJYkT.png"
        },                              
        {
            nome: "It Takes Two PS4™",
            preco: "198,00",
            imagem: "https://image.api.playstation.com/vulcan/ap/rnd/202012/0815/0Xqi1LgRoEtJ5zlFprpd54Vu.png"
        }
    ];

    return(
        <div>
            <h1>Todos os lançamentos você encontra aqui</h1>
            <p>Veja os jogos</p>

         <div className="box">
            { Produtos.map( produto => {
                return(
            
            <div className="produto">
                <img src={produto.imagem}/>
                <h2>{ produto.nome }</h2>
                <p> R$ { produto.preco }</p>
                <button onClick={() => adicionaJogo(quantidade_jogos + 1)}>Adicionar ao Carrinho</button>
              
            </div>

                )
            }) 
            }
         </div> 
            
        </div>
    );
}
export default Produtos;
import { useState } from "react";
import pintorIMG from "./pintor.svg";
import { Link } from "react-router-dom";

const Cadastro = () => {

  require("./Cadastro.css");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  
  
    return (
     <div>
         <div className="container">
      <div className="container-login">
        <div className="wrap-login">
        <span className="imagem">
          <p>ENTRE AGORA MESMO PARA MAIOR COMUNIDADE DE CRIADORES DE MEMES</p>
             <img src={pintorIMG} />
          </span> 
          <form className="login-form">
        
            <span className="login-form-title"> Cadastre-se </span>

           <br></br>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={user !== "" ? "has-val input" : "input"}
                type="email"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Nome de Usuario"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Confirme sua senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Cadastro</button>
            </div>

            <div className="text-center">
              <span className="txt1">Já possui uma conta? </span>
              <Link to="/Login" className="txt2" href="#">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
     </div>
    );
  }
  
  export default Cadastro;
import React from "react";
import logoIMG from "C:/Users/murilo.asnascimento2/OneDrive/Área de Trabalho/sla/memes-gallery/src/components/Header/Logo.png";

import "./Header.css"    

    class Header extends React.Component{

        render(){

            return (
                <div>
                <header class="header">
                
                <img className="logo" src={logoIMG} />
               
                <input class="side-menu" type="checkbox" id="side-menu"/>
                <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
               
                <nav class="nav">
                    <ul class="menu">
                        <li>
                            <div id="divBusca">
                                <i class="fa-solid fa-magnifying-glass" id="btnBusca"></i>
                                <input type="text" id="txtBusca" placeholder="Buscar..."/>
                                
                            </div>
                        </li>
                        <li><a href="#">Top Memes</a></li>
                        <li><a href="#">Login</a> </li>
                        <li><b className="s">/</b> </li>
                        <li><a href="#">Cadastro</a></li>
                    </ul>
                </nav>
            </header>
           
            <main>
                <article>
                   
                </article>
            </main>

            </div>

           );

        }   

    }

    export default Header;
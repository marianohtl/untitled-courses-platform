import React from "react";
import style from "./footer.module.scss";

function SiteMapGroup(){
    return(
        <div className={style["sitemap-group"]}>
            <h3>Lorem Ipsum</h3>
            <nav>
                <ul>
                    <li> <a href="#">Ipsum</a> </li>
                    <li> <a href="#">Ipsum</a> </li>
                    <li> <a href="#">Ipsum</a> </li>
                </ul>
            </nav>
        </div>
    );
}

function SocialMedia(){
    return (
        <nav id={style["social-media"]}>
            <ul>
                <li>
                    <a href="#"> <span className="material-symbols-outlined">thumb_up</span> </a>
                </li>
                <li>
                    <a href="#"> <span className="material-symbols-outlined">group</span> </a>
                </li>
                <li>
                    <a href="#"> <span className="material-symbols-outlined">php</span> </a>
                </li>
            </ul>
        </nav>
    );
}

function Information(){
    return(
        <div id={style["info"]}>
            <div>
                <img src="/images/mafia_duck.png" alt="logo" height={86} width={86} draggable={false}/>
            </div>
        </div>
    );
}

export default function Footer(){
    return (
        <footer id={style["root"]}>
            <div id={style["top"]}>
                <Information />
                <div id={style["sitemap"]}>
                    <SiteMapGroup/>
                    <SiteMapGroup/>
                    <SiteMapGroup/>
                </div>
            </div>
            <hr />
            <div id={style["bottom"]}>
                <p>Copyright © Pato Mafioso. Todos os direitos reservados pra quem consegui ler isso aqui</p>
                <SocialMedia />
            </div>
        </footer>
    );
}
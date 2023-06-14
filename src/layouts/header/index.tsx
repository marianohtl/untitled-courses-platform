import React from "react";
import style from "./header.module.scss";
import ContentSearch from "@/components/content-search";

interface IHeaderButtonProps {
    label: string,
    path: string
}
function Button({label, path}: IHeaderButtonProps){
    return (
        <li className={style["button"]}>
            <a href={path}>{label}</a>
        </li>
    );
}

function Buttons(){
    return (
        <nav>
            <ul>
                <Button path="#" label="Sign-in"/>
                <Button path="#" label="Sign-up"/>
            </ul>
        </nav>
    );
}

interface IHeaderLogoProps {
    size: number
}
function Logo({size}: IHeaderLogoProps){
    return(
        <div>
            <a href="/">
                <img 
                    src="/images/mafia_duck.png" 
                    width={size}
                    height={size}
                    draggable={false}
                />
            </a>
        </div>
    );
}

export default function Header() {
    return (
        <header id={style["root"]}>
            <div>
                <Logo size={48}/>
                <ContentSearch placeholder="Search something..." /> 
            </div>
            <Buttons />
        </header>
    );
}
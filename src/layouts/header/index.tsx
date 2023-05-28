import React from "react";
import style from "./header.module.scss";
import ContentSearch from "@/components/content-search";

export default function Header() {
    return (
        <header id={style["root"]}>
            <div>
                <div>
                    <a href="/">
                        <img 
                            src="/images/mafia_duck.png" 
                            width={48}
                            height={48}
                            draggable={false}
                        />
                    </a>
                </div>
                <ContentSearch placeholder="Search something..." /> 
            </div>
            <nav>
                <ul>
                    <li className={style["button"]}>
                        <a href="#">Sign-in</a>
                    </li>
                    <li className={style["button"]}>
                        <a href="#">Sign-up</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
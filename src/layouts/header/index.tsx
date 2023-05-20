import React from "react";
import style from "./header.module.scss";

export default function Header() {
    return (
        <div id={style["root"]}>
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
            <div>
                <div>
                    Search something ...
                </div>
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
        </div>
    );
}
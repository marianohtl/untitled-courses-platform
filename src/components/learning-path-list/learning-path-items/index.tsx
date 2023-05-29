import React from "react";
import LearningPathContent from "./learning-path-content";
import style from "./learning-path-items.module.scss";

type LerningPathItemsProps = {title?:string, contentsPath:string[], image?:string}

export default function LearningPathItems({title, contentsPath, image} : LerningPathItemsProps) {
    return (
        <div className={style.trail}>
            <div className={style["learning-path2"]}>
                <img src={image} draggable={false}/><h1>{title}</h1>
            </div>
            <ul className={style["learning-path-list"]} >
                {
                    contentsPath.map((prop) => (<LearningPathContent list={prop} key={prop}/>))
                }
            </ul>
        </div>
    );
}
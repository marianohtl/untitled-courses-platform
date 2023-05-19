import React from "react";
import LearningPathItem from "./learning-path-item";
import style from "./style.module.scss";

type LerningPathListProps = {title?:string, list:string[], image?:string}

export default function LearningPathList({title, list, image} : LerningPathListProps) {
    return (
        <>
        <div className={style["learning-path"]}>
            <img src={image} draggable={false}/><h1>{title}</h1>
        </div>
        <ul className={style["learning-path-ul"]} >
            {
                list.map((prop) => (<LearningPathItem list={prop} key={prop}/>))
            }
        </ul>
        </>
    );
}
import React from "react";
import style from "./learning-path-list.module.scss";
import LearningPathItems from "./learning-path-items";

type LearningPath =  {id:string,title:string, contentsPath:string[], image:string}
type LerningPathListProps = {list:LearningPath[]}

export default function LearningPathList({list} : LerningPathListProps)
{
    return(
        <div className={style["trails"]}>
            {
                list.map( items => (
                    <LearningPathItems key={items.id} title={items.title} contentsPath={items.contentsPath} image={items.image}/>
                ))
            }
        </div>
    );
}

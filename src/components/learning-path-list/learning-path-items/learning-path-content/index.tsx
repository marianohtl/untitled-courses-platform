import React from "react";

type LearningPathContentProps = {
    list?:string,
    name?:string
}
export default function LearningPathContent({list} : LearningPathContentProps) {
    return (<ul>{list}</ul>);
}
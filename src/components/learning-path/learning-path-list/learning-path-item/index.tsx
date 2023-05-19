import React from "react";

type LearningPathItemProps = {
    list?:string,
    name?:string
}
export default function LearningPathItem({list} : LearningPathItemProps) {
    return (<ul>{list}</ul>);
}
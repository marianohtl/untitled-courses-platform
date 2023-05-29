import React, { ReactNode } from "react";
import style from "./carousel-item.module.scss";

export interface ICarouselItemProps {
    children?: ReactNode,
    background: string
}

export default function CarouselItem({children, background}: ICarouselItemProps){
    return (
        <div 
            className={style["root"]}
            style={{
                backgroundImage: `url(${background})`
            }}
        >
            {children}
        </div>
    );
}
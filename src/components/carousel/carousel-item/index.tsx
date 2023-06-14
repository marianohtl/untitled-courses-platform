import React, { ReactNode } from "react";
import style from "./carousel-item.module.scss";

export interface ICarouselItemProps {
    children?: ReactNode,
    background?: string
}

export default function CarouselItem({children, background}: ICarouselItemProps){
    if(background){
        return (
            <div 
                className={style.root}
                style={{
                    backgroundImage: `url(${background})`
                }}
            >
                <div className={style.content}>
                    {children}
                </div>
            </div>
        );
    }else{
        return (
            <div className={style.root}>
                <div className={style.content}>
                    {children}
                </div>
            </div>
        );
    }
    
}
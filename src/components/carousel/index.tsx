import React, { ReactElement, useState } from "react";
import { ICarouselItemProps } from "./carousel-item";
import style from "./carousel.module.scss";

interface ICarouselProps {
    children: ReactElement<ICarouselItemProps> | ReactElement<ICarouselItemProps>[],
    timeout: number
}

export function Carousel({children}: ICarouselProps)
{
    return (
        <div className={style.root}>
            <div className={style.buttons}>
                <button className={`${style.button} ${style.previous}`}>
                    <span className="material-symbols-outlined">
                        navigate_before
                    </span>
                </button>
                <button className={`${style.button} ${style.next}`}>
                    <span className="material-symbols-outlined">
                        navigate_next
                    </span>
                </button>
            </div>
            <div className={style.content}>
                {children}
            </div>
        </div>
    );
}

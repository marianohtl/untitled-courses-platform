import React, { FormEvent } from "react";

import style from "./carousel-controls.module.scss";

interface ICarouselControlsProps{
    onBack: (event: FormEvent<HTMLButtonElement>) => void,
    onNext: (event: FormEvent<HTMLButtonElement>) => void,
}

export default function CarouselControls({ onBack, onNext }: ICarouselControlsProps){
    return (
        <div className={style.buttons}>
            <button className={`${style.button} ${style.previous}`} type="button" value="previous" onClick={onBack}>
                <span className="material-symbols-outlined">
                    navigate_before
                </span>
            </button>
            <button className={`${style.button} ${style.next}`} type="button" value="next" onClick={onNext}>
                <span className="material-symbols-outlined">
                    navigate_next
                </span>
            </button>
        </div>
    );
}
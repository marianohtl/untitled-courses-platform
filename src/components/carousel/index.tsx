import React, { FormEvent, ReactElement } from "react";
import { ICarouselItemProps } from "./carousel-item";
import CarouselControls from "./carousel-controls";
import style from "./carousel.module.scss";

interface ICarouselProps {
    children: ReactElement<ICarouselItemProps> | ReactElement<ICarouselItemProps>[],
    interval: number
}

export function Carousel({ children }: ICarouselProps) {

    const onPress = function (event: FormEvent<HTMLButtonElement>) {
        event.preventDefault();

        if (event.currentTarget.value == "next") {
            console.log(event.currentTarget.value);
        } else {
            console.log("previous");
        }
    };

    return (
        <div className={style.root}>
            {
                Array.isArray(children) ?
                    (
                        <>
                            <CarouselControls onBack={onPress} onNext={onPress} />
                            <div className={style.content}>
                                {children}
                            </div>
                        </>
                    ) :
                    (
                        <div className={style.content}>
                            {children}
                        </div>
                    )
            }
        </div>
    );
}

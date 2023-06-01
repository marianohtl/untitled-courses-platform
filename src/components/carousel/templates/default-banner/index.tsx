import React from "react";

import style from "./default-banner.module.scss";
import CarouselItem, { ICarouselItemProps } from "../../carousel-item";

interface ICarouselDefaultBannerButton {
    url: string,
    name: string
}

interface ICarouselDefaultBanner extends ICarouselItemProps {
    image: string,
    title: string,
    textData: string[],
    buttons?: ICarouselDefaultBannerButton[]
}

export default function CarouselDefaultBanner({
    image, background,
    title, textData,
    buttons
}: ICarouselDefaultBanner) {
    return (
        <CarouselItem background={background}>
            <div className={style["root"]}>
                <div className={style["image-container"]}>
                    <img src={image} draggable={false} width={640} height={480} />
                </div>
                <section className={style["text-container"]}>
                    <h1>{title}</h1>
                    <div className={style["text"]}>
                        <div>
                            {
                                textData.map((text) => (
                                    <p key={text.split(" ")[0]}>{text}</p>
                                ))
                            }
                        </div>
                        {
                            buttons &&
                            (
                                <nav className={style["buttons"]}>
                                    <ul>
                                        {
                                            buttons?.map(
                                                button => (
                                                    <li key={button.url}>
                                                        <a href={button.url}>{button.name}</a>
                                                    </li>
                                                )
                                            )
                                        }
                                    </ul>
                                </nav>
                            )
                        }
                    </div>
                </section>
            </div>
        </CarouselItem>
    );
}
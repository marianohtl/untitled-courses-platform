import React from "react";

import style from "./default-banner.module.scss";
import CarouselItem, { ICarouselItemProps } from "../../carousel-item";

interface ICarouselDefaultBanner extends ICarouselItemProps{
    image: string,
}

export default function CarouselDefaultBanner({ image, background }: ICarouselDefaultBanner){
    return (
        <CarouselItem background={background}>
            <div className={style["root"]}>
                <div className={style["image-container"]}>
                    <img src={image} draggable={false} width={640} height={480}/>
                </div>
                <section className={style["text-container"]}>
                    <h1>Lorem Ipsum!</h1>
                    <div className={style["text"]}>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita, quia iste impedit sit maiores ducimus hic! 
                                Rem odio iusto ipsum soluta reiciendis, sint quibusdam laborum maxime sed non accusantium?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Error delectus accusantium ut porro libero temporibus suscipit obcaecati molestias expedita repellendus sint, amet tenetur fugit facilis! 
                                Soluta iure cum fugiat vitae?
                            </p>
                        </div>
                        <nav className={style["buttons"]}>
                            <ul>
                                <li>
                                    <a href="#">Trilhas</a>
                                </li>
                                <li>
                                    <a href="#">Cursos</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </div>
        </CarouselItem>
    );
}
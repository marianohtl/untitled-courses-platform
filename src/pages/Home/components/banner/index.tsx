import React from "react";

import { Carousel } from "@/components/carousel";
import CarouselItem from "@/components/carousel/carousel-item";

import style from "./banner.module.scss";

export default function Banner(){
    return (
        <div id={style.root}>
            <Carousel interval={1000}>
                <CarouselItem background="https://placehold.co/1920x796/FFFFFF/000000.png">
                    <p>AAA</p>
                </CarouselItem>
            </Carousel>
        </div>
    );
}
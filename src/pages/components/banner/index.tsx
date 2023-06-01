import React from "react";

import { Carousel } from "@/components/carousel";
import CarouselDefaultBanner from "@/components/carousel/templates/default-banner";

import style from "./banner.module.scss";

export default function Banner(){
    return (
        <div id={style.root}>
            <Carousel interval={1000}>
                <CarouselDefaultBanner 
                    background="https://placehold.co/1920x750/FFFFFF/F6F6F6.png" 
                    image="https://placehold.co/640x480/000000/FFFFFF.png" 
                />
            </Carousel>
        </div>
    );
}
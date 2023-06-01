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
                    title="Lorem Ipsum!"
                    textData={
                        [
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita, quia iste impedit sit maiores ducimus hic! Rem odio iusto ipsum soluta reiciendis, sint quibusdam laborum maxime sed non accusantium?",
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus accusantium ut porro libero temporibus suscipit obcaecati molestias expedita repellendus sint, amet tenetur fugit facilis! Soluta iure cum fugiat vitae?"
                        ]
                    }
                    buttons={
                        [
                            {url: "/trails", name: "Trilhas"},
                            {url: "/courses", name: "Cursos"}
                        ]
                    }
                />
            </Carousel>
        </div>
    );
}
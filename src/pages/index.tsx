import LearningPathList from "@/components/learning-path/learning-path-list";
import style from "./style.module.scss";
import React from "react";

const algumValorAiSeila = {
	list : ["aaa", "bbb", "ccc"],
	title : "letras"
};

export default function Home() {
	return (
		<>
			<LearningPathList title="O Inferno são " list={["os outros.", "o raluca.", "você mesmo."]} image="/images/anya.png"/>
			<LearningPathList title="A amizade são " list={[" os amigos que fizemos no caminho."]} image="/images/anya.png"/>
			<LearningPathList title="A saudade é "list={["uma abstração da falta ou ausência.", "uma coisa qualquer.", "uma palavra que não existe em japonês."]} image="/images/anya.png"/>
			<LearningPathList title="O Raluca é " list={["um gênio.", "um louco.", "um injustiçado."]} image="/images/anya.png"/>
			<LearningPathList {...algumValorAiSeila} image="/images/anya.png"/>
		</>
	);
}

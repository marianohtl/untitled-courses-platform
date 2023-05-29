import LearningPathList from "@/components/learning-path-list";
import style from "./style.module.scss";
import React from "react";

const algumValorAiSeila = {
	list: ["aaa", "bbb", "ccc"],
	title: "letras"
};

const contents = [
	{
		id: "1",
		title: "Minecraft for Dummies",
		contentsPath: [
			"How to use redstone?",
			"How to make a piston door?",
			"Flying machines, and how they work?",
			"TNT duplicator tutorial.",
			"Early game iron farm.",
			"Breaking bedrock without commands.",
			"How to use redstone?",
			"How to make a piston door?",
			"Flying machines, and how they work?",
			"TNT duplicator tutorial.",
			"Early game iron farm.",
			"Breaking bedrock without commands.",
			"Breaking bedrock without commands.",
			"Breaking bedrock without commands.",
			"Breaking bedrock without commands.",
			"Breaking bedrock without commands.",
			"Breaking bedrock without commands."
		],
		image: "/images/anya.png"
	},
	{
		id: "2",
		title: "Project Zomboid",
		contentsPath: [
			"Game Modes",
			"First Week",
			"First Month",
			"First Year",
			"Farming",
			"Medice",
			"Mechanics",
			"Carpentry",
			"Game Modes",
			"First Week",
			"First Month",
			"First Year",
			"Farming",
			"Medice",
			"Mechanics",
			"Carpentry"
		],
		image: "/images/anya.png"
	},
	{
		id: "3",
		title: "Opinion Channels",
		contentsPath: [
			"How to manipulate as Raluca.",
			"Diggo GOD, the better way",
			"Adding PUTZ in a thumbnail",
			"Choosing your anime profile picture",
			"Brilliant move",
			"Appealing Thumbnails",
			"Remember: It just my opinion, guys!"
		],
		image: "/images/anya.png"
	},
	{
		id: "4",
		title: "Project Zomboid",
		contentsPath: [
			"Game Modes",
			"First Week",
			"First Month",
			"First Year",
			"Farming",
			"Medice",
			"Mechanics",
			"Carpentry",
			"Game Modes",
			"First Week",
			"First Month",
			"First Year",
			"Farming",
			"Medice",
			"Mechanics",
			"Carpentry"
		],
		image: "/images/anya.png"
	},
	{
		id: "5",
		title: "Opinion Channels",
		contentsPath: [
			"How to manipulate as Raluca.",
			"Diggo GOD, the better way",
			"Adding PUTZ in a thumbnail",
			"Choosing your anime profile picture",
			"Brilliant move",
			"Appealing Thumbnails",
			"Remember: It just my opinion, guys!"
		],
		image: "/images/anya.png"
	},
	{
		id: "6",
		title: "Project Zomboid",
		contentsPath: [
			"Game Modes",
			"First Week",
			"First Month",
			"First Year",
			"Farming",
			"Medice",
			"Mechanics",
			"Carpentry",
			"Game Modes",
			"First Week",
			"First Month",
			"Carpentry"
		],
		image: "/images/anya.png"
	},
];

export default function Home() {
	return (
		<>
			<LearningPathList list={contents} />
		</>
	);
}

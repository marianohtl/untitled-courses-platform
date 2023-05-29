import React from "react";
import style from "./style.module.scss";
import Home2 from "./home";

export default function Home() {
	return (
		<>
			<Home2 />
			<h1 className={style["test-cool"]}>HELL</h1>
		</>
	);
}

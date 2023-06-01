import React from "react";
import style from "./style.module.scss";
import Banner from "./components/banner";

export default function Home() {
	return (
		<>
            <Banner />
			<h1 className={style["test-cool"]}>HELL</h1>
		</>
	);
}

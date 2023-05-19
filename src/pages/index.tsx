import Header from "@/layouts/header";
import style from "./style.module.scss";
import React from "react";

export default function Home() {
	return (
		<>
			<Header/>
			<h1 className={style["test-cool"]}>HELL</h1>
		</>
	);
}

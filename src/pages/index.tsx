import ContentSearch from "@/components/content-search";
import style from "./style.module.scss";
import React from "react";

export default function Home() {
	return (
		<>
			<h1 className={style["test-cool"]}>HELL</h1>
			<ContentSearch placeholder="Search something..." />
		</>
	);
}

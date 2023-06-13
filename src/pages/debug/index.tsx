import React from "react";
import style from "./debug.module.scss";

export default function DesignSystemPage() {
	return (
		<div id={style["root"]}>
			<div id={style["primary"]}>
				<div id={style["texts"]}>
					<div id={style["titles"]}>
						<h1>OLÁ, EU SOU UM H1</h1>
						<h2>OLÁ, EU SOU UM H2</h2>
						<h3>OLÁ, EU SOU UM H3</h3>
						<h4>OLÁ, EU SOU UM H4</h4>
						<h5>OLÁ, EU SOU UM H5</h5>
						<h6>OLÁ, EU SOU UM H6</h6>
						<p>OLÁ, EU SOU UM P</p>
					</div>
					<div id={style["links"]}>
						<a>OLÁ, EU SOU UM LINK SEM HREF</a>
						<a href="/">OLÁ, EU SOU UM LINK COM HREF</a>
						<a href="/">OLÁ, EU SOU UM BOTÃO LINK</a>
					</div>
				</div>
				<fieldset id={style["forms"]}>
					<input type="text" placeholder="OLÁ, EU SOU UM INPUT DE TEXTO" />
					<input type="text" placeholder="OLÁ, EU SOU UM INPUT DE SENHA" />
					<input type="number" placeholder="OLÁ, EU SOU UM INPUT NUMERICO" />
					<button type="submit">OLÁ, EU SOU UM BOTÃO SUBMIT</button>
					<input type="submit" value="OLÁ, EU SOU UM INPUT SUBMIT" />
				</fieldset>
			</div>
			<div id={style["secondary"]}>
				<div id={style["texts"]}>
					<div id={style["titles"]}>
						<h1>OLÁ, EU SOU UM H1</h1>
						<h2>OLÁ, EU SOU UM H2</h2>
						<h3>OLÁ, EU SOU UM H3</h3>
						<h4>OLÁ, EU SOU UM H4</h4>
						<h5>OLÁ, EU SOU UM H5</h5>
						<h6>OLÁ, EU SOU UM H6</h6>
						<p>OLÁ, EU SOU UM P</p>
					</div>
					<div id={style["links"]}>
						<a>OLÁ, EU SOU UM LINK SEM HREF</a>
						<a href="/">OLÁ, EU SOU UM LINK COM HREF</a>
						<a href="/">OLÁ, EU SOU UM BOTÃO LINK</a>
					</div>
				</div>
				<fieldset id={style["forms"]}>
					<input type="text" placeholder="OLÁ, EU SOU UM INPUT DE TEXTO" />
					<input type="text" placeholder="OLÁ, EU SOU UM INPUT DE SENHA" />
					<input type="number" placeholder="OLÁ, EU SOU UM INPUT NUMERICO" />
					<button type="submit">OLÁ, EU SOU UM BOTÃO SUBMIT</button>
					<input type="submit" value="OLÁ, EU SOU UM INPUT SUBMIT" />
				</fieldset>
			</div>
		</div>
	);
}
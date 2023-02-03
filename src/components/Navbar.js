import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export default function Navbar() {

	const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

	return (
		<Menu>
			<Mobile>
				<FaIcons.FaBars onClick={Sidebar()} />
			</Mobile>
			<Nato>
				<Link to="/" style={{ textDecoration: "none" }}>
					<h1>NATÖ</h1>
				</Link>
			</Nato>
			<Options>
				<Link to="/" style={{ textDecoration: "none" }}>
					<p>HOME</p>
				</Link>
				<Link to="/biografia" style={{ textDecoration: "none" }}>
					<p>BIOGRAFIA</p>
				</Link>
				<Link to="/albuns" style={{ textDecoration: "none" }}>
					<p>ALBUNS</p>
				</Link>
				<Link to="/carreira" style={{ textDecoration: "none" }}>
					<p>CARREIRA</p>
				</Link>
				<Link to="/agenda" style={{ textDecoration: "none" }}>
					<p>AGENDA</p>
				</Link>
				<Link to="/loja" style={{ textDecoration: "none" }}>
					<p>LOJA</p>
				</Link>
				<Link to="/contato" style={{ textDecoration: "none" }}>
					<h2>CONTATO</h2>
				</Link>
			</Options>
			<Account>
				<ion-icon name="headset-outline"></ion-icon>
				<ion-icon name="cart-outline"></ion-icon>
			</Account>
		</Menu>
	);
}

function Sidebar() {
	return (
		<MenuMobile>
			<Link to="/"><p>HOME</p></Link>
			<Link to="/"><p>HOME</p></Link>
			<Link to="/"><p>HOME</p></Link>
			<Link to="/"><p>HOME</p></Link>
		</MenuMobile>
	)
}

const Menu = styled.div`
	width: 100vw;
	height: 50px;
	background-color: #a65746;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 10px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
`;

const Mobile = styled.div`
	@media screen and (max-width: 768px) {
		ion-icon {
			width: 30px;
			height: 30px;
			color: #f3ebe0;
		}
		&:hover {
			cursor: pointer;
			ion-icon {
				color: #ecde82;
			}
		}
	}
	@media screen and (min-width: 769px) {
		display: none;
	}
`;

const Nato = styled.div`
	font-family: "Bebas Neue";
	font-size: 35px;
	color: #f3ebe0;
	font-weight: 400;
`;
const Options = styled.div`
	@media screen and (max-width: 768px) {
		display: none;
	}
	@media screen and (min-width: 769px) {
		display: flex;
		align-items: center;
		p {
			width: 150px;
			height: 35px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-family: "Special Elite";
			font-size: 15px;
			color: #f3ebe0;
			border-right: 1px solid #f3ebe0;
			&:hover {
				cursor: pointer;
				background-color: #f3ebe0;
				color: #a65746;
			}
		}
		h2 {
			width: 150px;
			height: 35px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-family: "Special Elite";
			font-size: 15px;
			font-weight: 400;
			color: #f3ebe0;
			&:hover {
				cursor: pointer;
				background-color: #f3ebe0;
				color: #a65746;
			}
		}
	}
`;

const Account = styled.div`
	width: 80px;
	height: 35px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	ion-icon {
		width: 30px;
		height: 30px;
		color: #f3ebe0;
	}
	&:hover {
		cursor: pointer;
		ion-icon {
			color: #ecde82;
		}
	}
`;

const MenuMobile = styled.ul`

`;

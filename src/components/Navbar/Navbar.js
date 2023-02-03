import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import Sidebar from "../Sidebar/Sidebar";

export default function Navbar() {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);

	return (
		<Menu>
				<SidebarOptions to="#">
					<FaIcons.FaBars onClick={showSidebar} />
					{sidebar && <Sidebar active={setSidebar} />}
				</SidebarOptions>
			<Nato>
				<Link to="/" style={{ textDecoration: "none" }}>
					<h1>NATÖ</h1>
				</Link>
			</Nato>
			<Account>
				<UserIcons>
					<FaIcons.FaRegUserCircle />
				</UserIcons>
				<UserIcons>
					<BsIcons.BsCart3 />
				</UserIcons>
			</Account>
		</Menu>
	);
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

const SidebarOptions = styled(Link)`
	svg {
		width: 25px;
		height: 25px;
		color: #f3ebe0;
		&:hover {
				cursor: pointer;
				color: #eddbc1;
			}
	}
`;

const Nato = styled.div`
	font-family: "Bebas Neue";
	font-size: 35px;
	color: #f3ebe0;
	font-weight: 400;
`;

const Account = styled.div`
	width: 80px;
	height: 35px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const UserIcons = styled.div`
	svg {
		width: 25px;
		height: 25px;
		color: #f3ebe0;
		&:hover {
			cursor: pointer;
			color: #eddbc1;
		}
	}
`;


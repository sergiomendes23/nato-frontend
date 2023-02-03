import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar({ active }) {
	const closeSidebar = () => {
		active(false);
	};

	return (
		<Container sidebar={active}>
			<FaTimes onClick={closeSidebar} />
			<Content>
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
					<p>CONTATO</p>
				</Link>
			</Content>
		</Container>
	);
}

const Container = styled.div`
	width: 150px;
	height: 100%;
	background-color: #a65746;
	position: fixed;
	top: 0;
	left: 0;
	left: ${(props) => (props.sidebar ? "0" : "100%")};
	animation: showSidebar 0.4s;

	svg {
		width: 40px;
		height: 40px;
		color: #f3ebe0;
		box-sizing: border-box;
		padding: 10px;
        &:hover {
			cursor: pointer;
			color: #eddbc1;
		}
	}


	@keyframes showSidebar {
		from {
			opacity: 0;
			width: 0;
		}
		to {
			opacity: 1;
			width: 150px;
		}
	}
    
`;

const Content = styled.ul`
	p {
		width: 150px;
		height: 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: "Special Elite";
		font-size: 15px;
		color: #f3ebe0;
		&:hover {
			cursor: pointer;
			background-color: #f3ebe0;
			color: #a65746;
		}
	}
`;
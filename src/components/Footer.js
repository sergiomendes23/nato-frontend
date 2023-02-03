import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<Container>
			<Text>
				<p>© 2023 NATÖ. Desenvolvedor e web design: Sérgio Mendes.</p>
			</Text>
			<Midias>
				<MidiaIcon>
					<a href="https://www.instagram.com/natocomtrema/" target="_blank">
						<ion-icon name="logo-instagram"></ion-icon>
					</a>
				</MidiaIcon>
				<MidiaIcon>
					<a href="https://twitter.com/natocomtrema" target="_blank">
						<ion-icon name="logo-twitter"></ion-icon>
					</a>
				</MidiaIcon>
				<MidiaIcon>
					<a
						href="https://open.spotify.com/artist/5tcibVee711ANTnnmW4gr6"
						target="_blank"
					>
						<ion-icon name="stats-chart-outline"></ion-icon>
					</a>
				</MidiaIcon>
				<MidiaIcon>
					<a href="https://www.youtube.com/@NATOcomtrema" target="_blank">
						<ion-icon name="logo-youtube"></ion-icon>
					</a>
				</MidiaIcon>
			</Midias>
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 50px;
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: #a65746;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 10px;
`;

const Text = styled.div`
	font-family: "Roboto";
	font-size: 10px;
	color: #f3ebe0;
	font-weight: 400;
`;

const Midias = styled.div`
	display: flex;
`;

const MidiaIcon = styled.div`
	margin-left: 15px;
	ion-icon {
		width: 25px;
		height: 25px;
		color: #f3ebe0;
	}
	&:hover {
		cursor: pointer;
		ion-icon {
			color: #ecde82;
		}
	}
`;

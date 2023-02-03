import styled from "styled-components";
import * as BsIcons from "react-icons/bs";

export default function Footer() {
	return (
		<Container>
			<Text>
				<p>© 2023 NATÖ. Desenvolvedor e web design: Sérgio Mendes.</p>
			</Text>
			<Midias>
				<MidiaIcon>
					<a href="https://www.instagram.com/natocomtrema/" target="_blank">
						<BsIcons.BsInstagram />
					</a>
				</MidiaIcon>
				<MidiaIcon>
					<a href="https://twitter.com/natocomtrema" target="_blank">
						<BsIcons.BsTwitter />
					</a>
				</MidiaIcon>
				<MidiaIcon>
					<a
						href="https://open.spotify.com/artist/5tcibVee711ANTnnmW4gr6"
						target="_blank"
					>
						<BsIcons.BsSpotify />
					</a>
				</MidiaIcon>
				<MidiaIcon>
					<a href="https://www.youtube.com/@NATOcomtrema" target="_blank">
						<BsIcons.BsYoutube />
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

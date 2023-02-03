import styled from "styled-components";
import home from "../../assets/images/home.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Home() {
	return (
		<Container>
			<Navbar />
			<Background>
				<BgImg>
					<img src={home} />
				</BgImg>
				<Logo>
					<h1>NATÖ</h1>
				</Logo>
			</Background>
			<Footer />
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #f3ebe0;
`;

const Background = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	padding-right: 300px;
`;

const BgImg = styled.div`
	@media screen and (max-width: 720px) {
		img {
			display: none;
		}
	}

	@media screen and (min-width: 721px) {
		img {
			width: 40%;
			position: fixed;
			bottom: 0;
			left: 0;
		}
	}
`;

const Logo = styled.div`
	h1 {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 500px;
		height: 200px;
		font-family: "Bebas Neue";
		font-weight: 400;
		font-size: 200px;
		color: #a65746;
	}
`;

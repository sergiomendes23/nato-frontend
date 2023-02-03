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
	@media screen and (max-width: 720px) {
		width: 100vw;
		height: 300px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media screen and (min-width: 721px) {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		padding-right: 300px;
	}
`;

const BgImg = styled.div`
	@media screen and (max-width: 720px) {
		img {
			width: 370px;
			position: fixed;
			bottom: 0;
			left: 0;
		}
	}

	@media screen and (min-width: 721px) {
		img {
			width: 450px;
			position: fixed;
			bottom: 0;
			left: 0;
		}
	}
`;

const Logo = styled.div`
	@media screen and (max-width: 720px) {
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: "Bebas Neue";
		font-weight: 400;
		font-size: 100px;
		color: #a65746;
	}

	@media screen and (min-width: 721px) {
		h1 {
			display: flex;
			align-items: center;
			justify-content: center;
			font-family: "Bebas Neue";
			font-weight: 100;
			font-size: 200px;
			color: #a65746;
		}
	}
`;

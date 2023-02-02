import styled from "styled-components";
import home from "../../assets/images/home.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
	return (
		<Container>
			<Header />
			<Background>
				<img src={home} />
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
	img {
		width: 100vw;
		height: 100vh;
		position: fixed;
		bottom: 0;
		left: 0;
	}
`;

import styled from "styled-components";
import home from "../../assets/images/home.png";
import Header from "../../components/Header";

export default function Home() {
	return (
		<Container>
			<Header />
			<Background></Background>
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: url(${home});
	background-repeat: no-repeat;
	background-size: 100%;
`;

const Background = styled.div`
	
`;

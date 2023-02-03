import styled from "styled-components";
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Biografy() {
	return (
		<Container>
			<Header />
			<>
				<div>Biografia</div>
			</>
			<Footer />
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #f3ebe0;
	margin-top: 50px;
`;

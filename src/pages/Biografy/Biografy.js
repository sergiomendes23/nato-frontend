import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Biografy() {
	return (
		<Container>
			<Navbar />
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

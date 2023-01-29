import styled from "styled-components";
import Header from "../../components/Header";

export default function Biografy() {
	return (
		<Container>
			<Header />
			<>
				<div>Biografia</div>
			</>
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #f3ebe0;
`;

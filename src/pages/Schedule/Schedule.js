import styled from "styled-components";
import Header from "../../components/Navbar";

export default function Schedule() {
	return (
		<Container>
			<Header />
			<>
				<div>Agenda</div>
			</>
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #f3ebe0;
`;

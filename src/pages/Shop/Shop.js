import styled from "styled-components";
import Header from "../../components/Header";

export default function Shop() {
	return (
		<Container>
			<Header />
			<>
				<div>Loja</div>
			</>
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #f3ebe0;
`;

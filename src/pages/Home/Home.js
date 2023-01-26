import styled from "styled-components";
import Header from "../../components/Header";

export default function Home() {
	return (
		<>
			<Header />
			<Container>
				<div>hello world</div>
			</Container>
		</>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #f3ebe0;
`;

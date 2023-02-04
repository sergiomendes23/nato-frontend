import styled from "styled-components";
import biografy from "../../assets/images/biografy.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Biografy() {
	return (
		<Container>
			<Navbar />
			<Content>
				<ImageBio>
					<img src={biografy} />
				</ImageBio>
				<TextBio>
					<p>
						NATÖ é artista independente, professor de história e educador
						popular. Divide com o mundo nas plataformas digitais as duas
						primeiras partes de seu disco, “Nômade”. Em sua carreira, já se
						apresentou em eventos como o Meeting of Favela, World Creativy Day
						(evento global que celebra uma data instituída pela ONU) no Gomeia.
						Além disso, foi vencedor do Festival VirtuUau e participou do JUV
						Festival na etapa da Cidade das Artes. Sua música mistura
						referências diversas que permeiam o universo da MPB e o Hip-Hop
						Alternativo. É, sobretudo, uma música essencialmente brasileira. Vai
						te pegar pela mensagem e pelo semblante.
					</p>
				</TextBio>
			</Content>
			<Footer />
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #f3ebe0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Content = styled.div`
	@media screen and (max-width: 720px) {
		display: flex;
		justify-content: center;
		width: 100vw;
		height: 550px;
	}

	@media screen and (min-width: 721px) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 100px;
		width: 100vw;
		height: 550px;
	}
`;

const ImageBio = styled.div`
	@media screen and (max-width: 720px) {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 250px;
		height: 250px;
		margin-right: 20px;
		position: fixed;
		left: 0;
		bottom: 70px;
		img {
			width: 200px;
		}
	}

	@media screen and (min-width: 721px) {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 500px;
		height: 500px;
		margin-right: 20px;
		img {
			width: 400px;
		}
	}
`;

const TextBio = styled.div`
	@media screen and (max-width: 720px) {
		width: 350px;
		height: 350px;
		p {
			font-family: "Roboto";
			font-weight: 400;
			font-size: 18px;
			color: #a65746;
			text-align: justify;
		}
	}

	@media screen and (min-width: 721px) {
		width: 800px;
		height: 500px;
		display: flex;
		align-items: center;
		justify-content: center;
		p {
			font-family: "Roboto";
			font-weight: 400;
			font-size: 30px;
			color: #a65746;
			text-align: justify;
		}
	}
`;

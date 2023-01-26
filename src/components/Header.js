import styled from "styled-components";

export default function Header() {
	return (
		<Menu>
			<h1>NATÖ</h1>
			<p>HOME</p>
			<p>BIOGRAFIA</p>
			<p>ALBUNS</p>
			<p>CARREIRA</p>
			<p>AGENDA</p>
			<p>LOJA</p>
			<h6>CONTATO</h6>
			<Account>
				<Icon>
					<ion-icon name="headset-outline"></ion-icon>
					<ion-icon name="cart-outline"></ion-icon>
				</Icon>
			</Account>
		</Menu>
	);
}

const Menu = styled.div`
	width: 100vw;
	height: 50px;
	background-color: #a65746;
	display: flex;
	align-items: center;
	h1 {
		font-family: "Bebas Neue";
		font-size: 35px;
		color: #f3ebe0;
		font-weight: 400;
		margin-right: 25px;
		margin-left: 10px;
	}
	p {
		width: 150px;
		height: 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: "Special Elite";
		font-size: 15px;
		color: #f3ebe0;
		border-right: 1px solid #f3ebe0;
	}
	h6 {
		width: 150px;
		height: 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: "Special Elite";
		font-size: 15px;
		font-weight: 400;
		color: #f3ebe0;
	}
`;

const Account = styled.div`
	width: 150px;
	height: 35px;
	background-color: skyblue;
    ion-icon {}
`;

const Icon = styled.div`
	width: 25px;
	height: 25px;
	color: #f3ebe0;
`;

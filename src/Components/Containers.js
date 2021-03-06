import styled from "styled-components";

export const Col = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
`;

export const MainCont = styled(Row)`
	background-color: #e0ddcf;
	color: #4c5454;
	font-family: arial;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
	width: 100%;
	min-height: 100vh;
	@media (max-width: 720px) {
		flex-direction: column;
		padding-top: 35px;
	}
`;

export const SideBar = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #7b7263;
	display: flex;
	flex-direction: column;
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	transition-duration: 0.1s;
	justify-content: space-between;
	align-items: center;
	width: 40px;
	height: 100%;
	border-right: 1px solid #393e41;
	&:hover {
		width: 100px;
	}
	@media (max-width: 720px) {
		width: 100%;
		height: 40px;
		flex-direction: row;
		place-self: flex-start;
		border-bottom: 1px solid #393e41;
		padding: 10px 0;
		&:hover {
			height: 70px;
			width: 100%;
		}
	}
`;

export const Card = styled.a`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 45%;
	min-width: 300px;
	margin: 10px;
	border-radius: 10px;
	max-width: 450px;
	height: 300px;
	box-shadow: 1px 1px 8px #4c5454;
	text-decoration: none;
	@media (max-width: 720px) {
		width: 60%;
		margin: 10px 0px;
	}
	&:hover {
		transform: scale(1.025, 1.025);
	}
`;

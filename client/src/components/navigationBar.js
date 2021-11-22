import styled from "styled-components"
import { Link } from "react-scroll"
import { FaRocket, FaBars } from "react-icons/fa"

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.2rem;
	padding-top: 3rem ;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`

const Logo = styled(Link)`
	color: #FF8882;
	cursor: pointer;
	display: flex;
	align-items: center;
	font-weight: bold;
`

const Hamburger = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		color: #fff;
		display: inline;
		position: absolute;
		top: 3rem;
		right: 9%;
		cursor: pointer;
	}
`

const List = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`

const Item = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
  margin-left: 3rem;
	padding: 0 0 0.4rem;
	height: 100%;
	cursor: pointer;
	border-bottom: 3px solid transparent;

	&:hover {
		border-bottom: 3px solid #fff;
	}
`

const NavigationBar = ({ toggle }) => {
	return (
		<Nav>
			<Logo>QuickURL<FaRocket /></Logo>
			<Hamburger onClick={toggle}>
				<FaBars />
			</Hamburger>
			<List>
				<Item to="home" spy={true} duration={500} smooth={true}>Home</Item>
				<Item to="about" spy={true} duration={500} smooth={true}>About</Item>
			</List>
		</Nav>
	)
}

export default NavigationBar
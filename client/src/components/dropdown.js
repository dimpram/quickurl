import styled from "styled-components"
import { Link } from "react-scroll"
import { FaTimes } from "react-icons/fa"
import Container from "./container"

const Panel = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #9DBEB9;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

const CloseIcon = styled(FaTimes)`
  color: #194350;
`

const Icon = styled.div`
  position: absolute;
  top: 2.9rem;
  right: 8.5%;
  background: transparent;
  font-size: 1.6rem;
  cursor: pointer;
  outline: none;
`

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(2, 60px);
  }
`

const Item = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  font-weight: bold;
  font-size: 1.5rem;
  transition: 0.2s ease-in-out;
  color: #194350;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    transition: 0.2s ease-in-out;
  }
`


const Dropdown = ({ isOpen, toggle }) => {
  return (
    <Container>
      <Panel isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <List>
          <Item to="home" spy={true} duration={500} smooth={true} onClick={toggle}>Home</Item>
          <Item to="about" spy={true} duration={500} smooth={true} onClick={toggle}>About</Item>
        </List>
      </Panel>
    </Container>
  )
}

export default Dropdown
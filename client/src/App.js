import React, { useState } from 'react';
import styled from 'styled-components';
import Container from "./components/container"
import Dropdown from "./components/dropdown"
import NavigationBar from "./components/navigationBar"
import Panel from './components/panel';
import Section from './components/section';
import Title from './components/title';
import Text from './components/text';
import Table from './components/table';
import Social from './components/social'
import './global.css';

const Headline = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  color: #9DBEB9;
  margin: 5rem 0;
  
  @media screen and (min-width: 760px) {
    margin-left: 3rem;
    flex-direction: row;
    justify-content: space-between;
    order: 2;
  }
`
const SubHeadline = styled.h1`
  margin-top: 1.2rem;
  font-weight: 500;
  font-size: 1.5rem;
  color: #FFC2B4;
`
const Overlay = styled.div`
  padding: 3rem;
  border-radius: 0 0 30px 30px;
  background-color: ${(props) => props.color};
  margin-bottom: 3rem;
`

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem 0;
  }
`

const App = () => {

  // Controls for the hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Section color="#194350" name="home">
        <Container>
          <Dropdown isOpen={isOpen} toggle={toggleDropdown} />
          <NavigationBar toggle={toggleDropdown} />
          <Grid>
            <Headline>A URL shortening service that makes your life easier
              <SubHeadline>Quick! Give it a try!</SubHeadline>
            </Headline>
            <Panel />
          </Grid>
        </Container>
      </Section>
      <Section color="#ffffff" name="about">
        <Overlay color="#194350" />
        <Container>
          <Title>About</Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          <Table />
        </Container>
      </Section>
      <Section color="#194350">
        <Overlay color="#ffffff" />
        <Container>
          <Social />
        </Container>
      </Section>
    </>
  )
}

export default App;
import { FaGithub } from "react-icons/fa"
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  padding-bottom: 2rem;

  p {
    margin-right: 1rem;
  }
`

const Social = () => {
  return (
    <Container>
      <p>Are you a developer?</p><FaGithub />
    </Container>
  )
}

export default Social;
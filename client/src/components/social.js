import { FaGithub } from "react-icons/fa"
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  padding-bottom: 2rem;

  p {
    margin-right: 0.5rem;
  }
`

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`

const Social = () => {
  return (
    <Container>
      <Link href="https://github.com/dimpram/quickurl"><p>Source code available on</p><FaGithub /></Link>
    </Container>
  )
}

export default Social;
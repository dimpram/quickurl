import styled from "styled-components";
import { FaLink, FaRocket, FaCopy} from "react-icons/fa"

const Form = styled.form`
  margin: 1.8rem 0 0;
  padding: 1rem 1.4rem 1.4rem;
  background-color: #9DBEB9;
  border-radius: 20px;
`
const Label = styled.label`
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin: 0 0 0.3rem;
`

const LinkIcon = styled(FaLink)`
  font-size: 0.8rem;
  margin-right: 0.4rem;
`

const RocketIcon = styled(FaRocket)`
  font-size: 0.8rem;
  margin-right: 0.4rem;
`
const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  margin: 0rem 0rem 0.7rem;
  background: #fff;
  border: none;
  border-radius: 12px;
  border: 2px dashed #194350;
`
const ButtonContainer = styled.div`
  margin-top: 0.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ShortenButton = styled.button`
  margin-right: 0.5rem;
  background-color: #FF8882;
  border: none;
  color: #fff;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  border-radius: 15px;
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  flex-grow: 2;
  transition: 0.15s ease-in-out;

  &:hover {
    filter: brightness(110%);
  }
`
const CopyButton = styled.button`
  margin-left: 0.5rem;
  background-color: #FFC2B4;
  border: none;
  color: #fff;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  border-radius: 15px;
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  flex-grow: 1;
  transition: 0.15s ease-in-out;

  &:hover {
    filter: brightness(110%);
  }
`

const CopyIcon = styled(FaCopy)`
  color: #fff;
`

const Panel = () => {
  return (
    <Form>
      <Label><LinkIcon />Your URL</Label>
      <Input type="url" placeholder="https://www.example.com/an-example-page" pattern="https://.*" required />
      <Label><RocketIcon />Your short URL</Label>
      <Input type="url" placeholder="https://www.quickurl.live/xxxxxx" readOnly={true}/>
      <ButtonContainer>
        <ShortenButton>Shorten</ShortenButton>
        <CopyButton><CopyIcon/></CopyButton>
      </ButtonContainer>
    </Form>
  )
}

export default Panel
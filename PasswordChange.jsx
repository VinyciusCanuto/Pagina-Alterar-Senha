import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0C244C;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 20px;
  width: 350px;
  border-radius: 20px;
`;

const Titulo = styled.h1`
  font-size: 24px;
  color: #0C244C;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 90%;
  margin: 10px 0;
`;

const Input = styled.input`
  width: 85%;
  padding: 10px 40px 10px 10px; /* Add padding to accommodate the icon */
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #0C244C;
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 15px;
  color: #0C244C;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #0C244C;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const PasswordChange = () => {
  return (
    <Container>
      <Form>
        <Titulo>Alterar Senha</Titulo>
        <InputWrapper>
          <Input type="password" placeholder="Senha atual" />
          <Icon icon={faLock} />
        </InputWrapper>
        <InputWrapper>
          <Input type="password" placeholder="Nova senha" />
          <Icon icon={faLock} />
        </InputWrapper>
        <InputWrapper>
          <Input type="password" placeholder="Confirme nova senha" />
          <Icon icon={faLock} />
        </InputWrapper>
        <Button type="submit">Alterar</Button>
      </Form>
    </Container>
  );
}

export default PasswordChange;

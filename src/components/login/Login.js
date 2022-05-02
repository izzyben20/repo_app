import { FaGithub } from 'react-icons/fa';
import { signIn } from '../../firebase';
import { Container, FormWrap, FormContent, Form } from './LoginStyles';

const Login = () => {
  return (
    <Container>
      <FormWrap>
        <FormContent>
          <Form action="#">
            <h1>
              <FaGithub size="6rem" />
            </h1>
            <label htmlFor="for">Email</label>
            <input type="email" disabled placeholder="Enter Your Email" />
            <label htmlFor="for">Password</label>
            <input type="password" disabled placeholder="Enter your password" />
            <button type="submit" onClick={signIn}>
              <FaGithub /> Login With GitHub
            </button>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Login;

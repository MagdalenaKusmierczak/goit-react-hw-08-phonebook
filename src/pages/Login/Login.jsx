import LoginForm from 'components/LoginForm/LoginForm';
import {
  LoginWrapper,
  LoginHeader,
  Redirect,
  RegisterLink,
} from './Login.styled';

const Login = () => {
  return (
    <LoginWrapper>
      <LoginHeader>Let's log in!</LoginHeader>
      <LoginForm />
      <Redirect>
        You don't have an account?{' '}
        <RegisterLink to={`/register`}>Let's register!</RegisterLink>
      </Redirect>
    </LoginWrapper>
  );
};
export default Login;

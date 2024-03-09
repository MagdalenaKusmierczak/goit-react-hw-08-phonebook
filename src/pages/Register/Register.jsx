import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Wrapper,Title, Redirect, LoginLink } from './Register.styled';

const Register = () => {
  return (
    <Wrapper>
      <Title>Create an account</Title>
      <RegisterForm />
      <Redirect>You arleady have an account? <LoginLink to={`/login`}>Let's log in!</LoginLink></Redirect>
    </Wrapper>
  );
};
export default Register;

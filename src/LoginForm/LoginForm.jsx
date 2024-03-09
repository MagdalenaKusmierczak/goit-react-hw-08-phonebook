import { useDispatch } from 'react-redux';
import { logIn } from '../redux/authorization/operations';

import { Form, Label, Input, SubButton } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Login
        <Input
          type="email"
          name="email"
          required
          placeholder="Enter your login..."
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          required
          placeholder="Enter your password..."
        />
      </Label>
      <SubButton type="submit">Submit</SubButton>
    </Form>
  );
};
export default LoginForm;

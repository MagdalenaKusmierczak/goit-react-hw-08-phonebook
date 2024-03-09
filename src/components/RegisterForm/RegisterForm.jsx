import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

import { Form, Label, Input, SubButton } from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Username
        <Input
          type="text"
          name="name"
          minLength={3}
          required
          placeholder="Select your username..."
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          required
          placeholder="Enter your password..."
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          minLength={6}
          required
          placeholder="Select your password..."
        />
      </Label>
      <SubButton type="submit">Register</SubButton>
    </Form>
  );
};
export default RegisterForm;

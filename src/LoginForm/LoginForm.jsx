import { Form, Label, Input, SubButton } from './LoginForm.styled';

const LoginForm = () => {
  return (
    <Form>
      <Label>
        Login
        <Input
          type="text"
          name="login"
          required
          placeholder="Enter your login..."
        />
      </Label>
      <Label>
        Password
        <Input
          type="text"
          name="login"
          required
          placeholder="Enter your password..."
        />
      </Label>
      <SubButton>Submit</SubButton>
    </Form>
  );
};
export default LoginForm;

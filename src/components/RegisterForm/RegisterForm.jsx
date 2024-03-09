import { Form, Label, Input, SubButton } from './RegisterForm.styled';

const RegisterForm = () => {
  return (
    <Form>
      <Label>
        Email
        <Input
          type="text"
          name="email"
          required
          placeholder="Enter your password..."
        />
      </Label>
      <Label>
        Login
        <Input
          type="text"
          name="login"
          required
          placeholder="Select your login..."
        />
      </Label>
      <Label>
        Password
        <Input
          type="text"
          name="login"
          required
          placeholder="Select your password..."
        />
      </Label>
      <SubButton>Submit</SubButton>
    </Form>
  );
};
export default RegisterForm;

import { UserWrapper, UserMail, LogoutButton } from './UserMenu.styled';

const UserMenu = () => {
  return (
    <UserWrapper>
      <UserMail>mango@mail.com</UserMail>
      <LogoutButton>Logout</LogoutButton>
    </UserWrapper>
  );
};
export default UserMenu;

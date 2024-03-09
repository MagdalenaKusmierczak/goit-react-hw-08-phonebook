import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/authorization/operations';
import { selectUser } from '../../redux/authorization/selectors';

import { UserWrapper, UserMail, LogoutButton } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <UserWrapper>
      <UserMail>{user.email}</UserMail>
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutButton>
    </UserWrapper>
  );
};
export default UserMenu;

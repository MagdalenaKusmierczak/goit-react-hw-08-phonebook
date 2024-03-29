import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import LogoutIcon from '@mui/icons-material/Logout';

import { UserWrapper, UserMail, LogoutButton } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <UserWrapper>
      <UserMail>{user.email}</UserMail>
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        <LogoutIcon />
      </LogoutButton>
    </UserWrapper>
  );
};
export default UserMenu;

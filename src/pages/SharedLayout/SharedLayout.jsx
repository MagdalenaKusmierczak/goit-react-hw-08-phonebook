import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import Loader from 'Service/Loader/Loader.jsx';
import { Container, Header } from './SharedLayout.styled';
const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <footer> GOIT homework by <a href='' target='_blank'>Magdalena Kuśmierczak</a></footer>
    </Container>
  );
};

export default SharedLayout;

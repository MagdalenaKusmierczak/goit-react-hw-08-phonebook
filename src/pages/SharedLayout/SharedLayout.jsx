import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import Loader from 'Service/Loader/Loader.jsx';
import {
  Container,
  Header,
  Footer,
  FooterWrapper,
  GoitLink,
  MyLink,
  FooterText,
} from './SharedLayout.styled';
const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer>
        <FooterWrapper>
          <GoitLink
            href="https://html-m-lp-pl.goit.global/ "
            target="_blank"
            rel="noreferrer"
          >
            GOIT
          </GoitLink>
          <FooterText> homework by </FooterText>
          <MyLink
            href="https://github.com/MagdalenaKusmierczak/goit-react-hw-08-phonebook"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Magdalena Kuśmierczak
          </MyLink>
        </FooterWrapper>
      </Footer>
    </Container>
  );
};

export default SharedLayout;

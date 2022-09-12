import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import { Title, FlexContainer, NavContainer, Content } from './style';
import { Navigation } from 'react-minimal-side-navigation';
import Header from '../../components/Header';
import UsersList from '../../components/UsersList';

const Home = () => {
  return (
    <>
      <FlexContainer>
        <NavContainer>
          <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/management/members"
            onSelect={({ itemId }) => {
              // maybe push to the route
            }}
            items={[
              {
                title: 'Inicio',
                itemId: '/',
              },
              {
                title: 'Administración',
                itemId: '/',
                subNav: [
                  {
                    title: 'Usuarios',
                    itemId: '/',
                  },
                  {
                    title: 'Roles',
                    itemId: '/',
                  },
                  {
                    title: 'Permisos',
                    itemId: '/',
                  },
                ],
              },
              {
                title: 'Cerrar sesion',
                itemId: '/another',
              },
            ]}
          />
        </NavContainer>
        <Container>
          <Header />
          <Content>
            <UsersList />
          </Content>
        </Container>
      </FlexContainer>
    </>
  );
};

export default Home;

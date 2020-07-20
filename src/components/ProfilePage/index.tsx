import React from 'react';

import Feed from '../Feed';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>buruno</h1>
        <h2>@burunocarv_ </h2>

        <p>dev javacript and functional programming</p>

        <ul>
          <li>
            <LocationIcon />
            Maringá, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 30 de outubro de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94 </strong>
          </span>
          <span>
            <strong>300 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;

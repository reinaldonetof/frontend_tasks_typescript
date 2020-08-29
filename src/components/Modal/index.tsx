import React from 'react';
import { Container, Content } from './styles';

interface iChildren {
  children: React.ReactNode;
}

const Modal: React.FC<iChildren> = ({ children }: iChildren) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);

export default Modal;

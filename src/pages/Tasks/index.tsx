import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Card, Title, Input, Button } from './styles';
import LoginController from '../../controllers/LoginController';

const Tasks: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = LoginController({ email, password });
    if (result) {
      history.push('/tasks');
    }
  };

  return (
    <Container>
      <Card onSubmit={e => handleSubmit(e)}>
        <Title>Login to tasks</Title>
        <Input
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button>Login</Button>
        <Link to="/create">Criar conta</Link>
      </Card>
    </Container>
  );
};

export default Tasks;

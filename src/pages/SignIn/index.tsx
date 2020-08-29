import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Card, Title, Input, Button } from './styles';
import LoginController from '../../controllers/LoginController';
import { validateSignIn } from '../../validators/validators';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await validateSignIn({ email, password });
      const result = await LoginController({ email, password });
      if (result) {
        history.push('/tasks');
      }
    } catch (err) {
      alert(JSON.stringify(err.errors));
    }
  };

  return (
    <Container>
      <Card onSubmit={e => handleSubmit(e)}>
        <Title>Login to tasks</Title>
        <Input
          placeholder="E-mail"
          type="email"
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
        <Link to="/signup">Criar conta</Link>
      </Card>
    </Container>
  );
};

export default SignIn;

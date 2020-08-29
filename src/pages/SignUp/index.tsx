import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Card, Title, Input, Button } from './styles';
import SignUpController from '../../controllers/SignUpController';
import { validateSignUp } from '../../validators/validators';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await validateSignUp({ email, password, name });
      const result = await SignUpController({ email, password, name });
      if (result) {
        history.push('/');
      }
    } catch (err) {
      alert(JSON.stringify(err.errors));
    }
  };

  return (
    <Container>
      <Card onSubmit={e => handleSubmit(e)}>
        <Title>Criar conta</Title>
        <Input
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
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
        <Link to="/">Já possuo conta</Link>
      </Card>
    </Container>
  );
};

export default SignUp;

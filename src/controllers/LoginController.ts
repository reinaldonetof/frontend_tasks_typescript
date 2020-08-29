import api from '../services/api';

interface iLogin {
  email: string;
  password: string;
}

const Login = async ({ email, password }: iLogin): Promise<boolean> => {
  try {
    const response = await api.post('sessions', { email, password });
    localStorage.setItem('@intranett_token', response.data.token);
    localStorage.setItem('@intranett_user', JSON.stringify(response.data.user));
    return true;
  } catch (e) {
    alert(e.response.data.message);
    return false;
  }
};

export default Login;

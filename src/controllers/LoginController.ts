import api from '../services/api';

interface iLogin {
  email: string;
  password: string;
}

const Login = async ({ email, password }: iLogin): Promise<boolean> => {
  try {
    const response = await api.post('sessions', { email, password });
    console.log(response);
    return true;
  } catch (e) {
    alert(e.message);
    return false;
  }
};

export default Login;

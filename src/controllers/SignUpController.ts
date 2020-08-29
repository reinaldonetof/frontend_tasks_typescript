import api from '../services/api';

interface iSignUp {
  name: string;
  email: string;
  password: string;
}

const SignUp = async ({ email, password, name }: iSignUp): Promise<boolean> => {
  try {
    const response = await api.post('users', { email, password, name });
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (e) {
    alert(e.response.data.message);
    return false;
  }
};

export default SignUp;

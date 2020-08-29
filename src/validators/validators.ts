import * as Yup from 'yup';

interface iSignUp {
  name: string;
  email: string;
  password: string;
}

export const validateSignUp = async (
  data: iSignUp,
): Promise<boolean | string[]> => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required('Nome obrigatório'),
      email: Yup.string()
        .required('E-mail obrigatório')
        .email('Digite um e-mail válido'),
      password: Yup.string().min(8, 'Minimo de 8 caracteres'),
    });

    await schema.validate(data, { abortEarly: false });
    return true;
  } catch (err) {
    return err.errors;
  }
};

interface iSignIn {
  email: string;
  password: string;
}

export const validateSignIn = async (data: iSignIn): Promise<void> => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required('E-mail obrigatório')
      .email('Digite um e-mail válido'),
    password: Yup.string().min(8, 'Minimo de 8 caracteres'),
  });

  await schema.validate(data, { abortEarly: false });
};

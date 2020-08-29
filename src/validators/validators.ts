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

interface iCreateTask {
  name: string;
  date: Date | null;
}

export const validateCreateTask = async (data: iCreateTask): Promise<void> => {
  const schema = Yup.object().shape({
    name: Yup.string().min(5, 'Minimo de 5 caracteres'),
    date: Yup.date().required('Obrigatório uma data'),
  });

  await schema.validate(data, { abortEarly: false });
};

interface iUpdateTask {
  comments?: string;
  status: string;
  finish_date: Date | null;
}

export const validateUpdateTask = async (data: iUpdateTask): Promise<void> => {
  const schema = Yup.object().shape({
    comments: Yup.string(),
    status: Yup.string().required('Obrigatório status'),
    finish_date: Yup.date().required('Obrigatório uma data'),
  });

  await schema.validate(data, { abortEarly: false });
};

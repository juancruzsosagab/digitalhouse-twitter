'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SubmitButton from '../form/SubmitButton';
import InputText from '../form/InputText';

type FromData = {
  username: string;
  password: string;
};

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const LoginForm = () => {
  const methods = useForm<FromData>({
    resolver: yupResolver(schema),
  });

  const {register, handleSubmit, formState: {errors}} = methods;

  const onSubmit = async (data: FromData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText fieldName="username" label="Nombre de usuario" placeholder='Anakin Skywalker' type="text"/>
      <InputText fieldName="password" label="Contraseña" placeholder='Contraseña' type="password"/>
        <SubmitButton label="Iniciar sesión" onSubmit={onSubmit} styles={"mb-4"} />
    </form>
    </FormProvider>
  );
};

export default LoginForm;

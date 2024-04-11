'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputText from '../form/InputText';
import * as yup from 'yup';
import SubmitButton from '../form/SubmitButton';

type FromData = {
  username: string;
  password: string;
  name: string;
  photoUrl: string;
};

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
    name: yup.string().required(),
    photoUrl: yup.string().required(),
  })
  .required();

const RegisterForm = () => {
  const methods = useForm<FromData>({
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: FromData) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          fieldName="username"
          label="Nombre de usuario"
          placeholder="Anakin Skywalker"
          type="text"
        />
        <InputText
          fieldName="password"
          label="Contraseña"
          placeholder="Contraseña"
          type="password"
          styles="mt-4"
        />
        <InputText
          fieldName="name"
          label="Nombre"
          placeholder="Nombre"
          type="text"
          styles="mt-4"
        />
        <InputText
          fieldName="photoUrl"
          label="PhotoUrl"
          placeholder="PhotoUrl"
          type="text"
          styles="mt-4"
        />
        <SubmitButton
          label="Crear cuenta"
          onSubmit={onSubmit}
          styles={'mb-4'}
        />
      </form>
    </FormProvider>
  );
};

export default RegisterForm;

'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SubmitButton from '../form/SubmitButton';
import InputText from '../form/InputText';
import authApi from '@/app/services/auth/auth.service';
import { AccessDeniedError } from '@/app/services/common/http.errors';
import { use, useState } from 'react';
import { useRouter } from 'next/navigation';

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
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();
  const methods = useForm<FromData>({
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: FromData) => {
    setServerError(null);
    try {
      const loginResponse = await authApi.login(data.username, data.password);
      router.push('/');
    } catch (e) {
      if (e instanceof AccessDeniedError) {
        setServerError('Usuario no tiene acceso');
      } else {
        setServerError('Ha ocurrido un error. Intente de nuevo más tarde');
      }
    }
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
        />
        <SubmitButton
          label="Iniciar sesión"
          onSubmit={onSubmit}
          styles={'mb-4'}
        />
        {serverError && <div className="mt-4 text-red-600">{serverError}</div>}
      </form>
    </FormProvider>
  );
};

export default LoginForm;

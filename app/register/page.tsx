import RegisterForm from '../components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center w-full flex-col">
      <h2 className="mb-2">Crea tu cuenta en la red social</h2>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;

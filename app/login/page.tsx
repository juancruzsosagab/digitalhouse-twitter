import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center w-full flex-col">
      <h2 className="mb-2">Crea tu cuenta en la red social</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;

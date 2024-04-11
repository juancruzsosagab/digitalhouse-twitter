import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  return (
    <div className="flex items-center justify-center w-full flex-col">
      <h2 className="mb-2">Iniciar sesión</h2>
      <LoginForm />
    </div>
  );
};

export default Login;

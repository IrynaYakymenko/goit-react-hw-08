import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import LoginForm from "../../components/LoginForm/LoginForm";
import { selectIsLoading } from "../../redux/auth/selectors";

const Login = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div>
      <LoginForm />
      {isLoading && <Loader />}
    </div>
  );
};

export default Login;

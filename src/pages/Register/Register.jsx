import { useSelector } from "react-redux";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { selectIsLoading } from "../../redux/auth/selectors";
import Loader from "../../components/Loader/Loader";

const Registration = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div>
      <RegisterForm />
      {isLoading && <Loader />}
    </div>
  );
};

export default Registration;

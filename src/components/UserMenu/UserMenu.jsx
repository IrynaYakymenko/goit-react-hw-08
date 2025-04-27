import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";
import { logoutThunk } from "../../redux/auth/operations";
import toast from "react-hot-toast";
const UserMenu = () => {
  const user = useSelector(selectUserName);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await dispatch(logoutThunk()).unwrap();
      toast.success("Goodbye! See you!");
    } catch (error) {
      console.log(error);
      toast.error("Try again!");
    }
  };
  return (
    <div className={s.user}>
      <h3>Welcome, {user.name}</h3>
      <button type="button" className={s.logout} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;

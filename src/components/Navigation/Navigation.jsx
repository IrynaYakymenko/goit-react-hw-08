import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const addActive = ({ isActive }) => (isActive ? s.active : s.link);
  const isLoggenIn = useSelector(selectIsLoggedIn);
  return (
    <ul className={s.list}>
      <li>
        <NavLink className={addActive} to="/">
          Home
        </NavLink>
      </li>
      {isLoggenIn && (
        <li>
          <NavLink className={addActive} to="contacts">
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default Navigation;

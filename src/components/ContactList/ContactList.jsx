import { useSelector } from "react-redux";
import Contact from "./Contact";
import { selectFilteredContact } from "../../redux/contacts/selectors";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContact);

  return (
    <div>
      <ul>
        {contacts.map((item) => {
          return (
            <li key={item.id} className={s.item}>
              <Contact id={item.id} name={item.name} number={item.number} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;

import { useDispatch, useSelector } from "react-redux";
import { selectIsError, selectIsLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <section>
      <h2>Phonebook</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <Loader />}
      {isError && <h2>Error</h2>}
    </section>
  );
};

export default Contacts;

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import * as Yup from "yup";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, options) => {
    try {
      const data = await dispatch(loginThunk(values)).unwrap();
      console.log(data);
      toast.success("Login success!");
    } catch (error) {
      console.log(error);
      toast.error("Try again!");
    }
    options.resetForm();
  };

  const validationLoginSchema = Yup.object({
    email: Yup.string()
      .email("email is not valid")
      .min(6, "the email must contain min six letters")
      .required("email is required")
      .trim()
      .matches(
        /^[a-zA-Z0-9]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/,
        "email is not valid"
      ),
    password: Yup.string()
      .required("password is required")
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter"),
  });

  return (
    <div className="formWrapper">
      <Formik
        validationSchema={validationLoginSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <label>
            <span>Email:</span>
            <Field name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </label>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

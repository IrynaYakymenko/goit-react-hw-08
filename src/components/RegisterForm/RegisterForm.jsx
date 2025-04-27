import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import * as Yup from "yup";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async ({ name, email, password }, options) => {
    try {
      const data = await dispatch(
        registerThunk({ name, email, password })
      ).unwrap();
      console.log(data);
      toast.success("You registared successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Try again!");
    }
    options.resetForm();
  };

  const validationRegisterSchema = Yup.object({
    name: Yup.string()
      .min(2, "Too short")
      .max(10, "Too long")
      .required("This field is required"),
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
        validationSchema={validationRegisterSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <label>
            <span>Name:</span>
            <Field name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </label>
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
          <button type="submit">Registration</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;

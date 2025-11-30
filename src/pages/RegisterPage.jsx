import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function RegisterPage() {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    username: Yup.string().required(),

    email: Yup.string().required().email(),

    password: Yup.string()
      .required()
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must be at most 20 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[0-9]/, "Must contain at least one number")
      .matches(/[^A-Za-z0-9]/, "Must contain at least one special character"),
  });

  const handleSubmit = (values) => {
    const url = "http://82.112.241.233:1993/api/auth/local/register";
    axios
      .post(url, values)
      .then((res) => {
        let token = res.data.jwt;
        console.log(res.data.jwt);
        sessionStorage.setItem("token", token);
        toast.success("Register Success");
        navigate("/login");
      })
      .catch((rej) => toast.error(rej.response.data.error.message));
  };

  useEffect(() => {
    let token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    token && navigate("/login");
  }, []);

  return (
    <div className="w-full h-dvh flex items-center justify-center bg-gray-800 text-white">
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
      >
        <Form className="bg-gray-800 w-[400px] p-3 shadow rounded-2xl border flex flex-col gap-3">
          <h1>Welcome, Please Register</h1>
          <Field
            className="w-full input"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <ErrorMessage
            className="text-red-500"
            component={"p"}
            name="username"
          />
          <Field
            className="w-full input"
            name="email"
            type="text"
            placeholder="Enter your email"
          />
          <ErrorMessage className="text-red-500" component={"p"} name="email" />
          <Field
            className="w-full input"
            name="password"
            type="text"
            placeholder="Enter your password"
          />
          <ErrorMessage
            className="text-red-500"
            component={"p"}
            name="password"
          />
          <button type="submit" className="btn btn-success">
            Register
          </button>
          <Link to={"/login"}>Already have account ? Please Login</Link>
        </Form>
      </Formik>
    </div>
  );
}

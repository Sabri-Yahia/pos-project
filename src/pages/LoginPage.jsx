import axios from "axios";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function LoginPage() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  });

  const handleSubmit = (values) => {
    const url = "http://82.112.241.233:1993/api/auth/local";
    const userData = {
      identifier: values.email,
      password: values.password,
    };
    axios
      .post(url, userData)
      .then((res) => {
        let token = res.data.jwt;
        values.isChecked
          ? localStorage.setItem("token", token)
          : sessionStorage.setItem("token", token);

        toast.success("Login Success");
        navigate("/");
      })
      .catch((rej) => {
        const errorMessage =
          rej.response?.data?.error?.message ||
          rej.message ||
          "Somthing went wrong";
        toast.error(errorMessage);
      });
  };

  useEffect(() => {
    let token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    token && navigate("/");
  }, []);

  return (
    <div className="w-full h-dvh flex items-center justify-center bg-gray-800 text-white">
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ email: "", password: "", isChecked: false }}
        validationSchema={validationSchema}
      >
        <Form className="bg-gray-800 w-[400px] p-3 shadow rounded-2xl border flex flex-col gap-3">
          <h1>Welcome, Please Login</h1>
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
            type="password"
            placeholder="Enter your password"
          />
          <ErrorMessage
            className="text-red-500"
            component={"p"}
            name="password"
          />
          <label className="flex gap-3">
            <Field
              name="isChecked"
              type="checkbox"
              className="checkbox checkbox-primary"
            />
            Remember Me
          </label>
          <button type="submit" className="btn btn-success">
            Login
          </button>
          <Link to={"/register"}>Don't have account ? Create New</Link>
        </Form>
      </Formik>
    </div>
  );
}

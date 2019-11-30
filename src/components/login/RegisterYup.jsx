import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import "./login.css";
import loginImg from "../../login.jpg";



function LoginForm({ values, errors, touched, isSubmitting }) {
  return (
  

    <div className="base-container">
      
     <div className="header">Register</div>
        <img src ={loginImg} alt="construction"/>
      
    
    <Form>
  
    
          <div className="form">
      <div className="form-group">
      <label htmlFor="email">Email </label>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="Email" />
  

        <label htmlFor="password">Password </label>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="text" name="password" placeholder="Password" />

        <label htmlFor="bestfriend">Best Friend </label>
            {touched.bestfriend && errors.bestfriend && <p>{errors.bestfriend}</p>}
            <Field type="text" name="bestfriend" placeholder="Best Friend" />

        <label htmlFor="state">State</label> 
            <select id="state_select" >
                <option value="0">Select State</option>  
                <option value="1"> CA </option>
                <option value="2"> CO </option>
                <option value="3"> TX </option>
            </select>

      </div>
      </div>
      
      </Form>

      <div className="footer">
          <button type="button" className="btn">
            Submit
      {/* <button disabled={isSubmitting}>Submit</button>  */}
      </button>
        </div>

  
    </div>
    
  );
}

const Register = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || "",
      bestfriend: Text || "",
      state: Text || "",
     
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required"),
    bestfriend: Yup.string()
      .min(3, "Friend must be more than 3 characters" )
      .required("Best friend is required")
     
  }),
  
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.email === "alreadytaken@atb.dev") {
      setErrors({ email: "That email is already taken" });
    } else {
      axios
        .post("https://yourdatabaseurlgoeshere.com", values)
        .then(res => {
          console.log(res); // Data was created successfully and logs to console
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
    }
  }
})(LoginForm);

export default Register;
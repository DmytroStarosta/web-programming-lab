import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate, NavLink } from "react-router-dom";
import "../forms/Checkout_styles.css";
import ErrorComponent from "./ErrorComponent";

const Checkout = () => {
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters"),
    lastName: Yup.string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^\+?[0-9]{10,15}$/, "Invalid phone number"),
    address: Yup.string()
      .required("Address is required")
      .min(5, "Address must be at least 5 characters"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(false);
    resetForm();
    navigate("/success");
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ isValid, touched, errors, validateForm }) => (
          <Form className="checkout-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <Field
                  id="firstName"
                  name="firstName"
                  className={`form-input ${errors.firstName && touched.firstName ? "error-input" : ""
                    }`}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <Field
                  id="lastName"
                  name="lastName"
                  className={`form-input ${errors.lastName && touched.lastName ? "error-input" : ""
                    }`}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className={`form-input ${errors.email && touched.email ? "error-input" : ""
                    }`}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <Field
                  id="phone"
                  name="phone"
                  type="tel"
                  className={`form-input ${errors.phone && touched.phone ? "error-input" : ""
                    }`}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <Field
                id="address"
                name="address"
                className={`form-input ${errors.address && touched.address ? "error-input" : ""
                  }`}
              />
            </div>

            <ErrorComponent errors={errors} />

            <div className="cart__actions">
              <NavLink to={"/cart"}>
                <button type="button" className="cart__back">Go back</button>
              </NavLink>
              <button
                type="submit"
                className="cart__continue"
                onClick={() => validateForm()}
              >
                Continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Checkout;

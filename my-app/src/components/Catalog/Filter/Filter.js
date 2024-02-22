import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({});

const Filter = () => {
  return (
    <Formik
      initialValues={{
        make: "",
        price: "",
        mileage: "",
      }}
      validationSchema={schema}
      onSubmit={(values, action) => {
        console.log(values);
      }}
    >
      <Form>
        <label>Car brand</label>
        <Field name="make" placeholder="Enter the text" focus />

        <label>Price/ 1 hour</label>
        <Field name="price" placeholder="To $" />

        <label>Сar mileage / km</label>
        <Field name="mileage" />

        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default Filter;

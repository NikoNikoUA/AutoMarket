import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  make: Yup.string(),
  price: Yup.number(),
  mileage: Yup.number(),
});

const Filter = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        make: "all",
        price: "",
        mileage: "",
      }}
      validationSchema={schema}
      onSubmit={(values, action) => {
        onSubmit(values);
        console.log(values);
        action.resetForm();
      }}
    >
      <Form>
        <label htmlFor="make">Car brand</label>
        <Field name="make" as="select" placeholder="Enter the text">
          {/* <option>Enter the text</option>
          {carBrands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))} */}
          <option value="all">All</option>
          <option value="buick">Buick</option>
          <option value="volvo">Volvo</option>
          <option value="hummer">HUMMER</option>
          <option value="subary">Subaru</option>
          <option value="mitsubishi">Mitsubishi</option>
          <option value="nissan">Nissan</option>
          <option value="lincoln">Lincoln</option>
          <option value="gmc">GMC</option>
          <option value="hyundai">Hyundai</option>
          <option value="mini">MINI</option>
          <option value="bentley">Bentley</option>
          <option value="mercedes-benz">Mercedes-Benz</option>
          <option value="aston martin">Aston Martin</option>
          <option value="pontiac">Pontiac</option>
          <option value="lamborghini">Lamborghini</option>
          <option value="audi">Audi</option>
          <option value="bmw">BMW</option>
          <option value="chevrolet">Chevrolet</option>
          <option value="chrysler">Chrysler</option>
          <option value="kia">Kia</option>
          <option value="land rover">Land Rover</option>
        </Field>

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

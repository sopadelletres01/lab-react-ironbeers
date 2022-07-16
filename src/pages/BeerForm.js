import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Layout from "../components/Layout";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  tagline: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  firstBrewed: Yup.string().required("Required"),
  brewersTips: Yup.string().required("Required"),
  attenuationLevel: Yup.number("Must be a number").required("Required"),
  contributedBy: Yup.string().required("Required"),
});

export default function BeerForm() {
  const [form, setForm] = useState();
  useEffect(() => {
    if (!form) return;
    (async () => {
      console.log(form);
      try {
        const data = await fetch(
          "https://ih-beers-api2.herokuapp.com/beers/new",
          {
            method: "POST",
            body: form,
          }
        );
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [form]);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: "",
      tagline: "",
      description: "",
      firstBrewed: "",
      brewersTips: "",
      attenuationLevel: "",
      contributedBy: "",
    },
    validationSchema,
    onSubmit(values) {
      const {
        name,
        description,
        tagline,
        firstBrewed,
        brewersTips,
        attenuationLevel,
        contributedBy,
      } = values;
      setForm({
        name,
        description,
        tagline,
        first_brewed: firstBrewed,
        brewers_tips: brewersTips,
        attenuation_level: attenuationLevel,
        contributed_by: contributedBy,
      });
    },
  });

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <h1>Create a new Beer</h1>
        <div className="form">
          <label>Name</label>
          <input
            name="name"
            onChange={handleChange}
            value={values.name}
            placeholder="name"
          />
          {errors.name ? errors.name : null}
          <label>Tagline</label>
          <input
            name="tagline"
            onChange={handleChange}
            value={values.tagline}
            placeholder="Tagline"
          />
          {errors.tagline ? errors.tagline : null}

          <label>Description</label>

          <input
            name="description"
            onChange={handleChange}
            value={values.description}
            placeholder="Description"
          />
          {errors.description ? errors.description : null}
          <label>First Brewed</label>
          <input
            name="firstBrewed"
            onChange={handleChange}
            value={values.firstBrewed}
            placeholder="First Brewed"
          />
          {errors.firstBrewed ? errors.firstBrewed : null}
          <label>Brewers Tips</label>

          <input
            name="brewersTips"
            onChange={handleChange}
            value={values.brewersTips}
            placeholder="Brewers Tips"
          />
          {errors.brewersTips ? errors.brewersTips : null}
          <label>Attenuation Level</label>

          <input
            type="number"
            name="attenuationLevel"
            onChange={handleChange}
            value={values.attenuationLevel}
            placeholder="Attenuation Level"
          />
          {errors.attenuationLevel ? errors.attenuationLevel : null}
          <label>Contributed By</label>

          <input
            name="contributedBy"
            onChange={handleChange}
            value={values.contributedBy}
            placeholder="Contributor"
          />
          {errors.contributedBy ? errors.contributedBy : null}
          <button type="submit">Add New</button>
        </div>
      </form>
    </Layout>
  );
}

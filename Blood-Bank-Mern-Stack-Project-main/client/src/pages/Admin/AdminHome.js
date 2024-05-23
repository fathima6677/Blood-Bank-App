import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>The average human body contains about five liters of blood, which is made of several cellular and non-cellular components such as Red blood cell, Platelet, and Plasma.

Each type of component has its unique properties and can be used for different indications. The donated blood is separated into these components by the blood centre and one donated unit can save upto four lives depending on the number of components separated from your blood.

What is it?
Blood Collected straight from the donor into a blood bag and mixed with an anticoagulant is called as whole blood. This collected whole blood is then centrifuged and red cell, platelets and plasma are separated. The separated Red cells are mixed with a preservative to be called as packed red blood cells.

Who can donate?
You need to be 18-65 years old, weight 45kg or more and be fit and healthy.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;

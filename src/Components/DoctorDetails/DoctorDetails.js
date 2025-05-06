/*import React, { useEffect, useState } from "react";
import { db } from "../../firebase"; // Import your Realtime Database instance
import { ref, onValue } from "firebase/database";

function DoctorDetails() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dbRef = ref(db, "doctors");

    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const doctorsArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setDoctors(doctorsArray);
        } else {
          console.warn("No data available");
          setDoctors([]);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Clean up listener on component unmount
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Doctor Details</h1>
      {doctors.length > 0 ? (
        doctors.map((doctor) => (
          <div key={doctor.id}>
            <h3>{doctor.name}</h3>
            <p>Speciality: {doctor.speciality}</p>
            <p>Experience: {doctor.experience} years</p>
          </div>
        ))
      ) : (
        <p>No doctors found.</p>
      )}
    </div>
  );
}

export default DoctorDetails;*/
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom"; 

function DoctorDetails({ DoctorDet }) {
  if (!DoctorDet) {
    return <p>No details available for the selected doctor.</p>;
  }

  const { name, specialisation, experience, address, timings, imageUri, description } = DoctorDet;

  return (
    <DetailsStyled>
      <div className="doctor-card">
        <div className="image-section">
          <img
            src={imageUri || "https://via.placeholder.com/150"} // Fallback image
            alt={`${name}'s Profile`}
          />
        </div>
        <div className="details-section">
          <h2>{name}</h2>
          <p><strong>Specialisation:</strong> {specialisation}</p>
          <p><strong>Experience:</strong> {experience} years</p>
          <p><strong>Address:</strong> {address || "Not provided"}</p>
          <p><strong>Timings:</strong> {timings || "Not provided"}</p>
          {description && <p><strong>About:</strong> {description}</p>}
        </div>
      </div>
      /*<button
        className="back-button"
        onClick={() => window.history.back()} // Navigate back to ConsultDoctor
      >
        Back to List
      </button>*/
	  <button
        className="back-button"
        onClick={() => window.history.goBack()}  // Use history.goBack() to go back to the previous page
      >
        Back to List
      </button>
    </DetailsStyled>
  );
}

const DetailsStyled = styled.div`
  .doctor-card {
    display: flex;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    border-radius: 10px;
  }

  .image-section img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
  }

  .details-section {
    flex-grow: 1;
  }

  .back-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4b90ff;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
`;

export default DoctorDetails;

/*import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaStar } from "react-icons/fa";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import DoctorDetails from "../DoctorDetails/DoctorDetails";
import { FilterContext } from "../../context/FilterContext";

function ConsultDoctor() {
  const { doctorSpec, setDoctorSpec } = useContext(FilterContext);
  const [doctors, setDoctors] = useState([]);
  const [filteredItems, setFilteredItems] = useState(doctors);
  const [selectedDoctor, setSelectedDoctor] = useState(doctorSpec);
  const [showDoctorDetails, setShowDoctorDetails] = useState(false);
  const [DoctorDet, setDoctorDet] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "doctors"));
        const fetchedData = [];
        querySnapshot.forEach((doc) => {
          fetchedData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setDoctors(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const notify = (item) => {
    setDoctorDet(item); // Set the selected doctor data
    setShowDoctorDetails(true); // Show DoctorDetails component
  };

  const filters = [
    "Dermatologist",
    "Endocrinologist",
    "Gastroenterologist",
    "Rheumatologist",
    "Neurologist",
    "Pulmonologist",
    "Cardiologist",
  ];

  const handleFilterChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const filterItems = () => {
    if (selectedDoctor) {
      setFilteredItems(
        doctors.filter((doctor) => doctor.specialisation === selectedDoctor)
      );
    } else {
      setFilteredItems(doctors);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedDoctor, doctors]);

  const openExternalService = () => {
    window.open("https://www.practo.com/", "_blank");
  };

  return (
    <>
      {!showDoctorDetails && (
        <DashboardStyled>
          <div className="heading">
            <h2>Consult Doctor</h2>
          </div>
          <InnerLayout>
            <div>
              <select
                value={selectedDoctor}
                onChange={handleFilterChange}
                className="py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">Select a filter</option>
                {filters.map((filter, idx) => (
                  <option key={`filter-${idx}`} value={filter}>
                    {filter}
                  </option>
                ))}
              </select>

              <div className="flex flex-col space-y-4 mt-4 w-full">
                {filteredItems.map((item, idx) => {
                  const randomRating = Math.floor(Math.random() * 5) + 1;
                  return (
                    <div key={`items-${idx}`} className="w-full lg:flex">
                      <div
                        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-lg lg:rounded-t-none lg:rounded-lg text-center overflow-hidden"
                        style={{
                          backgroundImage: `url(${item.imageUri})`,
                        }}
                      ></div>

                      <div className="border-r  border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
                        <div className="mb-8 flex">
                          <div className="ml-4">
                            <p className="text-gray-900 font-bold text-xl mb-2">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-600 flex items-center">
                              {item.specialisation}
                            </p>
                            <p className="text-gray-700 text-base">
                              {item.experience}
                            </p>

                            <div className="flex items-center mt-2">
                              {[...Array(randomRating)].map((_, i) => (
                                <FaStar
                                  key={`star-${i}`}
                                  className="text-yellow-500"
                                />
                              ))}
                              {[...Array(5 - randomRating)].map((_, i) => (
                                <FaStar
                                  key={`star-empty-${i}`}
                                  className="text-gray-400"
                                />
                              ))}
                            </div>
                            <div className="flex items-center mt-4">
                              <div className="text-sm">
                                <p className="text-gray-900 leading-none">
                                  {item.address}
                                </p>
                                <p className="text-gray-600">{item.timings}</p>
                                <button
                                  onClick={() => notify(item)}
                                  className="bg-purple-500 mt-2 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
                                >
                                  See All Timings
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={openExternalService}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4"
              >
                Explore More Doctors on Practo
              </button>
            </div>
            <ToastContainer />
          </InnerLayout>
        </DashboardStyled>
      )}
      {showDoctorDetails && <DoctorDetails DoctorDet={DoctorDet} />}
    </>
  );
}

const DashboardStyled = styled.div`
  .heading h2 {
    font-size: 29px;
    color: darkviolet;
    font-weight: 605;
    margin: 25px -17px;
    padding: 1rem 1.5rem;
    width: 100%;
  }
`;

export default ConsultDoctor;*/


//works
/*import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaStar } from "react-icons/fa";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { FilterContext } from "../../context/FilterContext";

function ConsultDoctor() {
  const { doctorSpec, setDoctorSpec } = useContext(FilterContext);
  const [doctors, setDoctors] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(doctorSpec);
  const [showDoctorDetails, setShowDoctorDetails] = useState(null); // Modify to store selected doctor for details

  // Fetch doctor data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "doctors"));
        const fetchedData = [];
        querySnapshot.forEach((doc) => {
          fetchedData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setDoctors(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Function to filter doctors based on the selected speciality
  useEffect(() => {
    const filterDoctors = () => {
      if (selectedDoctor) {
        // Filter doctors by selected speciality
        setFilteredItems(
          doctors.filter((doctor) => doctor.speciality === selectedDoctor)
        );
      } else {
        // If no speciality is selected, show all doctors
        setFilteredItems(doctors);
      }
    };

    filterDoctors();
  }, [selectedDoctor, doctors]);

  const notify = (item) => {
    setShowDoctorDetails(item); // Set the selected doctor to show details
  };

  const filters = [
    "Dermatologist",
    "Endocrinologist",
    "Gastroenterologist",
    "Rheumatologist",
    "Neurologist",
    "Pulmonologist",
    "Cardiologist",
  ];

  const handleFilterChange = (event) => {
    setSelectedDoctor(event.target.value); // Update selected speciality
  };

  const openExternalService = () => {
    window.open("https://www.practo.com/", "_blank");
  };

  return (
    <>
      <DashboardStyled>
        <div className="heading">
          <h2>Consult Doctor</h2>
        </div>
        <InnerLayout>
          <div>
            <select
              value={selectedDoctor}
              onChange={handleFilterChange}
              className="py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="">Select a filter</option>
              {filters.map((filter, idx) => (
                <option key={`filter-${idx}`} value={filter}>
                  {filter}
                </option>
              ))}
            </select>

            <div className="flex flex-col space-y-4 mt-4 w-full">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => {
                  const randomRating = Math.floor(Math.random() * 5) + 1;
                  return (
                    <div key={`items-${idx}`} className="w-full lg:flex">
                      <div
                        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-lg lg:rounded-t-none lg:rounded-lg text-center overflow-hidden"
                        style={{
                          backgroundImage: `url(${item.imageUri})`,
                        }}
                      ></div>

                      <div className="border-r  border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
                        <div className="mb-8 flex">
                          <div className="ml-4">
                            <p className="text-gray-900 font-bold text-xl mb-2">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-600 flex items-center">
                              {item.speciality}
                            </p>
                            <p className="text-gray-700 text-base">
                              {item.experience}
                            </p>

                            <div className="flex items-center mt-2">
                              {[...Array(randomRating)].map((_, i) => (
                                <FaStar
                                  key={`star-${i}`}
                                  className="text-yellow-500"
                                />
                              ))}
                              {[...Array(5 - randomRating)].map((_, i) => (
                                <FaStar
                                  key={`star-empty-${i}`}
                                  className="text-gray-400"
                                />
                              ))}
                            </div>
                            <div className="flex items-center mt-4">
                              <div className="text-sm">
                                <p className="text-gray-900 leading-none">
                                  {item.address}
                                </p>
                                <p className="text-gray-600">{item.timings}</p>
                                <button
                                  onClick={() => notify(item)} // Set the selected doctor details to show
                                  className="bg-purple-500 mt-2 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
                                >
                                  Learn More
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No doctors found for the selected speciality.</p>
              )}
            </div>
            <button
              onClick={openExternalService}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4"
            >
              Explore More Doctors on Practo
            </button>
          </div>

          {showDoctorDetails && (
            <div className="doctor-details mt-8">
              <h3>Doctor Details</h3>
              <div>
                <p><strong>Name:</strong> {showDoctorDetails.name}</p>
                <p><strong>Specialisation:</strong> {showDoctorDetails.speciality}</p>
                <p><strong>Experience:</strong> {showDoctorDetails.experience}</p>
                <p><strong>Timings:</strong> {showDoctorDetails.timings}</p>
                <p><strong>Address:</strong> {showDoctorDetails.address}</p>
                <p><strong>Description:</strong> {showDoctorDetails.description}</p>
                //You can add more fields as needed 
                <button
                  onClick={() => setShowDoctorDetails(null)} // Hide the details when back is clicked
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                >
                  Back to List
                </button>
              </div>
            </div>
          )}
        </InnerLayout>
        <ToastContainer />
      </DashboardStyled>
    </>
  );
}

const DashboardStyled = styled.div`
  .heading h2 {
    font-size: 29px;
    color: darkviolet;
    font-weight: 605;
    margin: 25px -17px;
    padding: 1rem 1.5rem;
    width: 100%;
  }

  .doctor-details {
    background: #f8f8f8;
    padding: 20px;
    border-radius: 8px;
  }
`;

export default ConsultDoctor;*/

//NICE BELOW


import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaStar } from "react-icons/fa";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { FilterContext } from "../../context/FilterContext";
import emailjs from "emailjs-com";

function ConsultDoctor() {
  const { doctorSpec, setDoctorSpec } = useContext(FilterContext);
  const [doctors, setDoctors] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(doctorSpec);
  const [expandedDoctor, setExpandedDoctor] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userContact, setUserContact] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "doctors"));
        const fetchedData = [];
        querySnapshot.forEach((doc) => {
          fetchedData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setDoctors(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterDoctors = () => {
      if (selectedDoctor) {
        setFilteredItems(
          doctors.filter((doctor) => doctor.speciality === selectedDoctor)
        );
      } else {
        setFilteredItems(doctors);
      }
    };
    filterDoctors();
  }, [selectedDoctor, doctors]);

  const notify = (doctor) => {
    setExpandedDoctor(expandedDoctor === doctor.id ? null : doctor.id);
    setAvailableSlots(["10:00 AM", "11:30 AM", "2:00 PM", "4:00 PM"]);
    setShowBookingForm(false);
  };

  const sendEmail = (slot) => {
    if (!userEmail || !slot) {
      toast.error("Please enter your email and select a slot!");
      return;
    }

    const templateParams = {
      name: userName,        // User's full name   // User's email
      contact: userContact,
      to_email: userEmail,
      subject: "Appointment Confirmation",
      message: `Your slot has been booked successfully for ${slot}.`,
    };

    emailjs
      .send("service_3wp7bb2", "template_i3txkjj", templateParams, "IPx04lV_SlehEyTFp")
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        toast.success("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        toast.error("Failed to send email.");
      });
  };

  const handleBooking = () => {
    if (selectedSlot) {
      toast.success(`Appointment booked for ${selectedSlot}`);
      sendEmail(selectedSlot);
      setShowBookingForm(false);
    } else {
      toast.error("Please select a slot");
    }
  };

  return (
    <>
      <DashboardStyled>
        <div className="heading">
          <h2>Consult Doctor</h2>
        </div>
        <InnerLayout>
          <div>
            <select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className="filter-select"
            >
              <option value="">Select a filter</option>
              {["Dermatologist",
    "Endocrinologist",
    "Gastroenterologist",
    "Rheumatologist",
    "Neurologist",
    "Pulmonologist",
    "Cardiologist",].map(
                (filter, idx) => (
                  <option key={`filter-${idx}`} value={filter}>
                    {filter}
                  </option>
                )
              )}
            </select>

            <div className="doctor-list">
              {filteredItems.length > 0 ? (
                filteredItems.map((doctor, idx) => {
                  const randomRating = Math.floor(Math.random() * 5) + 1;
                  return (
                    <div key={`items-${idx}`}>
                      <div className="doctor-card">
                        <div
                          className="doctor-image"
                          style={{ backgroundImage: `url(${doctor.imageUri})` }}
                        ></div>
                        <div className="doctor-details">
                          <h3>{doctor.name}</h3>
                          <p>{doctor.speciality}</p>
                          <p>{doctor.experience}</p>
                          <div className="stars">
                            {[...Array(randomRating)].map((_, i) => (
                              <FaStar key={i} className="star-filled" />
                            ))}
                            {[...Array(5 - randomRating)].map((_, i) => (
                              <FaStar key={`empty-${i}`} className="star-empty" />
                            ))}
                          </div>
                          <div className="buttons">
                            <button
                              onClick={() => notify(doctor)}
                              className="learn-more-btn"
                            >
                              {expandedDoctor === doctor.id ? "Hide Details" : "Learn More"}
                            </button>
                            <button
                              onClick={() => {setExpandedDoctor(doctor.id);
						setAvailableSlots(["10:00 AM", "11:30 AM", "2:00 PM", "4:00 PM"]);
						setShowBookingForm(true);}}
                              className="book-now-btn"
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>

                      {expandedDoctor === doctor.id && (
                        <div className="doctor-info">
                          <h3>Doctor Details</h3>
                          <p>
                            <strong>Name:</strong> {doctor.name}
                          </p>
                          <p>
                            <strong>Specialisation:</strong> {doctor.speciality}
                          </p>
                          <p>
                            <strong>Experience:</strong> {doctor.experience}
                          </p>
                          

                          {showBookingForm && (
                            <div className="booking-form">
                              <h3>Select an Available Slot</h3>
                              <select onChange={(e) => setSelectedSlot(e.target.value)}>
                                <option value="">Select a Slot</option>
                                {availableSlots.map((slot, idx) => (
                                  <option key={idx} value={slot}>
                                    {slot}
                                  </option>
                                ))}
                              </select>
			      <input
 				 type="email"
 				 placeholder="Enter your full name"
  				 value={userName}
  				 onChange={(e) => setUserName(e.target.value)}
			      />
                              <input
                                type="email"
                                placeholder="Enter your email"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                              />
				<input
				 type="email"
  				 placeholder="Enter your contact number"
  				 value={userContact}
  				 onChange={(e) => setUserContact(e.target.value.replace(/[^0-9]/g, ""))}
				 maxLength="10"
			      />


                              <button onClick={handleBooking}>Confirm Booking</button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <p>No doctors found for the selected speciality.</p>
              )}
            </div>
          </div>
        </InnerLayout>
        <ToastContainer />
      </DashboardStyled>
    </>
  );
}

const DashboardStyled = styled.div`
  padding: 20px;
  background-color: #f5f5f5;

  .heading {
    text-align: center;
    margin-bottom: 20px;
    h2 {
      font-size: 32px;
      color: darkviolet;
      font-weight: 600;
    }
  }

  .filter-select {
    width: 100%;
    max-width: 400px;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin: 0 auto 20px auto;
    display: block;
  }

  .doctor-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .doctor-card {
    display: flex;
    background: #fff;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    &:hover {
      transform: translateY(-2px);
    }
  }

  .doctor-image {
    width: 120px;
    height: 120px;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .doctor-details {
    margin-left: 20px;
    flex: 1;
    h3 {
      margin: 0 0 10px;
      font-size: 22px;
      color: #333;
    }
    p {
      margin: 5px 0;
      font-size: 16px;
      color: #555;
    }
    .stars {
	  display: flex;
	  align-items: center;
      margin-top: 10px;
      svg {
        margin-right: 3px;
      }
    }
    .buttons {
      margin-top: 15px;
      display: flex;
      gap: 10px;
      button {
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      .learn-more-btn {
        background-color: #6a1b9a;
        color: #fff;
        &:hover {
          background-color: #4a148c;
        }
      }
      .book-now-btn {
        background-color: #1976d2;
        color: #fff;
        &:hover {
          background-color: #1565c0;
        }
      }
    }
  }

  .doctor-info {
    background: #f0f0f0;
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
    margin-top: 10px;
    h3 {
      margin-top: 0;
      font-size: 20px;
      color: #333;
    }
    p {
      margin: 5px 0;
      font-size: 16px;
      color: #555;
    }
  }

  .booking-form {
    background: #fff;
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 8px;
    margin-top: 15px;
    h3 {
      margin: 0 0 10px;
      font-size: 18px;
      color: #333;
    }
    select {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }
    input[type="email"] {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }
    button {
      width: 100%;
      padding: 12px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      background-color: #43a047;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s;
      &:hover {
        background-color: #388e3c;
      }
    }
  }
`;

export default ConsultDoctor;

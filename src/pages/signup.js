import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    contactNumber: "",
    email: "",
    address: "",
    medicalHistory: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
   <div className="container my-5">
     <div className="row justify-content-center">
       <div className="col-md-8 col-lg-6">
         <div className="p-4 bg-light shadow-lg rounded-lg border">
           <h2 className="text-center mb-4" style={{ fontWeight: "700", color: "#00ACC1", fontSize: "32px", letterSpacing: "2px" }}>
             Create User ID
           </h2>
           {submitted ? (
             <div className="alert alert-success" role="alert">
               User ID created successfully! Here is the submitted data:
               <ul className="mt-3">
                 <li><strong>Full Name:</strong> {formData.fullName}</li>
                 <li><strong>Date of Birth:</strong> {formData.dateOfBirth}</li>
                 <li><strong>Gender:</strong> {formData.gender}</li>
                 <li><strong>Contact Number:</strong> {formData.contactNumber}</li>
                 <li><strong>Email:</strong> {formData.email}</li>
                 <li><strong>Address:</strong> {formData.address}</li>
                 <li><strong>Medical History:</strong> {formData.medicalHistory}</li>
               </ul>
             </div>
           ) : (
             <form onSubmit={handleSubmit}>
               {/* Full Name */}
               <div className="mb-4">
                 <label htmlFor="fullName" className="form-label">Full Name</label>
                 <input
                   type="text"
                   className="form-control"
                   id="fullName"
                   name="fullName"
                   value={formData.fullName}
                   onChange={handleChange}
                   placeholder="Enter full name"
                   required
                 />
               </div>

               {/* Date of Birth */}
               <div className="mb-4">
                 <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                 <input
                   type="date"
                   className="form-control"
                   id="dateOfBirth"
                   name="dateOfBirth"
                   value={formData.dateOfBirth}
                   onChange={handleChange}
                   required
                 />
               </div>

               {/* Gender */}
               <div className="mb-4">
                  <label className="form-label">Gender</label>
                  <div className="d-flex justify-content-start align-items-center">
                     <div className="form-check form-check-inline p-3">
                        <input
                        type="radio"
                        className="form-check-input"
                        id="genderMale"
                        name="gender"
                        value="Male"
                        onChange={handleChange}
                        required
                        />
                        <label className="form-check-label" htmlFor="genderMale">Male</label>
                     </div>
                     <div className="form-check form-check-inline">
                        <input
                           type="radio"
                           className="form-check-input"
                           id="genderFemale"
                           name="gender"
                           value="Female"
                           onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="genderFemale">Female</label>
                     </div>
                  </div>
               </div>

               {/* Contact Number */}
               <div className="mb-4">
                 <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                 <input
                   type="tel"
                   className="form-control"
                   id="contactNumber"
                   name="contactNumber"
                   value={formData.contactNumber}
                   onChange={handleChange}
                   placeholder="Enter 10-digit contact number"
                   pattern="^\d{10}$"
                   required
                 />
               </div>

               {/* Email */}
               <div className="mb-4">
                 <label htmlFor="email" className="form-label">Email</label>
                 <input
                   type="email"
                   className="form-control"
                   id="email"
                   name="email"
                   value={formData.email}
                   onChange={handleChange}
                   placeholder="Enter email address"
                   required
                 />
               </div>

               {/* Address */}
               <div className="mb-4">
                 <label htmlFor="address" className="form-label">Address</label>
                 <textarea
                   className="form-control"
                   id="address"
                   name="address"
                   rows="3"
                   value={formData.address}
                   onChange={handleChange}
                   placeholder="Enter your address"
                   required
                 ></textarea>
               </div>

               {/* Medical History */}
               <div className="mb-4">
                 <label htmlFor="medicalHistory" className="form-label">Medical History</label>
                 <textarea
                   className="form-control"
                   id="medicalHistory"
                   name="medicalHistory"
                   rows="4"
                   value={formData.medicalHistory}
                   onChange={handleChange}
                   placeholder="Describe your medical history"
                   required
                 ></textarea>
               </div>

               {/* Submit Button */}
               <div className="d-grid">
                 <button type="submit" className="btn" style={{ backgroundColor: "#00ACC1", color: "white", padding: "12px 20px", fontSize: "16px" }}>
                   Submit
                 </button>
               </div>
             </form>
           )}
         </div>
       </div>
     </div>
   </div>
 );
};



export default Signup
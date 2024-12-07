import React, { useState } from "react";

const SymptomChecker = () => {
  const [formData, setFormData] = useState({
    age: "",
    symptoms: "",
    duration: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const evaluation = evaluateSymptoms(formData);
    setResult(evaluation);
  };

  const evaluateSymptoms = ({ age, symptoms, duration }) => {
    const durationDays = parseInt(duration);
    let advice = "Based on the information, here are the results:";

    // Check for serious symptoms
    const seriousSymptoms = ["chest pain", "shortness of breath", "fainting", "severe headache"];
    const isSerious = seriousSymptoms.some((seriousSymptom) =>
      symptoms.toLowerCase().includes(seriousSymptom)
    );

    if (isSerious) {
      advice += "\n⚠️ Serious symptoms detected. Please consult a doctor immediately.";
    } else if (durationDays > 7) {
      advice += "\nSymptoms lasting more than a week may indicate an underlying condition. It's recommended to consult a doctor.";
    } else if (age < 12 || age > 60) {
      advice += "\nSince the patient is in a sensitive age group (child or senior), consulting a doctor is advisable.";
    } else {
      advice += "\nNo serious symptoms detected. Please rest, stay hydrated, and monitor your condition.";
    }

    return advice;
  };

  return (
    <div
      className="container py-5"
      style={{
        background: "linear-gradient(135deg, #0288D1 0%, #00796B 100%)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="col-md-8 col-lg-6">
        <div
          className="card shadow-lg border-0"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <div
            className="card-header text-center"
            style={{
              background: "linear-gradient(135deg, #0288D1 0%, #00796B 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
              fontSize: "1.8rem",
              padding: "20px",
            }}
          >
            Symptom Checker
          </div>
          <div className="card-body p-4">
            <form onSubmit={handleSubmit}>
              {/* Age */}
              <div className="mb-4">
                <label htmlFor="age" className="form-label fw-bold">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter age"
                  min="1"
                  required
                  style={{
                    border: "2px solid #00796B",
                    borderRadius: "10px",
                  }}
                />
              </div>

              {/* Symptoms */}
              <div className="mb-4">
                <label htmlFor="symptoms" className="form-label fw-bold">
                  Symptoms
                </label>
                <textarea
                  className="form-control"
                  id="symptoms"
                  name="symptoms"
                  value={formData.symptoms}
                  onChange={handleChange}
                  rows="3"
                  placeholder="List symptoms (e.g., fever, cough, chest pain)"
                  required
                  style={{
                    border: "2px solid #00796B",
                    borderRadius: "10px",
                  }}
                ></textarea>
              </div>

              {/* Duration */}
              <div className="mb-4">
                <label htmlFor="duration" className="form-label fw-bold">
                  Duration of Symptoms (in days)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="Enter duration in days"
                  min="1"
                  required
                  style={{
                    border: "2px solid #00796B",
                    borderRadius: "10px",
                  }}
                />
              </div>

              {/* Submit Button */}
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn"
                  style={{
                    background: "linear-gradient(135deg, #0288D1 0%, #00796B 100%)",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "10px",
                  }}
                >
                  Check Symptoms
                </button>
              </div>
            </form>

            {/* Result */}
            {result && (
              <div
                className="mt-4 alert alert-success"
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                <h4 className="text-center">Evaluation Result</h4>
                <p>{result}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;

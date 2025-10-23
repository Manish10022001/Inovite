import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function Internship() {
  // Formik form setup with validation schema using Yup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      college: "",
      year: "",
      course: "",
      resume: "",
      skills: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      college: Yup.string().required("College Name is required"),
      year: Yup.number()
        .required("Completion Year is required")
        .min(2022, "Completion year must be after 2022")
        .max(2100, "Invalid year"),
      course: Yup.string().required("Course Name is required"),
      resume: Yup.string()
        .url("Invalid URL")
        .required("Resume link is required"),
      skills: Yup.string().required("Skills are required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      alert("Application submitted successfully!");
    },
  });

  return (
    <div className="stg-container">
      <section className="backlight-bottom">
        {/* Section Title */}
        <div className="stg-row bringer-section-title">
          <div className="stg-col-8 stg-offset-2">
            <div className="align-center">
              <h2 data-appear="fade-up" data-unload="fade-up">
                Apply for Internship
              </h2>
              <p
                className="bringer-large-text"
                data-appear="fade-up"
                data-delay="100"
                data-unload="fade-up"
              >
                Kickstart your career with real-world experience! Fill in the
                details below to apply for our internship program.
              </p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div
          className="bringer-grid-2cols bringer-tp-grid-1col"
          data-appear="fade-up"
          data-delay="200"
          data-unload="fade-up"
        >
          <div className="bringer-block" style={{ gridColumn: "span 2" }}>
            <form onSubmit={formik.handleSubmit}>
              <div className="row g-3">
                {/* Full Name */}
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control ${
                      formik.touched.name && formik.errors.name
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Enter your full name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="invalid-feedback">{formik.errors.name}</div>
                  ) : null}
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${
                      formik.touched.email && formik.errors.email
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="you@example.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="invalid-feedback">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>

                {/* College Name */}
                <div className="col-md-6">
                  <label htmlFor="college" className="form-label">
                    College Name
                  </label>
                  <input
                    type="text"
                    id="college"
                    name="college"
                    className={`form-control ${
                      formik.touched.college && formik.errors.college
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Your college name"
                    value={formik.values.college}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                  {formik.touched.college && formik.errors.college ? (
                    <div className="invalid-feedback">
                      {formik.errors.college}
                    </div>
                  ) : null}
                </div>

                {/* Completion Year */}
                <div className="col-md-6">
                  <label htmlFor="year" className="form-label">
                    Completion Year
                  </label>
                  <input
                    type="number"
                    id="year"
                    name="year"
                    className={`form-control ${
                      formik.touched.year && formik.errors.year
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="e.g. 2026"
                    value={formik.values.year}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                  {formik.touched.year && formik.errors.year ? (
                    <div className="invalid-feedback">{formik.errors.year}</div>
                  ) : null}
                </div>

                {/* Course Name */}
                <div className="col-md-6">
                  <label htmlFor="course" className="form-label">
                    Course Name
                  </label>
                  <input
                    type="text"
                    id="course"
                    name="course"
                    className={`form-control ${
                      formik.touched.course && formik.errors.course
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="e.g. B.Tech in CSE"
                    value={formik.values.course}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                  {formik.touched.course && formik.errors.course ? (
                    <div className="invalid-feedback">
                      {formik.errors.course}
                    </div>
                  ) : null}
                </div>

                {/* Resume Link */}
                <div className="col-md-6">
                  <label htmlFor="resume" className="form-label">
                    Resume Link
                  </label>
                  <input
                    type="url"
                    id="resume"
                    name="resume"
                    className={`form-control ${
                      formik.touched.resume && formik.errors.resume
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Paste Google Drive or other link"
                    value={formik.values.resume}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                  {formik.touched.resume && formik.errors.resume ? (
                    <div className="invalid-feedback">
                      {formik.errors.resume}
                    </div>
                  ) : null}
                </div>

                {/* Skills */}
                <div className="col-12">
                  <label htmlFor="skills" className="form-label">
                    Skills (separate with commas)
                  </label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    className={`form-control ${
                      formik.touched.skills && formik.errors.skills
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Python, Java, HTML, CSS"
                    value={formik.values.skills}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                  {formik.touched.skills && formik.errors.skills ? (
                    <div className="invalid-feedback">
                      {formik.errors.skills}
                    </div>
                  ) : null}
                </div>

                {/* Submit Button */}
                <div className="col-12 text-center ">
                  <button
                    type="submit"
                    className="btn btn-primary px-4 py-2 mt-4"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

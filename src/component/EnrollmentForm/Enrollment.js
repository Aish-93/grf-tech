import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Enrollment.css';

const Enrollment = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
    course: '',
    studentStatus: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string()
      .matches(/^\d+$/, 'Phone number must be numeric')
      .required('Phone Number is required')
      .min(10, 'too short')
      .max(10, 'too long'),
    dateOfBirth: Yup.date()
      .max(new Date(), 'Date of birth cannot be in the future')
      .required('Date of Birth is required'),
    gender: Yup.string().required('Gender is required'),
    course: Yup.string().required('Please select a course'),
    studentStatus: Yup.string().required('Please select a student status'),
  });

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    alert('Enrollment Successful!');
  };

  return (
    <div className='enrollment-form'>
      <h2 className='enrollment-form-heading text-center font-semibold'>
        Enrollment Form
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className='enrol-form-field  mx-auto'>
          <div className=' d-lg-flex justify-between'>
            {/* First Name */}
            <div className='enroll-field w-5/12'>
              <label>First Name</label>
              <Field name='firstName' type='text' />
              <ErrorMessage
                name='firstName'
                component='div'
                className='error'
              />
            </div>

            {/* Last Name */}
            <div className='enroll-field w-5/12'>
              <label>Last Name</label>
              <Field name='lastName' type='text' />
              <ErrorMessage name='lastName' component='div' className='error' />
            </div>
          </div>
          <div className='d-lg-flex justify-between'>
            {/* Email */}
            <div className='enroll-field w-5/12'>
              <label>Email</label>
              <Field name='email' type='email' />
              <ErrorMessage name='email' component='div' className='error' />
            </div>

            {/* Phone Number */}
            <div className='enroll-field w-5/12'>
              <label>Phone Number</label>
              <Field name='phoneNumber' type='text' />
              <ErrorMessage
                name='phoneNumber'
                component='div'
                className='error'
              />
            </div>
          </div>

          <div className='d-lg-flex justify-between'>
            {/* Date of Birth */}
            <div className='enroll-field w-5/12'>
              <label>Date of Birth</label>
              <Field name='dateOfBirth' type='date' />
              <ErrorMessage
                name='dateOfBirth'
                component='div'
                className='error'
              />
            </div>

            {/* Gender */}
            <div className='enroll-field w-5/12'>
              <label>Gender</label>
              <Field name='gender' as='select'>
                <option value=''>Select Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </Field>
              <ErrorMessage name='gender' component='div' className='error' />
            </div>
          </div>
          <div className='d-lg-flex justify-between'>
            {/* Course Selection */}
            <div className='enroll-field w-5/12'>
              <label>Course</label>
              <Field name='course' as='select'>
                <option value=''>Select a Course</option>
                <option value='course1'>Course 1</option>
                <option value='course2'>Course 2</option>
                <option value='course3'>Course 3</option>
              </Field>
              <ErrorMessage name='course' component='div' className='error' />
            </div>

            {/* Student Status */}
            <div className='enroll-field w-5/12'>
              <label>Student Status</label>
              <Field name='studentStatus' as='select'>
                <option value=''>Select Status</option>
                <option value='full-time'>Full-Time</option>
                <option value='part-time'>Part-Time</option>
                <option value='online'>Online</option>
                <option value='on-campus'>On-Campus</option>
              </Field>
              <ErrorMessage
                name='studentStatus'
                component='div'
                className='error'
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className='formbtn-container'>
            <button className='enroll-field-btn' type='submit'>
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Enrollment;

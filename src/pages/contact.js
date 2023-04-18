import { useState } from 'react';
import Layout from '@/components/layout';
import {
  checkValidity,
  nameValidation,
  emailValidation,
  emptyEmailValue,
  emptyNameValue,
  emptyOrganizationValue,
  emptyEnquiryValue,
} from '@/utils/validations';

export default function Contact() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    organization: '',
    enquiry: '',
  });

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [organizationError, setOrganizationError] = useState('');
  const [enquiryError, setEnquiryError] = useState('');
  const [showToast, setShowToast] = useState(false);
  //   const [errors, setErrors] = useState({
  //     nameError: '',
  //     emailError: '',
  //     organizationError: '',
  //   });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, organization, enquiry } = userData;

    if (
      emptyEmailValue(email) === '' &&
      emptyNameValue(name) === '' &&
      emptyOrganizationValue(organization) === '' &&
      emptyEnquiryValue(enquiry) === '' &&
      nameValidation(name) &&
      emailValidation(email)
    ) {
      addContact(userData);
      setUserData({ name: '', email: '', organization: '', enquiry: '' });
    }

    if (emptyEmailValue(email) !== '') setEmailError(emptyEmailValue(email));
    if (emptyNameValue(name) !== '') setNameError(emptyNameValue(name));
    if (emptyOrganizationValue(organization) !== '')
      setOrganizationError(emptyOrganizationValue(organization));
    if (emptyEnquiryValue(enquiry) !== '')
      setEnquiryError(emptyEnquiryValue(enquiry));
  };

  const addContact = async (contact) => {
    try {
      // we will send a POST request with the data required to create an contact
      const res = await fetch('/api/createContact', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' },
      });
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
      setUserData({});
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (emptyNameValue(value) === '' && name === 'name') setNameError('');
    if (emptyEmailValue(value) === '' && name === 'email') setEmailError('');
    if (emptyOrganizationValue(value) === '' && name === 'organization')
      setOrganizationError('');
    if (emptyEnquiryValue(value) === '' && name === 'enquiry')
      setEnquiryError('');

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <Layout>
      <div className="grid md:grid-cols-2 items-center gap-10 mx-auto md:mt-16 mt-10 px-8 md:px-24 bg-hero">
        <div>
          <h2 className="font-medium text-4xl text-gray-800">
            Contact ThinkItBeyond
          </h2>
          <p className="text-xl leading-relaxed text-slate-500 mt-3">
            Have something to say? We are here to help. Fill up the form or send
            email.
          </p>
          <div className="mt-5">
            <div className="flex items-center mt-2 space-x-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              <a href="mailto:hello@astroshipstarter.com">
                contact@thinkitbeyond.com
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="px-4 pt-4 bg-slate-100 rounded-md flex flex-col md:ml-auto w-full md:py-8 md:mt-0">
            <h3 className="leading-relaxed mb-5 text-gray-600 text-xl font-bold">
              Share your details below so we can reach out to you!
            </h3>
            <div className="relative mb-4">
              <label htmlor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <p
                className={`text-red-500 text-sm ${
                  nameError ? 'block' : 'hidden'
                }`}
              >
                {nameError}
              </p>
            </div>
            <div className="relative mb-4">
              <label htmlor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <p
                className={`text-red-500 text-sm ${
                  emailError ? 'block' : 'hidden'
                }`}
              >
                {emailError}
              </p>
            </div>
            <div className="relative mb-4">
              <label
                htmlor="organization"
                className="leading-7 text-sm text-gray-600"
              >
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={userData.organization}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <p
                className={`text-red-500 text-sm ${
                  organizationError ? 'block' : 'hidden'
                }`}
              >
                {organizationError}
              </p>
            </div>
            <div className="relative mb-4">
              <label
                htmlor="enquiry"
                className="leading-7 text-sm text-gray-600"
              >
                Enquiry
              </label>
              <textarea
                id="enquiry"
                name="enquiry"
                value={userData.enquiry}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
              <p
                className={`text-red-500 text-sm ${
                  enquiryError ? 'block' : 'hidden'
                }`}
              >
                {enquiryError}
              </p>
            </div>
            <button
              type="submit"
              className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg mb-4 md:mb-0"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className={`${showToast ? 'flex' : 'hidden'}  justify-center`}>
        <div
          id="toast-simple"
          className="flex items-center my-4 w-full border border-secondary max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
          role="alert"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-primary dark:text-secondary"
            focusable="false"
            data-prefix="fas"
            data-icon="paper-plane"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
            ></path>
          </svg>
          <div className={`pl-4 text-sm font-normal`}>
            Thank you for your enquiry. We&apos;ll get back to you ASAP.
          </div>
        </div>
      </div>
    </Layout>
  );
}

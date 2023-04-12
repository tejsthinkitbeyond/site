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
      const newItem = await res.json();
      console.log(newItem);
      //   then we will update the 'items' adding the newly added item to it
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
      <div class="grid md:grid-cols-2 gap-10 mx-auto mt-16 px-8 md:px-24">
        <div>
          <h2 class="font-medium text-2xl text-gray-800">
            Contact ThinkItBeyond
          </h2>
          <p class="text-lg leading-relaxed text-slate-500 mt-3">
            Have something to say? We are here to help. Fill up the form or send
            email.
          </p>
          <div class="mt-5">
            <div class="flex items-center mt-2 space-x-2 text-gray-600">
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
          <div class="px-4 pt-4 bg-slate-50 rounded-md flex flex-col md:ml-auto w-full md:py-8 md:mt-0">
            <p class="leading-relaxed mb-5 text-gray-600">
              Share your details below so we can reach out to you!
            </p>
            <div class="relative mb-4">
              <label htmlor="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleChange}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <p
                className={`text-red-500 text-sm ${
                  nameError ? 'block' : 'hidden'
                }`}
              >
                {nameError}
              </p>
            </div>
            <div class="relative mb-4">
              <label htmlor="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <p
                className={`text-red-500 text-sm ${
                  emailError ? 'block' : 'hidden'
                }`}
              >
                {emailError}
              </p>
            </div>
            <div class="relative mb-4">
              <label
                htmlor="organization"
                class="leading-7 text-sm text-gray-600"
              >
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={userData.organization}
                onChange={handleChange}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <p
                className={`text-red-500 text-sm ${
                  organizationError ? 'block' : 'hidden'
                }`}
              >
                {organizationError}
              </p>
            </div>
            <div class="relative mb-4">
              <label htmlor="enquiry" class="leading-7 text-sm text-gray-600">
                Enquiry
              </label>
              <textarea
                id="enquiry"
                name="enquiry"
                value={userData.enquiry}
                onChange={handleChange}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
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
              class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
          </div>
          {/* <iframe
            class="airtable-embed"
            src="https://airtable.com/embed/shr96jsp0jbX3kboH?backgroundColor=cyan"
            frameborder="0"
            onmousewheel=""
            width="100%"
            height="533"
            style={{ background: 'transparent', border: '1px solid #ccc' }}
          ></iframe> */}
        </form>
      </div>
    </Layout>
  );
}

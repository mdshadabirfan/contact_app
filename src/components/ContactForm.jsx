import React, { useState } from "react";

const ContactForm = ({ addContact }) => {
  const [contactData, setContactData] = useState({
    profilePic: "",
    fullName: "",
    contactNumber: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();

    addContact({ ...contactData, id: crypto.randomUUID() });
    setContactData({ profilePic: "", fullName: "", contactNumber: "" });
  };
  return (
    <form
      className="p-12 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-4"
      onSubmit={(e) => submitHandler(e)}
    >
      <input
        name="profilePic"
        className="text-gray-100 placeholder:text-xs p-2 w-full rounded outline-1 outline-gray-200 focus:border-sky-500 focus:outline focus:outline-sky-500  disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none"
        type="url"
        placeholder="Picture"
        required
        value={contactData.profilePic}
        onChange={handleChange}
      />
      <input
        name="fullName"
        className="text-gray-100 placeholder:text-xs p-2 w-full rounded outline-1 outline-gray-200 focus:border-sky-500 focus:outline focus:outline-sky-500  disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none"
        type="text"
        placeholder="Full name"
        required
        value={contactData.fullName}
        onChange={handleChange}
      />
      <input
        name="contactNumber"
        className="text-gray-100 placeholder:text-xs p-2 w-full rounded outline-1 outline-gray-200 focus:border-sky-500 focus:outline focus:outline-sky-500  disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none"
        type="tel"
        placeholder="Phone (Mobile)"
        required
        value={contactData.contactNumber}
        onChange={handleChange}
      />

      <button
        className="justify-self-end w-fit px-5 py-1 text-right bg-sky-500 hover:bg-sky-700 rounded-3xl cursor-pointer"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default ContactForm;

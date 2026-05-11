import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import ContactCard from "./components/ContactCard";

const App = () => {
  const [allProfiles, setAllProfiles] = useState(() => JSON.parse(localStorage.getItem("allLocalProfiles")) || []);;
  const addContact = (newProfile) => {
    const updatedProfiles = [...allProfiles, newProfile];
    setAllProfiles(updatedProfiles);
    localStorage.setItem("allLocalProfiles", JSON.stringify(updatedProfiles));
  };
  const deleteContact = (id, fullName) => {
    if (window.confirm(`Are you sure you want to delete ${fullName}?`)) {
      const filteredProfiles = allProfiles.filter((profile) => profile.id !== id);
      setAllProfiles(filteredProfiles);
      localStorage.setItem("allLocalProfiles", JSON.stringify(filteredProfiles));
    }
  };
  return (
    <div className="bg-[#0E121C] text-white p-3 min-h-screen">
      <Navbar />
      <ContactForm addContact={addContact} />

      <ul className=" m-5 border border-gray-800 grid grid-cols-1 md:grid-cols-3 md:gap-10">
        {allProfiles.length > 0 ? (
          allProfiles.map((profile) => (
            <ContactCard
              key={profile.id}
              contact={profile}
              deleteContact={deleteContact}
            />
          ))
        ) : (
          <p className="p-4 text-gray-500 text-center md:text-center lg:text-center xl:text-center">
            No contacts saved yet.
          </p>
        )}
      </ul>
    </div>
  );
};

export default App;

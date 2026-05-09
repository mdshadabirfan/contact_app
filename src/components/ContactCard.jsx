import React from "react";

const ContactCard = ({ contact, deleteContact }) => {
  const { profilePic, fullName, contactNumber, id } = contact;
  return (
    <li className="flex py-4 mb-1 border-b border-b-gray-800 md:border-b-0 md:border-l md:border-l-gray-800 lg:border-b-0 lg:border-l-gray-800 xl:border-b-0 xl:border-l-gray-800 lg:border-l xl:border-l group cursor-pointer last:border-b-0 md:first:border-l-0 px-5">
      <img
        className="w-10 h-10 rounded-full object-center object-cover"
        src={profilePic}
        alt=""
      />
      <div className="ml-3 overflow-hidden flex-1">
        <p className="text-sm font-medium text-white">{fullName}</p>
        <p className="truncate text-sm text-gray-400">{contactNumber}</p>
      </div>
      <button
        className="hidden group-hover:block bg-red-600 p-2 text-sm cursor-pointer"
        onClick={() => {
          deleteContact(id, fullName);
        }}
      >
        X
      </button>
    </li>
  );
};

export default ContactCard;

import { useContext } from "react";
import UserContext from "../utils/userContext";

const Contact = () => {
  // how to use context api in functional based compoents
  // const { credits } = useContext(UserContext);
  // <h1>this is the contact page</h1>
  // <h3 className="font-bold">made with love 🧡 by {credits.name}</h3>
  {
    /*
      <div data-tf-live="01J364Z47V65791SGAQX61PTNT"></div>
      <script src="//embed.typeform.com/next/embed.js"></script> */
  }

  return (
    <section className="bg-white h-screen overflow-y-hidden">
      <div className="container mx-auto py-[200px]">
        <div className="text-center">
          <p className="font-medium text-blue-500 ">Contact us</p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">
            Get in touch
          </h1>
          <p className="mt-3 text-gray-500 "></p>
        </div>
        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <ContactItem
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            }
            title="Email"
            description="Drop me a mail"
            contact="pushkar1713@gmail.com"
          />
          <ContactItem
            icon={
              <>
                <path strokeLinecap="round" strokeLinejoin="round" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"
                />
              </>
            }
            title="LinkedIN"
            description="Connect on LinkedIn"
            contact="@pushkar1713"
          />
          <ContactItem
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"
              />
            }
            title="Twitter"
            description="DM me on twitter"
            contact="@pushkar1713"
          />
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, description, contact }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          {icon}
        </svg>
      </span>
      <h2 className="mt-4 text-lg font-medium text-gray-800 ">{title}</h2>
      <p className="mt-2 text-gray-500 ">{description}</p>
      <p className="mt-2 text-blue-500 ">{contact}</p>
    </div>
  );
};

export default Contact;

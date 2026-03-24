import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg">
          Let’s connect to discuss software engineering opportunities and projects.
        </p>
      </div>

      {/* Contact Info Card */}
      <div className="w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700 text-center space-y-4">
        <p className="text-gray-300 text-lg">
          📧 Email:
          <span className="block text-white mt-1">
            <a
              href="mailto:abhiramyadavm1@gmail.com"
              className="hover:text-purple-400 transition"
            >
              abhiramyadavm1@gmail.com
            </a>
          </span>
        </p>

        <p className="text-gray-300 text-lg">
          📞 Mobile:
          <span className="block text-white mt-1">
            <a
              href="tel:+916361053308"
              className="hover:text-purple-400 transition"
            >
              +91 6361053308
            </a>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
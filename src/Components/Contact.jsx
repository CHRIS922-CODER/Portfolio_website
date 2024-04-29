/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-primary flex justify-center items-center p-4"
    >
      <div className="container_config p-4">
        <form
          method="POST"
          action="https://getform.io/f/rbeqonnb"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="active">Contact</p>
            <p className="text-gray-300 py-4">
              // submit the form below or shoot me an email -
              christopheromosa632@gmail.com
            </p>
          </div>
          <input type="text" placeholder="Name" name="name" />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            name="message"
            className=" bg-[#ccd6f6] p-2"
            rows="10"
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

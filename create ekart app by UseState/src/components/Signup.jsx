import { useState } from "react";

const Signup = () => {
    const [formdata, setFormData] = useState({
        names: "",
        lastname: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
      const {name, value} = e.target;
   setFormData({...formdata, [name]: value});
    }
    const handleSignupSubmit = (e) => {
      e.preventDefault();
      setFormData("")
      console.log({formdata})
    }
  return (
    <div className="bg-gradient-to-r from-gray-600 to-gray-900 flex justify-center items-center h-screen w-full">
      <div className="shadow-md rounded-xl w-96 h-100 border-4 border-emerald-600">
        <form onSubmit={handleSignupSubmit}
          className="flex flex-col gap-7 p-2 my-3 justify-center items-center"
        >
            <h3 className="text-white text-2xl">Signup</h3>
          <input 
          onChange={handleChange}
          name="names"
          value={formdata.names}
            className="py-1 px-2 w-full rounded-md outline-none border-2 border-gray-700 text-white"
            type="names"
            placeholder="enter your name"
          />
          <input
            // onChange={(e) => setPassword(e.target.value)}
            onChange={handleChange}
            name="lastname"
            value={formdata.lastname}
            className="text-white py-1 px-2 w-full rounded-md outline-none border-2 border-gray-700"
            type="lastname"
            placeholder="enter your last name"
          />
          <input
            // onChange={(e) => setPassword(e.target.value)}
            onChange={handleChange}
            name="email"
            value={formdata.email}
            className="text-white py-1 px-2 w-full rounded-md outline-none border-2 border-gray-700"
            type="email"
            placeholder="enter your email"
          />
          <input
            // onChange={(e) => setPassword(e.target.value)}
            onChange={handleChange}
            name="password"
            value={formdata.password}
            className="text-white py-1 px-2 w-full rounded-md outline-none border-2 border-gray-700"
            type="password"
            placeholder="enter your password"
          />
          <button
            type="submit"
            className="bg-emerald-700 w-full text-white py-1 px-3 cursor-pointer rounded-md"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

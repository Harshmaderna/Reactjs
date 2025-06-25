import { useState } from "react";
import { loginSchema } from "../utils/LoginSchema";

const Login = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  // const handleEmailchange = (e) => {
  //      setEmail(e.target.value)
  // }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      const errorField = result.error.formErrors.fieldErrors;
      setError(errorField);

      return;
    }
    setFormData({email: "", password: ""})
  };

  return (
    <div className="bg-gradient-to-r from-gray-600 to-gray-900 flex justify-center items-center h-screen w-full">
      <div className="shadow-md rounded-xl w-96 h-50 border-4 border-emerald-600">
        <form
          onSubmit={handleLoginSubmit}
          className="flex flex-col gap-7 p-2 my-3 justify-center items-center"
        >
          <input 
            onChange={handleChange}
            id="email"
            value={formData.email}
            name="email"
            type="email"
            className="py-1 px-2 w-full rounded-md outline-none border-2 border-gray-700 text-white"
            placeholder="enter your email"
          />
          {/* <p className="text-red-600 text-sm">{error && error.email}</p> */}
          <input
            // onChange={(e) => setPassword(e.target.value)}
            onChange={handleChange}
            id="password"
            value={formData.password}
            name="password"
            className="text-white py-1 px-2 w-full rounded-md outline-none border-2 border-gray-700"
            type="password"
            placeholder="enter your password"
          />
          {/* <p className="text-red-600 text-sm">{error && error.password}</p> */}
          <button
            type="submit"
            className="bg-emerald-700 w-full text-white py-1 px-3 cursor-pointer rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
    alert("Login Successful ✅");
  };

  return (
  <div className="flex justify-center items-center h-screen bg-gray-100">

  <div className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400">

    <h2 className="text-2xl font-bold text-center mb-6 text-red-500">
      Login
    </h2>

    <form className="space-y-5">

      <input
        type="email"
        placeholder="Enter email"
        className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-red-400"
      />

      <input
        type="password"
        placeholder="Enter password"
        className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-red-400"
      />

      <button className="w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
        Login
      </button>

    </form>

  </div>

</div>
  );
};

export default Login;
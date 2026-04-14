import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    cpassword: "",
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

    if (form.password !== form.cpassword) {
      alert("Passwords do not match ❌");
      return;
    }

    console.log(form); // yahan backend API call karenge next step me
    alert("Form Submitted ✅");
  };

  return (
    <div className="flex flex-col justify-center sm:h-screen p-4 bg-gray-100">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8 bg-white">
        
        <div className="text-center mb-12">
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-40 inline-block"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">

            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Email Id
              </label>
              <input
                name="email"
                type="text"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              />
            </div>

            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              />
            </div>

            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Confirm Password
              </label>
              <input
                name="cpassword"
                type="password"
                value={form.cpassword}
                onChange={handleChange}
                placeholder="Enter confirm password"
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              />
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember"
                type="checkbox"
                checked={form.remember}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="text-slate-600 ml-3 text-sm"
              >
                I accept the{" "}
                <span className="text-blue-600 font-medium hover:underline ml-1 cursor-pointer">
                  Terms and Conditions
                </span>
              </label>
            </div>

          </div>

          <div className="mt-12">
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Create an account
            </button>
          </div>

          <p className="text-slate-600 text-sm mt-6 text-center">
            Already have an account?{" "}
            <span className="text-blue-600 font-medium hover:underline ml-1 cursor-pointer">
              Login here
            </span>
          </p>

        </form>
      </div>
    </div>
  );
}

export default App;
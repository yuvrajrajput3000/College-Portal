import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full shadow-md">

      {/* Top Section */}
      <div className="flex justify-between items-center px-8 py-3 bg-gray-100">

        <div className="flex items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/8/8f/RGPV_logo.png"
            alt="logo"
            className="w-12 h-12"
          />

          <div>
            <h1 className="text-lg font-bold text-gray-800">
              RGPV University
            </h1>
            <p className="text-sm text-gray-500">
              State Technological University of M.P.
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate("/login")}
          className="border border-red-500 text-red-500 px-4 py-1 rounded hover:bg-red-500 hover:text-white transition"
        >
          LOGIN
        </button>
      </div>

      {/* Menu */}
      <div className="bg-white border-t">
        <ul className="flex justify-center gap-8 py-3 text-gray-700 font-medium">

          <li className="cursor-pointer hover:text-blue-600">🏠 Home</li>
          <li className="cursor-pointer hover:text-blue-600">The University ▼</li>
          <li className="cursor-pointer hover:text-blue-600">Academics ▼</li>
          <li className="cursor-pointer hover:text-blue-600">Admissions ▼</li>
          <li className="cursor-pointer hover:text-blue-600">Student Life ▼</li>
          <li className="cursor-pointer hover:text-blue-600">Governance ▼</li>
          <li className="cursor-pointer hover:text-blue-600">Research ▼</li>
          <li className="cursor-pointer hover:text-blue-600">Contact</li>

        </ul>
      </div>

    </div>
  );
};

export default Navbar;
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-600 p-3 text-white flex justify-between items-center shadow">
    <Link to="/" className="font-semibold text-lg">Customer Rewards App</Link>
    <div className="space-x-4">
      <Link to="/" className="border border-gray-300 p-2 rounded-md hover:underline">Home</Link>
    </div>
  </nav>
);

export default Navbar;

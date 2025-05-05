
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header>
      <div className="bg-green-600 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex flex-wrap items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="text-white text-xl font-bold">
                <span className="text-yellow-300">JOB</span>
                <span className="bg-green-800 text-white px-1">IN</span>
                <span className="text-blue-300">Rwanda</span>
              </Link>
            </div>
            
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="text-white hover:text-yellow-200">
                Home
              </Link>
              <Link to="/create-job" className="text-white hover:text-yellow-200">
                Post advert
              </Link>
              <Link to="/" className="text-white hover:text-yellow-200">
                Employers
              </Link>
              <Link to="/" className="text-white hover:text-yellow-200">
                Contact us
              </Link>
            </div>
            
            <div className="flex md:hidden">
              <Button variant="ghost" className="text-white p-1">
                Menu
              </Button>
            </div>
          </nav>
        </div>
      </div>
      
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Job title or company name..."
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="flex">
              <Button className="bg-green-600 hover:bg-green-700">Search</Button>
            </div>
            <div className="flex">
              <Button className="bg-red-500 hover:bg-red-600">Upload CV</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

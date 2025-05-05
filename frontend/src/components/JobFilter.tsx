
import { Button } from "@/components/ui/button";

const JobFilter = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button variant="outline" className="bg-green-50 border-green-500 hover:bg-green-100 relative">
        Featured
        <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          177
        </span>
      </Button>
      <Button variant="outline" className="bg-white hover:bg-gray-100 relative">
        Jobs
        <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          102
        </span>
      </Button>
      <Button variant="outline" className="bg-white hover:bg-gray-100 relative">
        Tenders
        <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          52
        </span>
      </Button>
      <Button variant="outline" className="bg-white hover:bg-gray-100 relative">
        Consultancy
        <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          13
        </span>
      </Button>
      <Button variant="outline" className="bg-white hover:bg-gray-100 relative">
        Internships
        <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          3
        </span>
      </Button>
      <Button variant="outline" className="bg-white hover:bg-gray-100 relative">
        Public
        <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          1
        </span>
      </Button>
      <Button variant="outline" className="bg-white hover:bg-gray-100 relative">
        Others
        <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          7
        </span>
      </Button>
    </div>
  );
};

export default JobFilter;

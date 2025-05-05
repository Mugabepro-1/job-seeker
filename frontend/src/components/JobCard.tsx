
import { useNavigate } from "react-router-dom";
import { Job } from "@/services/jobService";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="mb-4 hover:shadow-lg transition-shadow">
      <CardHeader className="bg-green-50">
        <CardTitle className="text-green-600 text-xl cursor-pointer" onClick={() => navigate(`/job/${job.id}`)}>
          {job.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-2">
          <div className="flex items-start">
            <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center mr-4">
              <span className="text-xl">{job.company.charAt(0)}</span>
            </div>
            <div>
              <p className="font-semibold">{job.company}</p>
              <p className="text-gray-600">📍 {job.location}</p>
              {job.deadline && <p className="text-sm text-gray-500">Deadline: {job.deadline}</p>}
            </div>
          </div>
          
          <p className="text-sm text-gray-600 line-clamp-3">{job.description}</p>
          
          <div className="flex justify-between items-center mt-4">
            <div>
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                {job.applicationMethod === "email" ? "Apply by Email" : "Apply Online"}
              </span>
            </div>
            <Button onClick={() => navigate(`/job/${job.id}`)}>View Details</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;

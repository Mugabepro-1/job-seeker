
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Job, fetchJobById } from "@/services/jobService";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const JobDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJobDetails = async () => {
      if (!id) return;
      
      setLoading(true);
      const jobData = await fetchJobById(id);
      setJob(jobData);
      setLoading(false);
    };

    getJobDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-3/4" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start">
                <Skeleton className="h-20 w-20 rounded-md mr-4" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-5 w-1/3" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              </div>
              
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
              
              <div className="pt-6">
                <Skeleton className="h-10 w-40" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Job Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6">The job listing you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate("/")}>Back to Job Listings</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader className="bg-green-50">
          <Button 
            variant="outline" 
            className="mb-4"
            onClick={() => navigate("/")}
          >
            ← Back to Listings
          </Button>
          <CardTitle className="text-2xl text-green-700">{job.title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-start">
                <div className="w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center mr-4">
                  <span className="text-2xl">{job.company.charAt(0)}</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{job.company}</h2>
                  <p className="text-gray-600">📍 {job.location}</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Job Description</h3>
                <div className="whitespace-pre-line">{job.description}</div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">How to Apply</h3>
                <p>
                  {job.applicationMethod === "email"
                    ? "Send your CV and cover letter to the email address provided."
                    : job.applicationMethod === "website"
                    ? "Apply through the company website."
                    : job.applicationMethod === "phone"
                    ? "Call the provided phone number to apply."
                    : "Apply in person at the company location."}
                </p>
              </div>
              
              <div className="pt-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  Apply Now
                </Button>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 border rounded-md shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Job Summary</h3>
                <div className="space-y-3">
                  <div>
                    <span className="block text-gray-500">Position</span>
                    <span className="font-medium">{job.title}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500">Company</span>
                    <span className="font-medium">{job.company}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500">Location</span>
                    <span className="font-medium">{job.location}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500">Application Method</span>
                    <span className="font-medium capitalize">{job.applicationMethod}</span>
                  </div>
                  {job.deadline && (
                    <div>
                      <span className="block text-gray-500">Deadline</span>
                      <span className="font-medium">{job.deadline}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-6 bg-white p-6 border rounded-md shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Share this job</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Facebook</Button>
                  <Button variant="outline" size="sm">Twitter</Button>
                  <Button variant="outline" size="sm">LinkedIn</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobDetailPage;

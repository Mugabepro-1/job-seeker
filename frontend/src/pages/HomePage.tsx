
import { useEffect, useState } from "react";
import { fetchJobs, Job } from "@/services/jobService";
import JobCard from "@/components/JobCard";
import JobFilter from "@/components/JobFilter";
import NewsletterForm from "@/components/NewsletterForm";
import { Skeleton } from "@/components/ui/skeleton";

const HomePage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJobs = async () => {
      setLoading(true);
      const jobData = await fetchJobs();
      setJobs(jobData);
      setLoading(false);
    };

    getJobs();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <JobFilter />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold mb-6">Latest Job Listings</h1>
          
          {loading ? (
            Array(3)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="mb-4 p-4 border rounded-md">
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <div className="flex items-start">
                    <Skeleton className="h-16 w-16 rounded-md mr-4" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-4 w-1/3" />
                      <Skeleton className="h-4 w-1/4" />
                    </div>
                  </div>
                  <Skeleton className="h-4 w-full mt-4" />
                  <Skeleton className="h-4 w-full mt-2" />
                  <div className="flex justify-between items-center mt-4">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-10 w-28" />
                  </div>
                </div>
              ))
          ) : jobs.length > 0 ? (
            jobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <div className="text-center py-8">
              <p className="text-lg text-gray-600">No job listings found</p>
              <p className="mt-2">Be the first to post a job!</p>
            </div>
          )}
        </div>
        
        <div>
          <NewsletterForm />
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Featured Employers</h3>
            <div className="grid grid-cols-2 gap-4">
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="h-20 bg-gray-100 rounded-md flex items-center justify-center"
                  >
                    <span className="text-gray-500">Logo</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

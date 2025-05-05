
import { toast } from "@/hooks/use-toast";

export interface Job {
  id?: string;
  title: string;
  company: string;
  description: string;
  location: string;
  applicationMethod: string;
  createdAt?: string;
  deadline?: string;
}

const API_URL = "http://localhost:8080/jobs";

export const fetchJobs = async (): Promise<Job[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching jobs:", error);
    toast({
      title: "Error",
      description: "Failed to load job listings",
      variant: "destructive",
    });
    return [];
  }
};

export const fetchJobById = async (id: string): Promise<Job | null> => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch job details");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching job details:", error);
    toast({
      title: "Error",
      description: "Failed to load job details",
      variant: "destructive",
    });
    return null;
  }
};

export const createJob = async (job: Job): Promise<Job | null> => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    
    if (!response.ok) {
      throw new Error("Failed to create job");
    }
    
    toast({
      title: "Success",
      description: "Job created successfully",
    });
    
    return await response.json();
  } catch (error) {
    console.error("Error creating job:", error);
    toast({
      title: "Error",
      description: "Failed to create job listing",
      variant: "destructive",
    });
    return null;
  }
};

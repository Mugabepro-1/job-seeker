
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Job, createJob } from "@/services/jobService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const CreateJobPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Omit<Job, "id">>({
    title: "",
    company: "",
    description: "",
    location: "",
    applicationMethod: "email",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        toast({
          title: "Error",
          description: `Please fill in the ${key} field`,
          variant: "destructive",
        });
        return;
      }
    }
    
    setLoading(true);
    const result = await createJob(formData);
    setLoading(false);
    
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="bg-green-50">
          <CardTitle className="text-2xl text-green-700">Create New Job Listing</CardTitle>
          <CardDescription>
            Fill out the form below to post a new job opportunity
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">
                  Job Title <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Senior Software Engineer"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="company">
                  Company Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g., Tech Solutions Ltd"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="location">
                  Location <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Kigali, Rwanda"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="applicationMethod">
                  Application Method <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.applicationMethod}
                  onValueChange={(value) => handleSelectChange("applicationMethod", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select application method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="website">Company Website</SelectItem>
                      <SelectItem value="phone">Phone Call</SelectItem>
                      <SelectItem value="in-person">In Person</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="description">
                  Job Description <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the job responsibilities, requirements, and any other details..."
                  className="min-h-[200px]"
                  required
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline" onClick={() => navigate("/")}>
                Cancel
              </Button>
              <Button type="submit" className="bg-green-600 hover:bg-green-700" disabled={loading}>
                {loading ? "Creating..." : "Post Job"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateJobPage;

package org.mupro.jobs.job;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class JobService {

    public Job createJob(Job job) {
        List<Job> jobs = JsonFileHandler.readJobs();
        long newId = jobs.stream().mapToLong(Job::getId).max().orElse(0L) + 1;
        job.setId(newId);
        jobs.add(job);
        JsonFileHandler.writeJobs(jobs);
        return job;
    }

    public List<Job> getAllJobs() {
        return JsonFileHandler.readJobs();
    }

    public Optional<Job> getJobById(Long id) {
        return JsonFileHandler.readJobs().stream()
                .filter(job -> job.getId().equals(id))
                .findFirst();
    }

    public void deleteJobById(Long id) {
        List<Job> jobs = JsonFileHandler.readJobs().stream()
                .filter(job -> !job.getId().equals(id))
                .collect(Collectors.toList());
        JsonFileHandler.writeJobs(jobs);
    }
}

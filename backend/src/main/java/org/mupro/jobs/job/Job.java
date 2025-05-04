package org.mupro.jobs.job;

public class Job {
    private Long id;
    private String title;
    private String company;
    private String description;
    private String location;
    private String applicationMethod;

    public Job() {
    }

    public Job(String title, String company, String description, String location, String applicationMethod) {
        this.title = title;
        this.company = company;
        this.description = description;
        this.location = location;
        this.applicationMethod = applicationMethod;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getApplicationMethod() { return applicationMethod; }
    public void setApplicationMethod(String applicationMethod) { this.applicationMethod = applicationMethod; }
}

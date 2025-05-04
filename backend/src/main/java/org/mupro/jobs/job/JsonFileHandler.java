package org.mupro.jobs.job;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class JsonFileHandler {
    private static final String FILE_PATH = "src/main/resources/jobs.json";
    private static final ObjectMapper mapper = new ObjectMapper();

    public static List<Job> readJobs() {
        try {
            File file = new File(FILE_PATH);
            if (!file.exists()) return new ArrayList<>();
            return mapper.readValue(file, new TypeReference<List<Job>>() {});
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ArrayList<>();
        }
    }

    public static void writeJobs(List<Job> jobs) {
        try {
            mapper.writerWithDefaultPrettyPrinter().writeValue(new File(FILE_PATH), jobs);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}


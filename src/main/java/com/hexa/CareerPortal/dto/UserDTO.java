package com.hexa.CareerPortal.dto;

import com.hexa.CareerPortal.entity.Role;

public class UserDTO {

private String name;
private String email;
private Role role;
private EmployerDTO employer;
private JobSeekerDTO jobSeeker;


public UserDTO() {
}

public UserDTO(String name, String email, Role role) {
this.name = name;
this.email = email;
this.role = role;
}

public String getName() {
return name;
}

public void setName(String name) {
this.name = name;
}

public String getEmail() {
return email;
}

public void setEmail(String email) {
this.email = email;
}

public Role getRole() {
return role;
}

public void setRole(Role role) {
this.role = role;
}

public EmployerDTO getEmployer() {
return employer;
}

public void setEmployer(EmployerDTO employer) {
this.employer = employer;
}

public JobSeekerDTO getJobSeeker() {
return jobSeeker;
}

public void setJobSeeker(JobSeekerDTO jobSeeker) {
this.jobSeeker = jobSeeker;
}

}

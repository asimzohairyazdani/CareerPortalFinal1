package com.hexa.CareerPortal.entity;


import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="jobListing")
public class JobListing {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="job_listing_id")
	private Long jobListingId;
	private String requirements;
	private String description;
	private String title;
	@CreationTimestamp
	@Column(name="date_of_posting")
	private LocalDateTime dateOfPosting;
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="job_application_id")
	private JobApplication jobApplication;
	public JobListing() {
		super();
	}
	public JobListing(Long jobListingId, String requirements, String description, String title,
			LocalDateTime dateOfPosting) {
		super();
		this.jobListingId = jobListingId;
		this.requirements = requirements;
		this.description = description;
		this.title = title;
		this.dateOfPosting = dateOfPosting;
	}
	public Long getJobListingId() {
		return jobListingId;
	}
	public void setJobListingId(Long jobListingId) {
		this.jobListingId = jobListingId;
	}
	public String getRequirements() {
		return requirements;
	}
	public void setRequirements(String requirements) {
		this.requirements = requirements;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public LocalDateTime getDateOfPosting() {
		return dateOfPosting;
	}
	public void setDateOfPosting(LocalDateTime dateOfPosting) {
		this.dateOfPosting = dateOfPosting;
	}
	
	public JobApplication getJobApplication() {
		return jobApplication;
	}
	public void setJobApplication(JobApplication jobApplication) {
		this.jobApplication = jobApplication;
	}
	@Override
	public String toString() {
		return "JobListing [jobListingId=" + jobListingId + ", requirements=" + requirements + ", description="
				+ description + ", title=" + title + ", dateOfPosting=" + dateOfPosting
				+ "]";
	}
	
}

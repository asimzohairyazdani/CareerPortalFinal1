package com.hexa.CareerPortal.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexa.CareerPortal.dto.ResumeDTO;
import com.hexa.CareerPortal.entity.Resume;

@Repository
public interface ResumeRepository extends JpaRepository<Resume, Long>   {

	
	//public List<Resume> findResumes(List<Resume> resumes);
	//public List<Resume> findbyFileUrl(String url);
	public Optional<Resume> findByResumeId(Long id);
	public void deleteById(Long resumeId);
	public void deleteAll();
	public long count();
	//public void deleteAll(List<Resume> reumes);
	public List<ResumeDTO> saveAll(List<ResumeDTO> resumes);
	public List<ResumeDTO> createResumes(List<ResumeDTO> resumes);

	//public List< Resume> findAll(List<Resume> resume);
	
} 
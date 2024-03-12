import axios from "../components/utils/axios";

const BASE_REST_API_URL = "api/jobseekers";
class JobSeekerService {
  getAllJobSeekers() {
    return axios.get(BASE_REST_API_URL + "/getAllJobSeekers");
  }
  addJobSeeker(jobSeeker) {
    return axios.post(BASE_REST_API_URL, jobSeeker);
  }
  deleteJobSeekerById(id) {
    return axios.delete(BASE_REST_API_URL + "/" + id);
  }
  getJobSeekerById(id) {
    return axios.get(BASE_REST_API_URL + "/" + id);
  }
  updateJobSeekerById(id, jobSeeker) {
    return axios.put(BASE_REST_API_URL + "/" + id, jobSeeker);
  }
  searchByDetails(details){
    return axios.get(BASE_REST_API_URL+"/searchByDetails?details="+details);//ss
  }
}
export default new JobSeekerService();

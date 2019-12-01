import axios from "axios";

const ApiCallService = {
  postCall: function(url, value) {
    return axios.post(url, value);
  },
  getOneCall: function(url) {
    return axios.get(url);
  },
  getAllCall: function(url) {
    return axios.get(url);
  },
  deleteCall: function(url) {
    return axios.delete(url);
  },
  updateCall: function(url, value) {
    return axios.put(url, value);
  }
};
export default ApiCallService;

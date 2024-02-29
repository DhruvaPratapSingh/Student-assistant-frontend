/* eslint-disable import/no-anonymous-default-export */
import Axios from "axios";

class ApiHandler {
  handleVoidParams = (params) => {
    if (params) {
      for (const key in params) {
        if (
          params[key] == null ||
          params[key] === undefined ||
          params[key] === ""
        ) {
          delete params[key];
        }
      }
    }
    return params;
  };

  get = async (endpoint, params) => {
    try {
      const options = await this.axiosOptionsConfig();
      const response = await Axios.get(endpoint, {
        params: this.handleVoidParams(params),
        ...options,
      });

      const data = this.handleApiResponse(response);
      return data;
    } catch (error) {
      if (error) {
        this.handleApiResponse(error?.response || error);
      }
    }
  };

  download = async (endpoint, params) => {
    try {
      const options = await this.axiosOptionsConfig();
      const response = await Axios.get(endpoint, {
        params: this.handleVoidParams(params),
        ...options,
        responseType: "blob",
      });

      const data = this.handleApiResponse(response);
      return data;
    } catch (error) {
      if (error) {
        this.handleApiResponse(error?.response || error);
      }
    }
  };

  post = async (endpoint, body, contentType) => {
    try {
      const options = await this.axiosOptionsConfig(contentType);
      const response = await Axios.post(endpoint, body, options);
      const data = this.handleApiResponse(response);
      return data;
    } catch (error) {
      if (error) {
        await this.handleApiResponse(error?.response || error);
      }
    }
  };

  postFormData = async (endpoint, body) => {
    try {
      const options = await this.axiosOptionsConfig("multipart/form-data");
      const response = await Axios.post(endpoint, body, options);
      const data = this.handleApiResponse(response);
      return data;
    } catch (error) {
      if (error) {
        console.log("error in post form data", error);
        this.handleApiResponse(error?.response || error);
      }
    }
  };

  put = async (endpoint, body, contentType) => {
    try {
      const options = await this.axiosOptionsConfig(contentType);
      const response = await Axios.put(endpoint, body, options);
      const data = this.handleApiResponse(response);
      return data;
    } catch (error) {
      if (error) {
        this.handleApiResponse(error?.response || error);
      }
    }
  };

  delete = async (endpoint, params) => {
    try {
      const options = await this.axiosOptionsConfig();
      const response = await Axios.delete(endpoint, {
        params: this.handleVoidParams(params),
        ...options,
      });
      const data = this.handleApiResponse(response);
      return data;
    } catch (error) {
      if (error) {
        this.handleApiResponse(error?.response || error);
      }
    }
  };

  logout = () => {
    localStorage.clear();
    window.location.href = "/";
    window.location.reload();
  };

  handleApiResponse = (response) => {
    if (
      [401, 403].indexOf(response.status) !== -1 &&
      !response.config.url.includes("auth")
    ) {
      this.logout();
      console.warn("Logged Out Due to Error url: ", response.config.url);
    } else if (
      response.status === 500 ||
      response.status === 400 ||
      response.status === 404 ||
      response.status === 401
    ) {
      throw response?.data;
    }

    return response?.data;
  };

  //   getBearerToken = () => {
  //     const authKey = localStorage.getItem(MSG_EASY_WA_ATOKEN);
  //     return `Bearer ${authKey}`;
  //   };

  //   getAccessKey = () => {
  //     const authKey = localStorage.getItem(MSG_EASY_WA_AKEY);
  //     return authKey;
  //   };

  getHeader = async (contentType) => {
    const header = {
      "Content-Type": contentType || "application/json",
      Accept: "application/json",
      // accesskey: this.getAccessKey(),
      // Authorization: this.getBearerToken(),
    };

    return header;
  };

  axiosOptionsConfig = async (contentType) => {
    const header = await this.getHeader(contentType);
    return new Promise((resolve) => {
      resolve({
        baseURL: this.getApiBaseUrl(),
        headers: header,
      });
    });
  };

  getApiBaseUrl = () => "http://localhost:8000/api/v1";
}

export default new ApiHandler();

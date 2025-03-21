
export const resInterceptor = {
  onFulfill(response) {
    return response;
  },
  onReject(error) {
    if (error.response) {
      return Promise.reject(error.response);
    }

    if (error.request) {
      return Promise.reject({ error: 'Connection error' });
    }

    return Promise.reject(error);
  },
};

import axios from 'axios';

const BASE_URL = 'https://node-reply-letter.onrender.com';

export const sendFeedback = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/feedback`, data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.error || 'Error sending form');
    }
    throw new Error('An error occurred. Please try again.');
  }
};

export const sendReviews = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/reviews`, data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.error || 'Error sending form');
    }
    throw new Error('An error occurred. Please try again.');
  }
};

export const GetReviews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/reviews`, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

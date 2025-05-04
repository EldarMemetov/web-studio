import axios from 'axios';
import { handleError } from '@/utils/errorHandler';

const BASE_URL = 'https://node-reply-letter.onrender.com';

export const sendFeedback = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/feedback`, data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    console.error('Error sending feedback with payload:', data);
    throw handleError(error);
  }
};

export const sendReviews = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/reviews`, data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw handleError(error);
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

// export const GetBlog = async () => {
//   try {
//     console.log(`${BASE_URL}/api/blog`);
//     const response = await axios.get(`${BASE_URL}/api/blogs`);
//     return response.data;
//   } catch (error) {
//     console.error('GET BLOG ERROR:', error);
//     throw handleError(error);
//   }
// };

// export const GetBlogId = async (id) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/api/blogs/${id}`);
//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.data) {
//       throw new Error(error.response.data.error || 'Error fetching blog by ID');
//     }
//     throw handleError(error);
//   }
// };

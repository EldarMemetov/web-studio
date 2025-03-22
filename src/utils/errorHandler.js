export const handleError = (error) => {
  if (error.response && error.response.data) {
    return new Error(error.response.data.error || "Error sending the form");
  }

  return new Error("An error occurred. Please try again.");
};

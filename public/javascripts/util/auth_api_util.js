export const speechToTextToken = () => (
  axios.get("http://localhost:5000/api/speech-to-text/token")
);
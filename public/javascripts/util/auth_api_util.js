export const speechToTextToken = () => (
  fetch("http://localhost:5000/api/speech-to-text/token");
);
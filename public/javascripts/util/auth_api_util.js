import axios from 'axios';

export const fetchSpeechToken = () => (axios.get("http://localhost:5000/api/speech-to-text/token"));
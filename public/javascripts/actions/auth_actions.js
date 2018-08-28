import * as authUtil from '../util/auth_api_util'

export const RECEIVE_SPEECH_TOKEN = "RECEIVE_SPEECH_TOKEN";

export const fetchSpeechToken = () => dispatch => (
  authUtil.fetchSpeechToken().then(token => dispatch(receiveSpeechToken(token)))
);

const receiveSpeechToken = (token) => ({
  type: RECEIVE_SPEECH_TOKEN,
  token: token.data
});
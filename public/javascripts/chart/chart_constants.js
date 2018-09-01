export const POSITIVITY_COLOR = [
  'rgba(255, 99, 132, 0.72)',
  'rgba(255, 230, 50, 0.72)',
  'rgba(54, 162, 235, 0.72)'
];

export const SENTIMENT_COLOR = [
  'rgba(40, 122, 255, 0.72)',
  'rgba(245, 250, 30, 0.72)',
  'rgba(255, 40, 100, 0.72)',
  'rgba(150, 40, 170, 0.72)',
  'rgba(35, 225, 0, 0.72)',
];

export const SENTIMENT_LABELS = ["Sadness", "Joy", "Anger", "Fear", "Disgust"];

export const POSITIVITY_LABELS = ["Negative", "Neutral", "Positive"];

export const DATA = {
  _id: {
    $oid: '5b883ebbe380eb5d1b6035dd'
  },
  transcript: 'Jordan wants to go to in and out',
  user: {
    $oid: '5b874ba46d1e640dde49ba7e'
  },
  date: {
    $date: '2018 - 08 - 30T19: 00: 11.619Z'
  },
  results: {
    sentiment: {
      score: -0.782117,
      label: "negative"
    },
    keywords: [{
      text: "Jordan",
      sentiment: {
        score: -0.782117,
        label: "negative"
      },
      relevance: 0.976027,
      emotion: {
        sadness: 0.392147,
        joy: 0.0506,
        fear: 0.339423,
        disgust: 0.210918,
        anger: 0.176397
      }
    }],
    emotion: {
      sadness: 0.392147,
      joy: 0.0506,
      fear: 0.339423,
      disgust: 0.210918,
      anger: 0.176397
    }
  },
  __v: 0
};
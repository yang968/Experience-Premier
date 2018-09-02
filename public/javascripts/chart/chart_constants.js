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

export const CALL_PERFORMANCE_PAGE = { 
  tooltips: {
    position: 'nearest',
    titleFontSize: 0,
  },
  legend: { display: false },
  scales: { 
    xAxes: [{ 
      stacked: true,
      display: false, 
      gridLines: {display: false} }],
    yAxes: [{ 
      stacked: true,
      display: false, 
      gridLines: {display: false}
  }]},
};

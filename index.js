// Import the Axios library
const axios = require('axios');

class NewsSentimentDataSDK {
  constructor() {
    this.baseURL = 'https://b7ooir8kk9.execute-api.us-east-1.amazonaws.com/dev/news-sentiment-data';
  }

  async fetchSentimentData(platformToken, stockName, newsSources = [], exchangeName = '') {
    if (!platformToken) {
      throw new Error('platformToken is required.');
    }

    const requestBody = {
      platformToken,
      stockName,
      newsSources,
      exchangeName
    };

    try {
      const response = await axios.post(this.baseURL, requestBody);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching sentiment data: ${error.message}`);
    }
  }
}

module.exports = NewsSentimentDataSDK;

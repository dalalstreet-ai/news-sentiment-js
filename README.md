# DALALSTREET.AI - News Sentiment Data API SDK for NodeJS

This is a NodeJS SDK for the News Sentiment Data API that allows users to retrieve news sentiment data based on various filters. This SDK provides a simple interface for users to integrate the API into their NodeJS applications.

## Installation

To install the SDK, use npm:

```bash
npm i news-sentiment
```

## Usage

To use the SDK, import it into your NodeJS application and provide the required parameters to retrieve the news sentiment data.

```javascript
const newsSentimentDataSDK = require('news-sentiment-data-sdk');

const platformToken = "1234567890123456"; // Replace with your platform token (required)
const stockName = "AAPL"; // Replace with the name of the stock (optional)
const newsSources = ["CNN", "BBC"]; // Replace with the name of the news sources (optional)

newsSentimentDataSDK.getNewsSentimentData(platformToken, stockName, exchangeName, newsSources)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

## Parameters

The `getNewsSentimentData` function takes four parameters:

- `platformToken` (required): A string that represents the platform token for the user.

- `stockName` (optional): A string that represents the name of the stock.

- `newsSources` (optional): A list of strings that represents the name of the news sources.

## Return Value

The `getNewsSentimentData` function returns a Promise that resolves to an array of objects representing the news sentiment data that matches the provided filters.

Each object in the array has the following properties:

- `title`: A string representing the title of the news article.

- `summary`: A string representing the summary of the news article.

- `url`: A string representing the URL of the news article.

- `sentiment`: A string representing the sentiment of the news article (positive, negative, or neutral).

## Error Handling

If there is an error retrieving the news sentiment data, the Promise will be rejected with an error message.

## License

This SDK is licensed under the MIT License. See the LICENSE file for more information.
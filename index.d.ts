declare module 'news-sentiment-data-sdk' {
    interface QueryParams {
      platformToken: string;
      stockName?: string;
      exchangeName?: string[];
      sources?: string[];
    }
  
    interface NewsData {
      title: string;
      summary: string;
      url: string;
      sentiment: string;
    }
  
    export function getNewsData(queryParams: QueryParams): Promise<NewsData[]>;
  }
  
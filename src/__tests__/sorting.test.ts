import { Equities } from "../types/equities";
import { sorting } from "../utils/equities";

describe('sorting function', () => {
    it('should sort equities by the given property', () => {
      const sampleEquities: Equities = [
        {
          "symbol": "AAPL",
          "name": "apple inc.",
          "price": 175.64,
          "daily_change": 1.27
        },
        {
          "symbol": "MSFT",
          "name": "microsoft corporation",
          "price": 317.94,
          "daily_change": -0.89
        },
        {
          "symbol": "GOOGL",
          "name": "alphabet inc.",
          "price": 2843.42,
          "daily_change": 2.12
        },
        {
          "symbol": "AMZN",
          "name": "amazon.com, inc.",
          "price": 3457.67,
          "daily_change": -1.45
        },
        {
          "symbol": "TSLA",
          "name": "tesla, inc.",
          "price": 734.09,
          "daily_change": 3.85
        },
        {
          "symbol": "FB",
          "name": "meta platforms, inc.",
          "price": 341.37,
          "daily_change": -0.77
        }
      ];
  
      const result = sorting(sampleEquities, 'name');
  
      expect(_.isEqual(result, [
        {
            "symbol": "GOOGL",
            "name": "alphabet inc.",
            "price": 2843.42,
            "daily_change": 2.12
        },
        {
          "symbol": "AMZN",
          "name": "amazon.com, inc.",
          "price": 3457.67,
          "daily_change": -1.45
        },
        {
          "symbol": "AAPL",
          "name": "apple inc.",
          "price": 175.64,
          "daily_change": 1.27
        },
        {
          "symbol": "FB",
          "name": "meta platforms, inc.",
          "price": 341.37,
          "daily_change": -0.77
        },
        {
          "symbol": "MSFT",
          "name": "microsoft corporation",
          "price": 317.94,
          "daily_change": -0.89
        },
        {
          "symbol": "TSLA",
          "name": "tesla, inc.",
          "price": 734.09,
          "daily_change": 3.85
        },
      ])).toBe(true);
    });
  });
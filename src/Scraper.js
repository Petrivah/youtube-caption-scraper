const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
const fetch = isBrowser ? window.fetch : require('node-fetch');

/**
 * @classdesc Makes a simple GET request with a single method
 */
class Scraper {
  /**
   * The exact scrap method
   * @param {string} url The request URL
   * @returns {Promise<string>} The response content
   */
  async scrap(url) {
    /** @type {Response} */
    const fetchResult = await fetch(url);
    const response = await fetchResult.text();
    return response;
  }
}

module.exports = Scraper;
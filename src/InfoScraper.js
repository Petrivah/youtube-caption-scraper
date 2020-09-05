const Scraper = require('./Scraper');

/**
 * @classdesc Scrap the video info by the YouTube video ID
 */
class InfoScraper {
  /**
   * Turn the string into the video ID
   * @example
   * const scraper = new InfoScraper();
   * 
   * scraper.prepare('https://www.youtube.com/watch?v=jNQXAC9IVRw') // "jNQXAC9IVRw"
   * 
   * scraper.prepare('https://www.youtube.be/jNQXAC9IVRw') // "jNQXAC9IVRw"
   * 
   * scraper.prepare('jNQXAC9IVRw') // "jNQXAC9IVRw"
   * 
   * @param {string} videoString The string that contains the video ID at the end
   * @returns {string} The video ID
   */
  prepare(videoString) {
    const rxp = /[a-zA-Z0-9_-]{11}\/?$/;
    const [match] = videoString.match(rxp);
    return match;
  }
  /**
   * Generate
   * @param {string} videoID The video ID
   * @returns {string} The video info URL
   */
  generateURL(videoID) {
    return `https://youtube.com/get_video_info?video_id=${videoID}`;
  }
  /**
   * Scrap the video info from the video string
   * @param {string} videoString
   * @returns {Promise<string>} The video info
   */
  async scrap(videoString) {
    const videoID = this.prepare(videoString);
    const url = this.generateURL(videoID);
    const info = new Scraper().scrap(url);
    return info;
  }
}

module.exports = InfoScraper;
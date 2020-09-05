const InfoScraper = require('./InfoScraper');
const CaptionLinks = require('./CaptionLinks');
const Scraper = require('./Scraper');

/**
 * @classdesc The main class
 */
class CaptionScraper {
  /**
   * 
   * @param {CaptionLink} captions The captions list
   * @param {string} languageCode The language code
   * @param {string} format The captions format
   */
  getLink(captions, languageCode, format) {
    const native = captions[languageCode];
    if (!native) return null;
    const linkWithFormat = `${native}&format=${format}`;
    return linkWithFormat;
  }
  /**
   * Get info about the video
   * @param {string} videoID - The video ID (goes after `?v=` in youtube video URL)
   * @param {string} [languageCode='en'] - The captions language code
   * @param {string} [format='vtt'] - The captions format
   */
  async scrap(videoString, languageCode = 'en', format = 'vtt') {
    const info = await new InfoScraper().scrap(videoString);
    const captions = new CaptionLinks(info).toObject();
    const link = this.getLink(captions, languageCode, format);
    const result = await new Scraper().scrap(link);
    return result;
  }
}

module.exports = CaptionScraper;

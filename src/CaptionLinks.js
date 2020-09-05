/**
 * @typedef {object} CaptionLink
 * @property {string} baseUrl The url of the caption
 * @property {object} name The name of the caption
 * @property {string} name.simpleText The title of the caption
 * @property {string} vssId The VSS ID of the caption
 * @property {string} languageCode The language code of the caption
 * @property {string} kind The kind of the caption
 * @property {boolean} isTranslatable Whether the caption is translateable or not
 */

/**
 * @classdesc Caption links entity
 */
class CaptionLinks {
  /**
   * @param {string} rawString The raw string
   */
  constructor(rawString) {
    /**
     * @private
     * @type {Array<CaptionLink>}
     */
    this.links = this.parse(rawString);
  }

  /**
   * Turn the caption links into an array
   * @returns {Array<CaptionLink>} The raw links array
   */
  toArray() {
    return this.links;
  }

  /**
   * Turn the caption links into a list
   * @returns {Array<string>} The list with the all caption links
   */
  toList() {
    const result = [];
    for (let i = 0; i < this.links.length; i++) {
      const { baseUrl } = this.links[i];
      result[i] = baseUrl;
    }
    return result;
  }

  /**
   * Turns the caption links into an object
   * @returns {Object<string, string>} The object with the `languageCode` keys and the `baseUrl` values
   */
  toObject() {
    const result = [];
    for (let i = 0; i < this.links.length; i++) {
      const { baseUrl, languageCode } = this.links[i];
      result[languageCode] = baseUrl;
    }
    return result;
  }

  /**
   * Parse the caption links from the string
   * @private
   * @param {string} rawString The raw string
   * @returns {Array<CaptionLink>} The caption links
   */
  parse(rawString) {
    const decoded = new URLSearchParams(rawString);
    const playerResponse = JSON.parse(decoded.get('player_response'));
    const captionLinks = playerResponse.captions.playerCaptionsTracklistRenderer.captionTracks;
    return captionLinks;
  }
}

module.exports = CaptionLinks;
### A small zero-dependency* captions obtainer for YouTube

----

*\* Zero-dependency in the browser, node version uses node-fetch*

## Installation

```
npm i -S youtube-caption-scraper
```

## Usage

```javascript
const Scraper = require('youtube-caption-scraper');
const scraper = new Scraper();
scraper.scrap('https://youtu.be/jNQXAC9IVRw', 'en', 'vtt');
```

## API

#### Scraper~scrap

| Param        |  Type  |   Default   |                        Desciption |
| ------------ | :----: | :---------: | --------------------------------: |
| videoString  | string | *undefined* |     The video ID or the video URL |
| languageCode | string |    'en'     | The language code of the captions |
| format       | string |    'vtt'    |               The captions format |
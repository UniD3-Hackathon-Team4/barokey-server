type Coordinate = [number, number];

interface Keyword {
  "keyword": string,
  "weight": number
}

interface Headline {
  "title": string,
  "date": string,
  "summary": string,
  "url": string
}

interface Crowd {
  "congestion": number,
  "geodata": Coordinate[]
}

interface Station {
  "name": string,
  "crowds": number,
  "location": Coordinate
}

const fetchAllKeywords = async () => {
  const keywords: Keyword[] = [
    {
      "keyword": "keyword1",
      "weight": 1.5
    },
    {
      "keyword": "keyword2",
      "weight": 2.3
    },
    {
      "keyword": "keyword3",
      "weight": 5.0
    }
  ]
  return keywords;
}

const fetchHeadlinesByKeyword = async (keyword: string) => {
  const headlines: Headline[] = [
    {
      "title": "title1",
      "date": "2021-01-01",
      "summary": "summary1",
      "url": "url1"
    },
    {
      "title": "title2",
      "date": "2021-01-01",
      "summary": "summary2",
      "url": "url2"
    },
    {
      "title": "title3",
      "date": "2021-01-01",
      "summary": "summary3",
      "url": "url3"
    },
  ]
  return headlines;
}

const fetchCrowdsByKeyword = async (keyword: string) => {
  const crowds: Crowd[] = [
    {
      "congestion": 0.5,
      "geodata": [
        [0, 0],
        [1, 1],
      ]
    },
    {
      "congestion": 0.7,
      "geodata": [
        [1, 1],
        [2, 3],
      ]
    }
  ]
  return crowds;
}

const fetchAllStations = async () => {
  const stations: Station[] = [
      {
        "name": "station1",
        "crowds": 0.5,
        "location": [0, 0]
      },
      {
        "name": "station2",
        "crowds": 0.4,
        "location": [0, 0]
      }
    ]
  return stations;
}

export {
  fetchAllKeywords,
  fetchHeadlinesByKeyword,
  fetchCrowdsByKeyword,
  fetchAllStations,
}

export type {
  Keyword,
  Headline,
  Crowd,
  Station,
  Coordinate
}
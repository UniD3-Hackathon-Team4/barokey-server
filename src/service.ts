type Coordinate = [number, number];
import pool from "./db.config.js";

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
  const res = await pool.query('SELECT distinct on(keyword) keyword, weight FROM headlines')
  const keywords: Keyword[] = res.rows;
  return keywords;
}

const fetchHeadlinesByKeyword = async (keyword: string) => {
  const res = await pool.query('SELECT title, timestamp as date, summary, link as url FROM headlines WHERE keyword = $1', [keyword]);
  const headlines: Headline[] = res.rows;
  return headlines;
}

const fetchCrowdsByKeyword = async (keyword: string) => {
  const res = await pool.query('SELECT subway as congestion, geojson as geodata FROM crowds JOIN geo ON geo.name = crowds.geo_name limit 7');
  const crowds: Crowd[] = res.rows;
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
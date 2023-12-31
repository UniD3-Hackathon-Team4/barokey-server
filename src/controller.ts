import { RequestHandler } from "express";
import {
  Crowd,
  fetchAllKeywords,
  fetchCrowdsByKeyword,
  fetchHeadlinesByKeyword,
  fetchAllStations,
  Headline,
  Keyword,
  Station,
} from "./service.js";


interface KeywordsResponse {
  "status": number,
  "errMsg": string,
  "keywords": Keyword[]
}

interface KeywordDetailsResponse {
  "status": number,
  "errMsg": string,
  "headlines": Headline[],
  "crowds": Crowd[],
}

interface StationCrowdsResponse {
  "status": number,
  "errMsg": string,
  "stations": Station[]
}

const getAllKeywords: RequestHandler = async (req, res) => {
  const keywords = await fetchAllKeywords();
  const response: KeywordsResponse = {
    "status": 200,
    "errMsg": "",
    "keywords": keywords
  }
  res.status(200).json(response);
}

const getKeywordDetails: RequestHandler = async (req, res) => {
  const keyword = req.params.keyword;
  const headlines = await fetchHeadlinesByKeyword(keyword);
  const crowds = await fetchCrowdsByKeyword(keyword);

  const response: KeywordDetailsResponse = {
    "status": 200,
    "errMsg": "",
    "headlines": headlines,
    "crowds": crowds
  }
  res.status(200).json(response);
}

const getStationCrowds: RequestHandler = async (req, res) => {
  const stations = await fetchAllStations();
  const response: StationCrowdsResponse = {
    "status": 200,
    "errMsg": "",
    "stations": stations
  };
  res.status(200).json(response);
}

export {
  getAllKeywords,
  getKeywordDetails,
  getStationCrowds,
}
import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast-model";

const databasePath = path.join(__dirname, "podcasts.json");

export const getAll = (): Podcast[] => {
  const data = fs.readFileSync(databasePath, "utf-8");
  return JSON.parse(data) as Podcast[];
};

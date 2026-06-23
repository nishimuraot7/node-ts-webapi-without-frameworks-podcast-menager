import { Podcast } from "../models/podcast-model";
import { getAll } from "../repositories/podcast-repository";

export const findAll = (): Podcast[] => {
  return getAll();
};

export const findByCategory = (category: string): Podcast[] => {
  const podcasts = getAll();
  return podcasts.filter((p) =>
    p.category.some((c) => c.toLowerCase() === category.toLowerCase())
  );
};

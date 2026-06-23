import { IncomingMessage, ServerResponse } from "http";
import { findAll, findByCategory } from "../services/podcast-service";

export const getPodcasts = (req: IncomingMessage, res: ServerResponse) => {
  const podcasts = findAll();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(podcasts));
};

export const getPodcastsByCategory = (req: IncomingMessage, res: ServerResponse) => {
  const url = new URL(req.url!, `http://${req.headers.host}`);
  const category = url.searchParams.get("c") || "";

  if (!category) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Informe uma categoria pelo parametro ?c=" }));
    return;
  }

  const podcasts = findByCategory(category);

  if (podcasts.length === 0) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Nenhum podcast encontrado para essa categoria" }));
    return;
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(podcasts));
};

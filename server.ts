import http from "http";
import { getPodcasts, getPodcastsByCategory } from "./controllers/podcast-controller";

const server = http.createServer((req, res) => {
  const url = req.url || "";

  // rota: listar todos os podcasts
  if (req.method === "GET" && url.startsWith("/api/episodes") && !url.includes("?")) {
    getPodcasts(req, res);

  // rota: filtrar por categoria ?c=nomeCategoria
  } else if (req.method === "GET" && url.startsWith("/api/episodes?")) {
    getPodcastsByCategory(req, res);

  // rota nao encontrada
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Rota nao encontrada" }));
  }
});

const PORT = 3333;

server.listen(PORT, () => {
  console.log(`🎙️ Podcast Manager rodando em http://localhost:${PORT}`);
  console.log(`📋 Todos os episodios: http://localhost:${PORT}/api/episodes`);
  console.log(`🔍 Filtrar por categoria: http://localhost:${PORT}/api/episodes?c=tecnologia`);
});

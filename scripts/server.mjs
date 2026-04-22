import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL("..", import.meta.url)));
const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 5197);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function resolvePath(url) {
  const cleanUrl = new URL(url, `http://${host}:${port}`);
  const pathname = cleanUrl.pathname === "/" ? "/index.html" : cleanUrl.pathname;
  const target = normalize(join(root, pathname));
  return target.startsWith(root) ? target : join(root, "index.html");
}

const server = createServer((request, response) => {
  const target = resolvePath(request.url || "/");
  if (!existsSync(target) || !statSync(target).isFile()) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Content-Type": types[extname(target)] || "application/octet-stream",
    "Cache-Control": "no-store"
  });
  createReadStream(target).pipe(response);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${port} is already in use. Stop that server or choose a different reserved port.`);
    process.exit(1);
  }
  throw error;
});

server.listen(port, host, () => {
  console.log(`Corbin & Co CRO prototype running at http://${host}:${port}/`);
});

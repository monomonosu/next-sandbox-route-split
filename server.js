import express from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

function restrictAccessToIPs(allowedIPs) {
  return (req, res, next) => {
    const clientIP =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    if (allowedIPs.includes(clientIP)) {
      next();
    } else {
      res.status(403).send("Access denied.");
    }
  };
}

const allowedAdminIPs = ["124.214.55.53"];

app.prepare().then(() => {
  const server = express();

  // IPアクセス制限を適用する
  server.use("/admin", restrictAccessToIPs(allowedAdminIPs));

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});

const express = require("express");
const { listen } = require("listhen");
const {
  createIPX,
  ipxFSStorage,
  ipxHttpStorage,
  createIPXNodeServer,
} = require("ipx");

const ipx = createIPX({
  storage: ipxFSStorage({ dir: "./public" }),
  httpStorage: ipxHttpStorage({ domains: ["app.goonlinetools.com"] }),
});

const app = express().use("/", createIPXNodeServer(ipx));

listen(app);

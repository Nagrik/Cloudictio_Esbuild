#!/usr/bin/env node

import esbuildServe from "esbuild-serve";
import { config } from 'dotenv';

config();
esbuildServe(
    {
            logLevel: "info",
            entryPoints: ["src/index.js"],
            bundle: true,
            outfile: "www/main.js",
            sourcemap: true,
            root: "."
    },
    { root: "www" }
);
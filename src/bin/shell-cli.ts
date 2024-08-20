#!/usr/bin/env node
/** @format */

import { Command } from "commander";
import { getVersion } from "utils/InfoHelper";

const program = new Command("tianyu-shell");

program.version(getVersion(), "-v, --version");
program.helpOption("-h, --help");
program.option("-p, --placeholder", "option placeholder");

program.parse(process.argv);

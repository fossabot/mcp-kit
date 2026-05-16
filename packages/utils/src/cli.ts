import { runCli, handleCliError } from "@common";
import { tools } from "./tools/text.js";

runCli(tools).catch(handleCliError);

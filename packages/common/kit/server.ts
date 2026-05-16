import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import type { AnyToolDef } from "./tool.js";

export type McpServerConfig = {
  name: string;
  version: string;
};

export function createMcpServer(config: McpServerConfig, tools: AnyToolDef[]): McpServer {
  const server = new McpServer(config);
  for (const tool of tools) {
    server.registerTool(
      tool.name,
      { description: tool.description, inputSchema: tool.inputSchema },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      tool.handler as any,
    );
  }
  return server;
}

export async function startServer(server: McpServer): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

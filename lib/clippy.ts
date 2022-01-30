import { Agents, getAgent } from "./agents";
import { Agent } from "./agent";
import "./clippy.css";

export type ClippyOptions = {
  debug?: boolean;
};

export async function initiateClippy(
  name: Agents | keyof typeof Agents,
  options?: ClippyOptions
) {
  const agent = await getAgent(name);
  return new Agent(agent, options);
}

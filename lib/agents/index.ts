import { AgentType } from "../agent";
import { AnimatorSoundType } from "../animator";

export enum Agents {
  Bonzi = "Bonzi",
  Clippy = "Clippy",
  F1 = "F1",
  Genie = "Genie",
  Genius = "Genius",
  Links = "Links",
  Merlin = "Merlin",
  Peedy = "Peedy",
  Rocky = "Rocky",
  Rover = "Rover",
}

export type AgentsType = {
  name: string;
  agent: AgentType;
  soundsMp3: AnimatorSoundType;
  soundsOgg: AnimatorSoundType;
  map: URL;
};

export type AgentsWithAudioType = AgentsType & { audio: AnimatorSoundType };

export async function getAgent(agent: Agents | keyof typeof Agents) {
  const { default: a } = await agentImporter(agent);

  const result: Partial<AgentsWithAudioType> = { ...a };
  const audio = document.createElement("audio");
  const canPlayMp3 =
    !!audio.canPlayType && "" != audio.canPlayType("audio/mpeg");
  const canPlayOgg =
    !!audio.canPlayType &&
    "" != audio.canPlayType('audio/ogg; codecs="vorbis"');

  if (canPlayMp3) {
    result.audio = result.soundsMp3;
  } else if (canPlayOgg) {
    result.audio = result.soundsOgg;
  } else {
    throw new Error("Sound cannot be played");
  }

  return result as AgentsWithAudioType;
}

function agentImporter(agent: Agents | keyof typeof Agents) {
  switch (agent) {
    case Agents.Bonzi:
      return import("./Bonzi");
    case Agents.Clippy:
      return import("./Clippy");
    case Agents.F1:
      return import("./F1");
    case Agents.Genie:
      return import("./Genie");
    case Agents.Genius:
      return import("./Genius");
    case Agents.Links:
      return import("./Links");
    case Agents.Merlin:
      return import("./Merlin");
    case Agents.Peedy:
      return import("./Peedy");
    case Agents.Rocky:
      return import("./Rocky");
    case Agents.Rover:
      return import("./Rover");
    default:
      throw new Error(`Agent '${agent}' does not exist`);
  }
}

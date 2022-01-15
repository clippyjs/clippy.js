import { AgentType } from "../../agent";

export const agent: AgentType = {
  "overlayCount": 3,
  "sounds": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  "framesize": [160, 128],
  "animations": {
    "MoveLeft": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 14 }, {
        "duration": 100,
        "images": [[160, 0]],
        "exitBranch": 0,
      }, { "duration": 150, "images": [[320, 0]], "exitBranch": 1 }, {
        "duration": 200,
        "images": [[480, 0]],
        "exitBranch": 2,
      }, { "duration": 300, "images": [[640, 0]], "exitBranch": 3 }, {
        "duration": 80,
        "images": [[800, 0]],
        "exitBranch": 9,
        "sound": "9",
      }, { "duration": 80, "images": [[960, 0]], "exitBranch": 7 }, {
        "duration": 80,
        "images": [[1120, 0]],
        "exitBranch": 8,
      }, {
        "duration": 100,
        "images": [[1280, 0]],
        "exitBranch": 9,
        "branching": { "branches": [{ "frameIndex": 14, "weight": 100 }] },
      }, { "duration": 100, "images": [[1440, 0]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[1600, 0]],
        "exitBranch": 11,
      }, { "duration": 100, "images": [[1760, 0]], "exitBranch": 12, "sound": "9" }, {
        "duration": 100,
        "images": [[1920, 0]],
        "exitBranch": 13,
      }, { "duration": 100, "images": [[2080, 0]], "exitBranch": 0 }, { "duration": 0 }], "useExitBranching": true,
    },
    "Congratulate": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 11 }, {
        "duration": 100,
        "images": [[2240, 0]],
        "exitBranch": 0,
        "sound": "13",
        "branching": { "branches": [{ "frameIndex": 3, "weight": 100 }] },
      }, { "duration": 100, "images": [[2240, 0]], "exitBranch": 0 }, {
        "duration": 100,
        "images": [[2400, 0]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[2560, 0]], "exitBranch": 3 }, {
        "duration": 400,
        "images": [[2720, 0]],
        "exitBranch": 4,
      }, { "duration": 80, "images": [[2880, 0]], "exitBranch": 5 }, {
        "duration": 80,
        "images": [[3040, 0]],
        "exitBranch": 5,
      }, { "duration": 80, "images": [[3200, 0]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[3360, 0]],
        "exitBranch": 8,
        "sound": "26",
      }, {
        "duration": 100,
        "images": [[3520, 0]],
        "exitBranch": 8,
        "branching": { "branches": [{ "frameIndex": 11, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "Hide": {
      "frames": [{ "duration": 80, "images": [[0, 0]] }, { "duration": 80, "images": [[3680, 0]] }, {
        "duration": 80,
        "images": [[3840, 0]],
      }, { "duration": 100, "images": [[0, 128]] }, { "duration": 130, "images": [[160, 128]] }, {
        "duration": 80,
        "images": [[320, 128]],
        "sound": "10",
      }, { "duration": 80, "images": [[480, 128]] }, { "duration": 80, "images": [[640, 128]] }, {
        "duration": 80,
        "images": [[800, 128]],
      }, { "duration": 80, "images": [[960, 128]] }, { "duration": 80, "images": [[1120, 128]] }, {
        "duration": 80,
        "images": [[1280, 128]],
      }, { "duration": 80, "images": [[1440, 128]] }, { "duration": 80, "images": [[1600, 128]] }, {
        "duration": 80,
        "images": [[1760, 128]],
      }, { "duration": 80, "images": [[1920, 128]] }, { "duration": 80, "images": [[2080, 128]] }, {
        "duration": 80,
        "images": [[2240, 128]],
      }, { "duration": 80, "images": [[2400, 128]] }, { "duration": 80, "images": [[2560, 128]] }, {
        "duration": 80,
        "images": [[2720, 128]],
      }, { "duration": 80, "images": [[2880, 128]] }, { "duration": 80, "images": [[3040, 128]] }, {
        "duration": 80,
        "images": [[3200, 128]],
      }, { "duration": 100, "images": [[3360, 128]] }],
    },
    "Pleased": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 25 }, {
        "duration": 100,
        "images": [[480, 3840]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[640, 3840]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[800, 3840]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[960, 3840]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[1120, 3840]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[1280, 3840]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[1440, 3840]],
        "exitBranch": 6,
      }, { "duration": 100, "images": [[1600, 3840]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[1760, 3840]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[1920, 3840]], "exitBranch": 11 }, {
        "duration": 100,
        "images": [[2080, 3840]],
        "exitBranch": 12,
      }, { "duration": 400, "images": [[1120, 3840]], "exitBranch": 4 }, {
        "duration": 100,
        "images": [[1120, 3840], [2240, 3840]],
        "exitBranch": 5,
      }, { "duration": 100, "images": [[1120, 3840], [2400, 3840]], "exitBranch": 13 }, {
        "duration": 100,
        "images": [[1120, 3840], [2240, 3840]],
        "exitBranch": 5,
      }, { "duration": 400, "images": [[1120, 3840]], "exitBranch": 4 }, {
        "duration": 100,
        "images": [[2560, 3840]],
        "exitBranch": 18,
      }, { "duration": 100, "images": [[2720, 3840]], "exitBranch": 19 }, {
        "duration": 100,
        "images": [[2880, 3840]],
        "exitBranch": 20,
      }, {
        "duration": 100,
        "images": [[3040, 3840]],
        "exitBranch": 21,
        "branching": { "branches": [{ "frameIndex": 25, "weight": 100 }] },
      }, { "duration": 100, "images": [[3200, 3840]], "exitBranch": 22 }, {
        "duration": 100,
        "images": [[3360, 3840]],
        "exitBranch": 23,
      }, { "duration": 100, "images": [[3520, 3840]], "exitBranch": 24 }, {
        "duration": 100,
        "images": [[3680, 3840]],
        "exitBranch": 0,
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "LookUpRightBlink": {
      "frames": [{
        "duration": 100,
        "images": [[3680, 128], [3520, 128]],
        "exitBranch": 3,
      }, { "duration": 200, "images": [[3680, 128], [3840, 128]], "exitBranch": 2, "sound": "12" }, {
        "duration": 100,
        "images": [[0, 256], [3520, 128]],
        "exitBranch": 3,
      }, {
        "duration": 100,
        "images": [[0, 256]],
        "exitBranch": 4,
        "branching": { "branches": [{ "frameIndex": 9, "weight": 100 }] },
      }, { "duration": 100, "images": [[160, 256]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[320, 256]],
        "exitBranch": 6,
      }, { "duration": 100, "images": [[480, 256]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[640, 256]],
        "exitBranch": 8,
      }, { "duration": 100, "images": [[800, 256]], "exitBranch": 9 }, { "duration": 0 }],
    },
    "Acknowledge": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 6 }, {
        "duration": 100,
        "images": [[960, 256]],
        "exitBranch": 5,
      }, { "duration": 100, "images": [[1120, 256]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[1280, 256]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[1440, 256]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[1600, 256]],
        "exitBranch": 6,
      }, { "duration": 100, "images": [[0, 0]] }],
    },
    "Thinking": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 18 }, {
        "duration": 100,
        "images": [[1760, 256]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[1920, 256]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[2080, 256]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[2240, 256]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[2400, 256]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[2560, 256]], "exitBranch": 5 }, {
        "duration": 300,
        "images": [[2720, 256]],
        "exitBranch": 5,
      }, { "duration": 200, "images": [[2880, 256]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[2560, 256]],
        "branching": { "branches": [{ "frameIndex": 17, "weight": 100 }] },
      }, { "duration": 100, "images": [[2720, 256], [3040, 256]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[2720, 256], [3200, 256]],
        "exitBranch": 5,
      }, { "duration": 100, "images": [[2720, 256], [3040, 256]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[2720, 256]],
        "exitBranch": 5,
      }, { "duration": 100, "images": [[2720, 256], [3040, 256]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[2720, 256], [3200, 256]],
        "exitBranch": 5,
      }, { "duration": 100, "images": [[2720, 256], [3040, 256]], "exitBranch": 5 }, {
        "duration": 300,
        "images": [[2720, 256]],
        "exitBranch": 5,
        "branching": { "branches": [{ "frameIndex": 10, "weight": 80 }, { "frameIndex": 7, "weight": 20 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "Suggest": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 16 }, {
        "duration": 80,
        "images": [[3360, 256]],
        "exitBranch": 0,
      }, { "duration": 80, "images": [[3520, 256]], "exitBranch": 1 }, {
        "duration": 80,
        "images": [[3680, 256]],
        "exitBranch": 2,
      }, { "duration": 200, "images": [[3840, 256]], "exitBranch": 3 }, {
        "duration": 80,
        "images": [[0, 384]],
        "exitBranch": 4,
      }, { "duration": 80, "images": [[160, 384]], "exitBranch": 5 }, {
        "duration": 80,
        "images": [[320, 384]],
        "exitBranch": 6,
      }, { "duration": 80, "images": [[480, 384]], "exitBranch": 7 }, {
        "duration": 80,
        "images": [[640, 384]],
        "exitBranch": 8,
      }, { "duration": 250, "images": [[800, 384]], "exitBranch": 9 }, {
        "duration": 100,
        "images": [[960, 384]],
        "exitBranch": 10,
        "sound": "8",
      }, { "duration": 100, "images": [[1120, 384]], "exitBranch": 11, "sound": "16" }, {
        "duration": 80,
        "images": [[1280, 384]],
        "exitBranch": 11,
      }, { "duration": 80, "images": [[1440, 384]], "exitBranch": 13 }, {
        "duration": 80,
        "images": [[1600, 384]],
        "exitBranch": 14,
        "branching": { "branches": [{ "frameIndex": 16, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "Explain": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 9 }, {
        "duration": 80,
        "images": [[1760, 384]],
        "exitBranch": 0,
      }, { "duration": 80, "images": [[1920, 384]], "exitBranch": 1 }, {
        "duration": 80,
        "images": [[2080, 384]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[2240, 384]], "exitBranch": 3 }, {
        "duration": 90,
        "images": [[2400, 384]],
        "exitBranch": 4,
      }, { "duration": 80, "images": [[2560, 384]], "exitBranch": 5 }, {
        "duration": 80,
        "images": [[2720, 384]],
        "exitBranch": 6,
      }, {
        "duration": 90,
        "images": [[2880, 384]],
        "exitBranch": 7,
        "branching": { "branches": [{ "frameIndex": 9, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "Decline": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 15 }, {
        "duration": 100,
        "images": [[3040, 384]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[3200, 384]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[3360, 384]],
        "exitBranch": 2,
      }, { "duration": 250, "images": [[3520, 384]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[3680, 384]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[3840, 384]], "exitBranch": 4 }, {
        "duration": 100,
        "images": [[0, 512]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[160, 512]], "exitBranch": 4 }, {
        "duration": 100,
        "images": [[0, 512]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[3840, 384]], "exitBranch": 4 }, {
        "duration": 100,
        "images": [[0, 512]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[160, 512]], "exitBranch": 4 }, {
        "duration": 100,
        "images": [[320, 512]],
        "exitBranch": 4,
      }, {
        "duration": 100,
        "images": [[3520, 384]],
        "exitBranch": 4,
        "branching": { "branches": [{ "frameIndex": 15, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "DontRecognize": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 18 }, {
        "duration": 100,
        "images": [[160, 2944]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[320, 2944]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[480, 2944]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[640, 2944]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[800, 2944]],
        "exitBranch": 4,
      }, { "duration": 200, "images": [[960, 2944]], "exitBranch": 5 }, {
        "duration": 50,
        "images": [[1120, 2944]],
        "exitBranch": 5,
      }, { "duration": 50, "images": [[1280, 2944]], "exitBranch": 5 }, {
        "duration": 50,
        "images": [[1440, 2944]],
        "exitBranch": 5,
      }, { "duration": 50, "images": [[1600, 2944]], "exitBranch": 5 }, {
        "duration": 50,
        "images": [[1440, 2944]],
        "exitBranch": 5,
      }, { "duration": 50, "images": [[1280, 2944]], "exitBranch": 5 }, {
        "duration": 50,
        "images": [[1440, 2944]],
        "exitBranch": 5,
      }, { "duration": 50, "images": [[1600, 2944]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[1760, 2944]],
        "exitBranch": 5,
      }, { "duration": 100, "images": [[1920, 2944]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[960, 2944]],
        "exitBranch": 5,
        "branching": { "branches": [{ "frameIndex": 18, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "Writing": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 52 }, {
        "duration": 100,
        "images": [[3520, 2688]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[3360, 2688]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[3200, 2688]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[3040, 2688]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[3680, 2688]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[3840, 2688]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[0, 2816]],
        "exitBranch": 6,
      }, { "duration": 100, "images": [[160, 2816]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[320, 2816]],
        "exitBranch": 8,
      }, { "duration": 100, "images": [[480, 2816]], "exitBranch": 9 }, {
        "duration": 100,
        "images": [[640, 2688]],
        "exitBranch": 10,
        "sound": "15",
      }, { "duration": 100, "images": [[800, 2688]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[960, 2688]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[1120, 2688]], "exitBranch": 10, "sound": "22" }, {
        "duration": 100,
        "images": [[1280, 2688]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[1440, 2688]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[1600, 2688]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[1760, 2688]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[640, 2816]],
        "exitBranch": 10,
        "branching": {
          "branches": [{ "frameIndex": 11, "weight": 60 }, {
            "frameIndex": 20,
            "weight": 20,
          }, { "frameIndex": 33, "weight": 20 }],
        },
      }, { "duration": 100, "images": [[800, 2816]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[960, 2816]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[1120, 2816]], "exitBranch": 21 }, {
        "duration": 100,
        "images": [[1280, 2816]],
        "exitBranch": 22,
      }, { "duration": 1000, "images": [[1440, 2816]], "exitBranch": 22 }, {
        "duration": 100,
        "images": [[1440, 2816], [1600, 2816]],
        "exitBranch": 24,
      }, { "duration": 100, "images": [[1440, 2816], [1760, 2816]], "exitBranch": 25 }, {
        "duration": 100,
        "images": [[1440, 2816], [1600, 2816]],
        "exitBranch": 25,
      }, { "duration": 1200, "images": [[1440, 2816]], "exitBranch": 22 }, {
        "duration": 100,
        "images": [[1280, 2816]],
        "exitBranch": 30,
      }, { "duration": 100, "images": [[1120, 2816]], "exitBranch": 31 }, {
        "duration": 100,
        "images": [[960, 2816]],
        "exitBranch": 32,
      }, {
        "duration": 100,
        "images": [[800, 2816]],
        "exitBranch": 10,
        "branching": { "branches": [{ "frameIndex": 11, "weight": 100 }] },
      }, { "duration": 100, "images": [[1920, 2816]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[2080, 2816]],
        "exitBranch": 33,
      }, { "duration": 100, "images": [[2240, 2816]], "exitBranch": 34 }, {
        "duration": 100,
        "images": [[2400, 2816]],
        "exitBranch": 35,
      }, { "duration": 100, "images": [[2560, 2816]], "exitBranch": 36 }, {
        "duration": 400,
        "images": [[2720, 2816]],
        "exitBranch": 37,
        "sound": "6",
        "branching": { "branches": [{ "frameIndex": 43, "weight": 30 }] },
      }, { "duration": 120, "images": [[2720, 2816], [2880, 2816]], "exitBranch": 37 }, {
        "duration": 100,
        "images": [[2720, 2816], [3040, 2816]],
        "exitBranch": 37,
      }, { "duration": 80, "images": [[2720, 2816], [2880, 2816]], "exitBranch": 40, "sound": "25" }, {
        "duration": 150,
        "images": [[2720, 2816]],
        "exitBranch": 41,
        "branching": { "branches": [{ "frameIndex": 39, "weight": 25 }, { "frameIndex": 47, "weight": 25 }] },
      }, { "duration": 100, "images": [[2720, 2816], [3200, 2816]], "exitBranch": 42 }, {
        "duration": 250,
        "images": [[2720, 2816], [3360, 2816]],
        "exitBranch": 43,
      }, { "duration": 100, "images": [[2720, 2816], [3200, 2816]], "exitBranch": 42 }, {
        "duration": 1200,
        "images": [[2720, 2816]],
        "exitBranch": 47,
      }, { "duration": 100, "images": [[2560, 2816]], "exitBranch": 48 }, {
        "duration": 100,
        "images": [[2400, 2816]],
        "exitBranch": 49,
      }, { "duration": 100, "images": [[2240, 2816]], "exitBranch": 50 }, {
        "duration": 100,
        "images": [[2080, 2816]],
        "exitBranch": 51,
      }, {
        "duration": 100,
        "images": [[1920, 2816]],
        "exitBranch": 10,
        "branching": { "branches": [{ "frameIndex": 11, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "Idle3_3": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 49 }, {
        "duration": 80,
        "images": [[0, 768]],
        "exitBranch": 0,
      }, { "duration": 80, "images": [[160, 768]], "exitBranch": 1 }, {
        "duration": 80,
        "images": [[320, 768]],
        "exitBranch": 2,
      }, { "duration": 80, "images": [[480, 768]], "exitBranch": 3 }, {
        "duration": 80,
        "images": [[640, 768]],
        "exitBranch": 4,
      }, { "duration": 80, "images": [[800, 768]], "exitBranch": 5 }, {
        "duration": 80,
        "images": [[960, 768]],
        "exitBranch": 6,
      }, { "duration": 300, "images": [[1120, 768]], "exitBranch": 7 }, {
        "duration": 80,
        "images": [[1280, 768]],
        "exitBranch": 7,
      }, { "duration": 80, "images": [[1440, 768]], "exitBranch": 9 }, {
        "duration": 80,
        "images": [[1600, 768]],
        "exitBranch": 10,
      }, { "duration": 80, "images": [[1760, 768]], "exitBranch": 11 }, {
        "duration": 100,
        "images": [[1920, 768]],
        "exitBranch": 12,
      }, { "duration": 100, "images": [[2080, 768]], "exitBranch": 13 }, {
        "duration": 100,
        "images": [[2240, 768]],
        "exitBranch": 14,
      }, { "duration": 100, "images": [[2400, 768]], "exitBranch": 15 }, {
        "duration": 600,
        "images": [[2560, 768]],
        "exitBranch": 16,
      }, { "duration": 80, "images": [[2720, 768]], "exitBranch": 16 }, {
        "duration": 300,
        "images": [[2880, 768]],
        "exitBranch": 18,
      }, { "duration": 80, "images": [[3040, 768]], "exitBranch": 18 }, {
        "duration": 80,
        "images": [[3200, 768]],
        "exitBranch": 20,
      }, { "duration": 80, "images": [[3360, 768]], "exitBranch": 21 }, {
        "duration": 80,
        "images": [[3520, 768]],
        "exitBranch": 22,
        "branching": { "branches": [{ "frameIndex": 26, "weight": 100 }] },
      }, {
        "duration": 100,
        "images": [[3680, 768]],
        "exitBranch": 23,
        "branching": { "branches": [{ "frameIndex": 26, "weight": 100 }] },
      }, { "duration": 400, "images": [[3680, 768], [3840, 768]], "exitBranch": 23 }, {
        "duration": 700,
        "images": [[3680, 768]],
        "exitBranch": 23,
      }, { "duration": 100, "images": [[3680, 768], [3840, 768]], "exitBranch": 23 }, {
        "duration": 1500,
        "images": [[3680, 768], [0, 896]],
        "exitBranch": 27,
      }, {
        "duration": 100,
        "images": [[3680, 768], [0, 896]],
        "exitBranch": 27,
        "branching": { "branches": [{ "frameIndex": 30, "weight": 60 }, { "frameIndex": 41, "weight": 40 }] },
      }, { "duration": 100, "images": [[160, 896]], "exitBranch": 35 }, {
        "duration": 100,
        "images": [[320, 896]],
        "exitBranch": 34,
      }, { "duration": 100, "images": [[480, 896]], "exitBranch": 33 }, {
        "duration": 100,
        "images": [[320, 896]],
        "exitBranch": 34,
      }, { "duration": 100, "images": [[160, 896]], "exitBranch": 35 }, {
        "duration": 100,
        "images": [[3680, 768], [0, 896]],
        "exitBranch": 23,
      }, { "duration": 100, "images": [[640, 896]], "exitBranch": 35 }, {
        "duration": 100,
        "images": [[800, 896]],
        "exitBranch": 36,
      }, { "duration": 100, "images": [[960, 896]], "exitBranch": 39 }, {
        "duration": 100,
        "images": [[800, 896]],
        "exitBranch": 40,
      }, {
        "duration": 100,
        "images": [[640, 896]],
        "exitBranch": 41,
        "branching": { "branches": [{ "frameIndex": 29, "weight": 100 }] },
      }, { "duration": 100, "images": [[1120, 896]], "exitBranch": 27 }, {
        "duration": 200,
        "images": [[1280, 896]],
        "exitBranch": 43,
      }, { "duration": 100, "images": [[1120, 896]], "exitBranch": 27 }, {
        "duration": 100,
        "images": [[3680, 768], [0, 896]],
        "exitBranch": 27,
      }, { "duration": 100, "images": [[1440, 896]], "exitBranch": 44 }, {
        "duration": 200,
        "images": [[1600, 896]],
        "exitBranch": 45,
      }, { "duration": 100, "images": [[1440, 896]], "exitBranch": 44 }, {
        "duration": 100,
        "images": [[3680, 768], [0, 896]],
        "exitBranch": 23,
        "branching": { "branches": [{ "frameIndex": 29, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "Idle3_2": {
      "frames": [{ "duration": 100, "images": [[1760, 896]], "exitBranch": 23 }, {
        "duration": 100,
        "images": [[1920, 896]],
        "exitBranch": 0,
      }, { "duration": 300, "images": [[1920, 896], [2080, 896]], "exitBranch": 1 }, {
        "duration": 500,
        "images": [[1920, 896], [2240, 896]],
        "exitBranch": 2,
      }, { "duration": 200, "images": [[1920, 896], [2080, 896]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[1920, 896]],
        "exitBranch": 0,
      }, { "duration": 700, "images": [[2400, 896]], "exitBranch": 5 }, {
        "duration": 150,
        "images": [[2560, 896]],
        "exitBranch": 5,
      }, { "duration": 150, "images": [[2720, 896]], "exitBranch": 7 }, {
        "duration": 1000,
        "images": [[2880, 896]],
        "exitBranch": 8,
      }, { "duration": 100, "images": [[3040, 896]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[3200, 896]],
        "exitBranch": 7,
      }, { "duration": 100, "images": [[3360, 896]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[3520, 896]],
        "exitBranch": 7,
      }, { "duration": 100, "images": [[3680, 896]], "exitBranch": 7 }, {
        "duration": 1000,
        "images": [[3840, 896]],
        "exitBranch": 7,
        "branching": { "branches": [{ "frameIndex": 17, "weight": 50 }] },
      }, {
        "duration": 100,
        "images": [[3680, 896]],
        "exitBranch": 7,
        "sound": "5",
        "branching": { "branches": [{ "frameIndex": 18, "weight": 100 }] },
      }, { "duration": 100, "images": [[3680, 896]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[3520, 896]],
        "exitBranch": 7,
      }, { "duration": 100, "images": [[3360, 896]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[3200, 896]],
        "exitBranch": 7,
      }, { "duration": 100, "images": [[3040, 896]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[2880, 896]],
        "exitBranch": 7,
        "branching": { "branches": [{ "frameIndex": 9, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "Idle3_1": {
      "frames": [{ "duration": 100, "images": [[0, 1024]], "exitBranch": 23 }, {
        "duration": 100,
        "images": [[160, 1024]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[320, 1024]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[480, 1024]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[640, 1024]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[800, 1024]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[960, 1024]], "exitBranch": 4, "sound": "30" }, {
        "duration": 100,
        "images": [[960, 1024]],
        "exitBranch": 4,
        "sound": "30",
      }, { "duration": 100, "images": [[1120, 1024]], "exitBranch": 4 }, {
        "duration": 100,
        "images": [[1280, 1024]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[1440, 1024]], "exitBranch": 4 }, {
        "duration": 100,
        "images": [[1600, 1024]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[1760, 1024]], "exitBranch": 4 }, {
        "duration": 100,
        "images": [[1920, 1024]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[2080, 1024]], "exitBranch": 4 }, {
        "duration": 100,
        "images": [[2240, 1024]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[2400, 1024]], "exitBranch": 4 }, {
        "duration": 300,
        "images": [[2560, 1024]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[640, 1024]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[480, 1024]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[320, 1024]], "exitBranch": 21 }, {
        "duration": 100,
        "images": [[160, 1024]],
        "exitBranch": 22,
      }, { "duration": 100, "images": [[0, 1024]], "exitBranch": 23 }, { "duration": 100, "images": [[1760, 896]] }],
    },
    "ReadReturn": {
      "frames": [{
        "duration": 100,
        "images": [[3520, 2816]],
        "exitBranch": 1,
        "sound": "2",
      }, { "duration": 100, "images": [[3680, 2816]], "exitBranch": 2 }, {
        "duration": 200,
        "images": [[3840, 2816]],
        "exitBranch": 3,
      }, { "duration": 100, "images": [[0, 2944]], "exitBranch": 4 }, {
        "duration": 100,
        "images": [[3840, 2048]],
        "exitBranch": 5,
      }, { "duration": 100, "images": [[3680, 2048]], "exitBranch": 6 }, {
        "duration": 250,
        "images": [[3520, 2048]],
        "exitBranch": 7,
      }, { "duration": 100, "images": [[3360, 2048]], "exitBranch": 8 }, {
        "duration": 100,
        "images": [[3200, 2048]],
        "exitBranch": 9,
      }, { "duration": 100, "images": [[3040, 2048]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[2880, 2048]],
        "exitBranch": 11,
      }, { "duration": 100, "images": [[0, 0]] }],
    },
    "LookDownLeftBlink": {
      "frames": [{
        "duration": 100,
        "images": [[3840, 1024], [3680, 1024]],
        "exitBranch": 3,
      }, { "duration": 200, "images": [[3840, 1024], [0, 1152]], "exitBranch": 2, "sound": "12" }, {
        "duration": 100,
        "images": [[3840, 1024], [3680, 1024]],
        "exitBranch": 3,
      }, {
        "duration": 100,
        "images": [[3840, 1024]],
        "exitBranch": 4,
        "branching": { "branches": [{ "frameIndex": 9, "weight": 100 }] },
      }, { "duration": 100, "images": [[160, 1152]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[320, 1152]],
        "exitBranch": 6,
      }, { "duration": 100, "images": [[480, 1152]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[640, 1152]],
        "exitBranch": 8,
      }, { "duration": 100, "images": [[0, 0]], "exitBranch": 9 }, { "duration": 0 }],
    },
    "Idle2_2": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 60 }, {
        "duration": 100,
        "images": [[800, 1152]],
        "exitBranch": 60,
      }, { "duration": 100, "images": [[960, 1152]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[1120, 1152]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[1280, 1152]], "exitBranch": 3 }, {
        "duration": 200,
        "images": [[1440, 1152]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[1600, 1152]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[1760, 1152]],
        "exitBranch": 6,
      }, { "duration": 100, "images": [[1920, 1152]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[2080, 1152]],
        "exitBranch": 8,
      }, { "duration": 100, "images": [[2240, 1152]], "exitBranch": 9 }, {
        "duration": 100,
        "images": [[2400, 1152]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[2560, 1152]], "exitBranch": 10, "sound": "1" }, {
        "duration": 100,
        "images": [[2720, 1152]],
        "exitBranch": 16,
      }, { "duration": 100, "images": [[2880, 1152]], "exitBranch": 16 }, {
        "duration": 100,
        "images": [[3040, 1152]],
        "exitBranch": 16,
      }, { "duration": 100, "images": [[3200, 1152]], "exitBranch": 17, "sound": "18" }, {
        "duration": 100,
        "images": [[3360, 1152]],
        "exitBranch": 34,
      }, { "duration": 100, "images": [[3520, 1152]], "exitBranch": 34 }, {
        "duration": 100,
        "images": [[3680, 1152]],
        "exitBranch": 18,
      }, { "duration": 100, "images": [[3840, 1152]], "exitBranch": 19 }, {
        "duration": 100,
        "images": [[0, 1280]],
        "exitBranch": 19,
      }, { "duration": 100, "images": [[160, 1280]], "exitBranch": 19 }, {
        "duration": 100,
        "images": [[320, 1280]],
        "exitBranch": 19,
      }, { "duration": 100, "images": [[480, 1280]], "exitBranch": 19 }, {
        "duration": 100,
        "images": [[640, 1280]],
        "exitBranch": 19,
      }, { "duration": 100, "images": [[800, 1280]], "exitBranch": 19 }, {
        "duration": 100,
        "images": [[960, 1280]],
        "exitBranch": 19,
      }, {
        "duration": 100,
        "images": [[1120, 1280]],
        "exitBranch": 19,
        "branching": { "branches": [{ "frameIndex": 21, "weight": 15 }, { "frameIndex": 20, "weight": 15 }] },
      }, { "duration": 100, "images": [[1280, 1280]], "exitBranch": 33 }, {
        "duration": 100,
        "images": [[1440, 1280]],
        "exitBranch": 33,
      }, { "duration": 100, "images": [[1600, 1280]], "exitBranch": 33 }, {
        "duration": 100,
        "images": [[1760, 1280]],
        "exitBranch": 33,
        "sound": "18",
      }, { "duration": 100, "images": [[1920, 1280]], "exitBranch": 36 }, {
        "duration": 100,
        "images": [[2080, 1280]],
        "exitBranch": 36,
      }, { "duration": 100, "images": [[2240, 1280]], "exitBranch": 36 }, {
        "duration": 100,
        "images": [[2400, 1280]],
        "exitBranch": 38,
      }, { "duration": 100, "images": [[2560, 1280]], "exitBranch": 38 }, {
        "duration": 100,
        "images": [[2720, 1280]],
        "exitBranch": 39,
      }, { "duration": 100, "images": [[2880, 1280]], "exitBranch": 40, "sound": "1" }, {
        "duration": 100,
        "images": [[3040, 1280]],
        "exitBranch": 41,
      }, { "duration": 100, "images": [[3200, 1280]], "exitBranch": 46 }, {
        "duration": 100,
        "images": [[3360, 1280]],
        "exitBranch": 46,
      }, { "duration": 100, "images": [[3520, 1280]], "exitBranch": 46 }, {
        "duration": 100,
        "images": [[3680, 1280]],
        "exitBranch": 46,
      }, {
        "duration": 400,
        "images": [[3840, 1280]],
        "exitBranch": 46,
        "branching": { "branches": [{ "frameIndex": 41, "weight": 20 }] },
      }, { "duration": 100, "images": [[0, 1408]], "exitBranch": 56 }, {
        "duration": 100,
        "images": [[160, 1408]],
        "exitBranch": 55,
      }, {
        "duration": 100,
        "images": [[320, 1408]],
        "exitBranch": 55,
        "branching": { "branches": [{ "frameIndex": 54, "weight": 10 }] },
      }, { "duration": 100, "images": [[480, 1408]], "exitBranch": 55 }, {
        "duration": 100,
        "images": [[640, 1408]],
        "exitBranch": 55,
      }, { "duration": 100, "images": [[320, 1408]], "exitBranch": 55 }, {
        "duration": 100,
        "images": [[480, 1408]],
        "exitBranch": 55,
      }, { "duration": 100, "images": [[640, 1408]], "exitBranch": 55 }, {
        "duration": 300,
        "images": [[320, 1408]],
        "exitBranch": 55,
      }, { "duration": 100, "images": [[800, 1408]], "exitBranch": 56 }, {
        "duration": 100,
        "images": [[960, 1408]],
        "exitBranch": 57,
      }, { "duration": 100, "images": [[1120, 1408]], "exitBranch": 58 }, {
        "duration": 100,
        "images": [[1280, 1408]],
        "exitBranch": 59,
      }, { "duration": 100, "images": [[1440, 1408]], "exitBranch": 60 }, { "duration": 100, "images": [[0, 0]] }],
    },
    "Announce": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 41 }, {
        "duration": 100,
        "images": [[1600, 1408]],
        "exitBranch": 2,
        "sound": "7",
      }, { "duration": 100, "images": [[1760, 1408]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[1920, 1408]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[2080, 1408]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[2240, 1408]],
        "exitBranch": 6,
      }, { "duration": 100, "images": [[2400, 1408]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[2560, 1408]],
        "exitBranch": 8,
      }, { "duration": 100, "images": [[2720, 1408]], "exitBranch": 9 }, {
        "duration": 100,
        "images": [[2880, 1408]],
        "exitBranch": 39,
      }, { "duration": 100, "images": [[3040, 1408]], "exitBranch": 39 }, {
        "duration": 80,
        "images": [[3200, 1408]],
        "exitBranch": 12,
      }, { "duration": 80, "images": [[3360, 1408]], "exitBranch": 13 }, {
        "duration": 90,
        "images": [[3520, 1408]],
        "exitBranch": 14,
      }, { "duration": 120, "images": [[3680, 1408]], "exitBranch": 19, "sound": "23" }, {
        "duration": 100,
        "images": [[3840, 1408]],
        "exitBranch": 19,
      }, { "duration": 80, "images": [[0, 1536]], "exitBranch": 19 }, {
        "duration": 80,
        "images": [[160, 1536]],
        "exitBranch": 19,
      }, { "duration": 80, "images": [[320, 1536]], "exitBranch": 19, "sound": "28" }, {
        "duration": 120,
        "images": [[480, 1536]],
        "exitBranch": 20,
      }, { "duration": 300, "images": [[640, 1536]], "exitBranch": 26 }, {
        "duration": 100,
        "images": [[640, 1536], [800, 1536]],
        "exitBranch": 26,
      }, { "duration": 200, "images": [[640, 1536], [960, 1536]], "exitBranch": 26 }, {
        "duration": 100,
        "images": [[800, 1536], [640, 1536]],
        "exitBranch": 26,
      }, { "duration": 200, "images": [[640, 1536]], "exitBranch": 26 }, {
        "duration": 100,
        "images": [[640, 1536], [800, 1536]],
        "exitBranch": 26,
      }, { "duration": 100, "images": [[1120, 1536]], "exitBranch": 27 }, {
        "duration": 100,
        "images": [[1280, 1536]],
        "exitBranch": 28,
      }, {
        "duration": 100,
        "images": [[1440, 1536]],
        "exitBranch": 29,
        "branching": { "branches": [{ "frameIndex": 41, "weight": 100 }] },
      }, { "duration": 100, "images": [[1600, 1536]], "exitBranch": 30, "sound": "11" }, {
        "duration": 100,
        "images": [[1760, 1536]],
        "exitBranch": 31,
      }, { "duration": 100, "images": [[1920, 1536]], "exitBranch": 32 }, {
        "duration": 100,
        "images": [[2080, 1536]],
        "exitBranch": 33,
      }, { "duration": 100, "images": [[2240, 1536]], "exitBranch": 34 }, {
        "duration": 100,
        "images": [[2400, 1536]],
        "exitBranch": 35,
      }, { "duration": 100, "images": [[2560, 1536]], "exitBranch": 36 }, {
        "duration": 100,
        "images": [[2720, 1536]],
        "exitBranch": 37,
      }, { "duration": 100, "images": [[2880, 1536]], "exitBranch": 38 }, {
        "duration": 100,
        "images": [[3040, 1536]],
        "exitBranch": 0,
      }, { "duration": 150, "images": [[3200, 1536]], "exitBranch": 40 }, {
        "duration": 150,
        "images": [[3360, 1536]],
        "exitBranch": 0,
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "GetAttention": {
      "frames": [{ "duration": 80, "images": [[0, 0]], "exitBranch": 12 }, {
        "duration": 100,
        "images": [[3520, 1536]],
        "exitBranch": 0,
      }, { "duration": 150, "images": [[3680, 1536]], "exitBranch": 1 }, {
        "duration": 80,
        "images": [[3840, 1536]],
        "exitBranch": 2,
        "sound": "9",
      }, { "duration": 80, "images": [[0, 1664]], "exitBranch": 5 }, {
        "duration": 80,
        "images": [[160, 1664]],
        "exitBranch": 6,
      }, { "duration": 80, "images": [[320, 1664]], "exitBranch": 7 }, {
        "duration": 80,
        "images": [[480, 1664]],
        "exitBranch": 8,
      }, { "duration": 100, "images": [[640, 1664]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[800, 1664]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[960, 1664]], "exitBranch": 11 }, {
        "duration": 100,
        "images": [[1120, 1664]],
        "exitBranch": 12,
      }, { "duration": 100, "images": [[0, 0]] }],
    },
    "Idle2_1": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 29 }, {
        "duration": 100,
        "images": [[1280, 1664]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[1440, 1664]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[1600, 1664]],
        "exitBranch": 2,
      }, { "duration": 300, "images": [[1760, 1664]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[1920, 1664]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[2080, 1664]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[2240, 1664]],
        "exitBranch": 6,
      }, { "duration": 100, "images": [[2400, 1664]], "exitBranch": 7 }, {
        "duration": 350,
        "images": [[2560, 1664]],
        "exitBranch": 8,
      }, { "duration": 100, "images": [[2720, 1664]], "exitBranch": 9 }, {
        "duration": 100,
        "images": [[2880, 1664]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[3040, 1664]], "exitBranch": 11 }, {
        "duration": 100,
        "images": [[3200, 1664]],
        "exitBranch": 12,
      }, { "duration": 100, "images": [[3360, 1664]], "exitBranch": 13 }, {
        "duration": 100,
        "images": [[3520, 1664]],
        "exitBranch": 14,
      }, {
        "duration": 4000,
        "images": [[3680, 1664]],
        "exitBranch": 15,
        "branching": { "branches": [{ "frameIndex": 17, "weight": 20 }, { "frameIndex": 23, "weight": 30 }] },
      }, { "duration": 100, "images": [[3840, 1664]], "exitBranch": 15 }, {
        "duration": 100,
        "images": [[0, 1792]],
        "exitBranch": 17,
      }, { "duration": 2000, "images": [[160, 1792]], "exitBranch": 18 }, {
        "duration": 100,
        "images": [[0, 1792]],
        "exitBranch": 17,
      }, { "duration": 100, "images": [[3840, 1664]], "exitBranch": 16 }, {
        "duration": 100,
        "images": [[3680, 1664]],
        "exitBranch": 14,
        "branching": { "branches": [{ "frameIndex": 16, "weight": 100 }] },
      }, { "duration": 100, "images": [[320, 1792]], "exitBranch": 15 }, {
        "duration": 100,
        "images": [[480, 1792]],
        "exitBranch": 23,
      }, { "duration": 100, "images": [[640, 1792]], "exitBranch": 24 }, {
        "duration": 2500,
        "images": [[640, 1792], [800, 1792]],
        "exitBranch": 25,
      }, { "duration": 100, "images": [[480, 1792]], "exitBranch": 28 }, {
        "duration": 100,
        "images": [[320, 1792]],
        "exitBranch": 15,
        "branching": { "branches": [{ "frameIndex": 16, "weight": 50 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "GestureLeft": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 6 }, {
        "duration": 100,
        "images": [[960, 1792]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[1120, 1792]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[1280, 1792]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[1440, 1792]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[1600, 1792]],
        "exitBranch": 4,
        "branching": { "branches": [{ "frameIndex": 6, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "Surprised": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 16 }, {
        "duration": 80,
        "images": [[1760, 1792]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[1920, 1792]], "exitBranch": 1 }, {
        "duration": 200,
        "images": [[2080, 1792]],
        "exitBranch": 2,
      }, { "duration": 80, "images": [[2240, 1792]], "exitBranch": 5, "sound": "24" }, {
        "duration": 80,
        "images": [[2400, 1792]],
        "exitBranch": 6,
      }, { "duration": 80, "images": [[2560, 1792]], "exitBranch": 7 }, {
        "duration": 80,
        "images": [[2720, 1792]],
        "exitBranch": 11,
      }, { "duration": 80, "images": [[2720, 1792], [2880, 1792]], "exitBranch": 11 }, {
        "duration": 100,
        "images": [[2720, 1792], [3040, 1792]],
        "exitBranch": 10,
      }, { "duration": 80, "images": [[2720, 1792], [2880, 1792]], "exitBranch": 11 }, {
        "duration": 80,
        "images": [[3200, 1792]],
        "exitBranch": 12,
      }, {
        "duration": 80,
        "images": [[3360, 1792]],
        "exitBranch": 13,
        "branching": { "branches": [{ "frameIndex": 16, "weight": 100 }] },
      }, { "duration": 100, "images": [[3520, 1792]], "exitBranch": 14 }, {
        "duration": 100,
        "images": [[3680, 1792]],
        "exitBranch": 15,
      }, { "duration": 100, "images": [[3840, 1792]], "exitBranch": 0 }, { "duration": 0 }], "useExitBranching": true,
    },
    "Idle1_5": {
      "frames": [{ "duration": 100, "images": [[0, 1920]], "exitBranch": 15 }, {
        "duration": 100,
        "images": [[160, 1920]],
        "exitBranch": 14,
      }, { "duration": 100, "images": [[320, 1920]], "exitBranch": 13 }, {
        "duration": 100,
        "images": [[480, 1920]],
        "exitBranch": 12,
      }, { "duration": 600, "images": [[640, 1920]], "exitBranch": 11 }, {
        "duration": 100,
        "images": [[640, 1920], [800, 1920]],
        "exitBranch": 8,
      }, { "duration": 200, "images": [[640, 1920], [960, 1920]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[640, 1920], [800, 1920]],
        "exitBranch": 8,
        "branching": {
          "branches": [{ "frameIndex": 8, "weight": 40 }, {
            "frameIndex": 9,
            "weight": 30,
          }, { "frameIndex": 10, "weight": 30 }],
        },
      }, {
        "duration": 3000,
        "images": [[640, 1920]],
        "exitBranch": 11,
        "branching": { "branches": [{ "frameIndex": 4, "weight": 100 }] },
      }, {
        "duration": 700,
        "images": [[640, 1920]],
        "exitBranch": 11,
        "branching": { "branches": [{ "frameIndex": 11, "weight": 100 }] },
      }, { "duration": 300, "images": [[640, 1920]], "exitBranch": 11 }, {
        "duration": 100,
        "images": [[480, 1920]],
        "exitBranch": 12,
      }, { "duration": 100, "images": [[320, 1920]], "exitBranch": 13 }, {
        "duration": 100,
        "images": [[160, 1920]],
        "exitBranch": 14,
      }, { "duration": 100, "images": [[0, 1920]], "exitBranch": 15 }, { "duration": 100, "images": [[0, 0]] }],
    },
    "Idle1_4": {
      "frames": [{ "duration": 100, "images": [[1120, 1920]], "exitBranch": 15 }, {
        "duration": 100,
        "images": [[1280, 1920]],
        "exitBranch": 14,
      }, { "duration": 100, "images": [[1440, 1920]], "exitBranch": 13 }, {
        "duration": 100,
        "images": [[1600, 1920]],
        "exitBranch": 12,
      }, { "duration": 500, "images": [[1760, 1920]], "exitBranch": 11 }, {
        "duration": 100,
        "images": [[1760, 1920], [1920, 1920]],
        "exitBranch": 10,
      }, { "duration": 200, "images": [[1760, 1920], [2080, 1920]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[1760, 1920], [1920, 1920]],
        "exitBranch": 10,
        "branching": {
          "branches": [{ "frameIndex": 8, "weight": 35 }, {
            "frameIndex": 9,
            "weight": 35,
          }, { "frameIndex": 10, "weight": 30 }],
        },
      }, {
        "duration": 3200,
        "images": [[1760, 1920]],
        "exitBranch": 11,
        "branching": { "branches": [{ "frameIndex": 4, "weight": 100 }] },
      }, {
        "duration": 700,
        "images": [[1760, 1920]],
        "exitBranch": 11,
        "branching": { "branches": [{ "frameIndex": 11, "weight": 100 }] },
      }, { "duration": 300, "images": [[1760, 1920]], "exitBranch": 11 }, {
        "duration": 100,
        "images": [[1600, 1920]],
        "exitBranch": 12,
      }, { "duration": 100, "images": [[1440, 1920]], "exitBranch": 13 }, {
        "duration": 100,
        "images": [[1280, 1920]],
        "exitBranch": 14,
      }, { "duration": 100, "images": [[1120, 1920]], "exitBranch": 15 }, { "duration": 100, "images": [[0, 0]] }],
    },
    "LookRight": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 6 }, {
        "duration": 100,
        "images": [[2720, 1024]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[2880, 1024]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[3040, 1024]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[3200, 1024]], "exitBranch": 3 }, {
        "duration": 10,
        "images": [[3520, 1024], [3360, 1024]],
        "exitBranch": 4,
      }, { "duration": 0 }],
    },
    "GestureUp": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 6 }, {
        "duration": 100,
        "images": [[2880, 1920]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[3040, 1920]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[3200, 1920]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[3360, 1920]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[3520, 1920]],
        "exitBranch": 4,
        "branching": { "branches": [{ "frameIndex": 6, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "Idle1_1": {
      "frames": [{ "duration": 150, "images": [[3680, 1920]], "exitBranch": 12 }, {
        "duration": 150,
        "images": [[3840, 1920]],
      }, { "duration": 150, "images": [[0, 2048]] }, { "duration": 150, "images": [[160, 2048]] }, {
        "duration": 150,
        "images": [[320, 2048]],
      }, { "duration": 150, "images": [[480, 2048]] }, {
        "duration": 900,
        "images": [[640, 2048]],
        "exitBranch": 7,
      }, { "duration": 150, "images": [[480, 2048]], "exitBranch": 8 }, {
        "duration": 150,
        "images": [[320, 2048]],
        "exitBranch": 9,
      }, { "duration": 150, "images": [[160, 2048]], "exitBranch": 10 }, {
        "duration": 150,
        "images": [[0, 2048]],
        "exitBranch": 11,
      }, { "duration": 150, "images": [[3680, 1920], [3840, 1920]], "exitBranch": 12 }, {
        "duration": 1200,
        "images": [[0, 0]],
        "exitBranch": 13,
        "branching": { "branches": [{ "frameIndex": 0, "weight": 50 }] },
      }, { "duration": 0 }],
    },
    "Idle1_3": {
      "frames": [{ "duration": 120, "images": [[800, 2048]], "exitBranch": 15 }, {
        "duration": 120,
        "images": [[960, 2048]],
        "exitBranch": 14,
      }, { "duration": 120, "images": [[1120, 2048]] }, {
        "duration": 150,
        "images": [[1280, 2048]],
        "exitBranch": 12,
      }, { "duration": 800, "images": [[1440, 2048]], "exitBranch": 11 }, {
        "duration": 100,
        "images": [[1440, 2048], [1600, 2048]],
        "exitBranch": 9,
      }, { "duration": 300, "images": [[1440, 2048], [1760, 2048]] }, {
        "duration": 100,
        "images": [[1440, 2048], [1600, 2048]],
        "branching": {
          "branches": [{ "frameIndex": 8, "weight": 40 }, {
            "frameIndex": 9,
            "weight": 30,
          }, { "frameIndex": 10, "weight": 30 }],
        },
      }, {
        "duration": 3500,
        "images": [[1440, 2048]],
        "exitBranch": 11,
        "branching": { "branches": [{ "frameIndex": 4, "weight": 100 }] },
      }, {
        "duration": 600,
        "images": [[1440, 2048]],
        "exitBranch": 11,
        "branching": { "branches": [{ "frameIndex": 11, "weight": 100 }] },
      }, { "duration": 100, "images": [[1440, 2048]], "exitBranch": 11 }, {
        "duration": 120,
        "images": [[1280, 2048]],
        "exitBranch": 12,
      }, { "duration": 120, "images": [[1120, 2048]], "exitBranch": 13 }, {
        "duration": 150,
        "images": [[960, 2048]],
        "exitBranch": 14,
      }, { "duration": 120, "images": [[800, 2048]], "exitBranch": 15 }, { "duration": 100, "images": [[0, 0]] }],
    },
    "Idle1_2": {
      "frames": [{ "duration": 100, "images": [[1920, 2048]], "exitBranch": 15 }, {
        "duration": 100,
        "images": [[3360, 1536]],
        "exitBranch": 14,
      }, { "duration": 150, "images": [[2080, 2048]], "exitBranch": 13 }, {
        "duration": 150,
        "images": [[2240, 2048]],
        "exitBranch": 12,
      }, { "duration": 500, "images": [[2400, 2048]], "exitBranch": 11 }, {
        "duration": 100,
        "images": [[2400, 2048], [2560, 2048]],
        "exitBranch": 8,
        "branching": { "branches": [{ "frameIndex": 8, "weight": 6 }] },
      }, { "duration": 250, "images": [[2400, 2048], [2720, 2048]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[2400, 2048], [2560, 2048]],
        "exitBranch": 10,
        "branching": {
          "branches": [{ "frameIndex": 8, "weight": 33 }, {
            "frameIndex": 9,
            "weight": 33,
          }, { "frameIndex": 10, "weight": 34 }],
        },
      }, {
        "duration": 500,
        "images": [[2400, 2048]],
        "exitBranch": 11,
        "branching": { "branches": [{ "frameIndex": 11, "weight": 100 }] },
      }, {
        "duration": 3000,
        "images": [[2400, 2048]],
        "exitBranch": 11,
        "branching": { "branches": [{ "frameIndex": 4, "weight": 100 }] },
      }, { "duration": 100, "images": [[2400, 2048]], "exitBranch": 11 }, {
        "duration": 150,
        "images": [[2240, 2048]],
        "exitBranch": 12,
      }, { "duration": 150, "images": [[2080, 2048]], "exitBranch": 13 }, {
        "duration": 150,
        "images": [[3360, 1536]],
        "exitBranch": 14,
      }, { "duration": 150, "images": [[1920, 2048]], "exitBranch": 15 }, { "duration": 150, "images": [[0, 0]] }],
    },
    "Read": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 20 }, {
        "duration": 100,
        "images": [[2880, 2048]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[3040, 2048]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[3200, 2048]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[3360, 2048]], "exitBranch": 3 }, {
        "duration": 250,
        "images": [[3520, 2048]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[3680, 2048]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[3840, 2048]],
        "exitBranch": 6,
      }, { "duration": 100, "images": [[0, 2176]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[160, 2176]],
        "exitBranch": 8,
        "sound": "28",
      }, { "duration": 100, "images": [[320, 2176]], "exitBranch": 9 }, {
        "duration": 100,
        "images": [[480, 2176]],
        "exitBranch": 10,
      }, { "duration": 400, "images": [[640, 2176]], "exitBranch": 11 }, {
        "duration": 100,
        "images": [[640, 2176], [800, 2176]],
        "exitBranch": 11,
      }, { "duration": 200, "images": [[640, 2176], [960, 2176]], "exitBranch": 11 }, {
        "duration": 400,
        "images": [[640, 2176]],
        "exitBranch": 11,
      }, { "duration": 80, "images": [[1120, 2176]], "exitBranch": 11 }, {
        "duration": 80,
        "images": [[1280, 2176]],
        "exitBranch": 11,
      }, { "duration": 80, "images": [[1440, 2176]], "exitBranch": 17 }, {
        "duration": 100,
        "images": [[1600, 2176]],
        "exitBranch": 18,
      }, { "duration": 0 }],
    },
    "Processing": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 85 }, {
        "duration": 100,
        "images": [[1760, 2176]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[1920, 2176]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[2080, 2176]],
        "exitBranch": 2,
      }, { "duration": 300, "images": [[2240, 2176]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[2400, 2176]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[2560, 2176]], "exitBranch": 5 }, {
        "duration": 300,
        "images": [[2720, 2176]],
        "exitBranch": 6,
      }, { "duration": 100, "images": [[2880, 2176]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[3040, 2176]],
        "exitBranch": 8,
      }, { "duration": 100, "images": [[3200, 2176]], "exitBranch": 9 }, {
        "duration": 300,
        "images": [[3360, 2176]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[3520, 2176]], "exitBranch": 10, "sound": "29" }, {
        "duration": 100,
        "images": [[3680, 2176]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[3840, 2176]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[3680, 2176]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[0, 2304]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[3680, 2176]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[160, 2304]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[3680, 2176]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[0, 2304]], "exitBranch": 10, "sound": "29" }, {
        "duration": 100,
        "images": [[3680, 2176]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[320, 2304]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[3680, 2176]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[0, 2304]], "exitBranch": 10 }, {
        "duration": 400,
        "images": [[3680, 2176]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[480, 2304]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[640, 2304]],
        "exitBranch": 26,
      }, { "duration": 100, "images": [[800, 2304]], "exitBranch": 27 }, {
        "duration": 100,
        "images": [[960, 2304]],
        "exitBranch": 28,
        "branching": {
          "branches": [{ "frameIndex": 30, "weight": 33 }, {
            "frameIndex": 38,
            "weight": 33,
          }, { "frameIndex": 48, "weight": 34 }],
        },
      }, { "duration": 600, "images": [[960, 2304]], "exitBranch": 28 }, {
        "duration": 100,
        "images": [[960, 2304], [1120, 2304]],
        "exitBranch": 29,
      }, { "duration": 200, "images": [[960, 2304], [1280, 2304]], "exitBranch": 31 }, {
        "duration": 100,
        "images": [[960, 2304], [1120, 2304]],
        "exitBranch": 30,
      }, { "duration": 600, "images": [[960, 2304]], "exitBranch": 35 }, {
        "duration": 100,
        "images": [[800, 2304]],
        "exitBranch": 36,
      }, { "duration": 100, "images": [[640, 2304]], "exitBranch": 37 }, {
        "duration": 100,
        "images": [[480, 2304]],
        "exitBranch": 10,
        "branching": { "branches": [{ "frameIndex": 11, "weight": 100 }] },
      }, {
        "duration": 500,
        "images": [[960, 2304]],
        "exitBranch": 35,
        "branching": { "branches": [{ "frameIndex": 39, "weight": 50 }, { "frameIndex": 67, "weight": 50 }] },
      }, { "duration": 100, "images": [[1440, 2304]], "exitBranch": 38 }, {
        "duration": 100,
        "images": [[1600, 2304]],
        "exitBranch": 39,
      }, { "duration": 1200, "images": [[1760, 2304]], "exitBranch": 40, "sound": "20" }, {
        "duration": 100,
        "images": [[1600, 2304]],
        "exitBranch": 39,
      }, { "duration": 100, "images": [[1440, 2304]], "exitBranch": 44 }, {
        "duration": 100,
        "images": [[960, 2304]],
        "exitBranch": 45,
      }, { "duration": 100, "images": [[800, 2304]], "exitBranch": 46 }, {
        "duration": 100,
        "images": [[640, 2304]],
        "exitBranch": 47,
      }, {
        "duration": 100,
        "images": [[480, 2304]],
        "exitBranch": 10,
        "branching": { "branches": [{ "frameIndex": 11, "weight": 100 }] },
      }, {
        "duration": 500,
        "images": [[960, 2304]],
        "exitBranch": 35,
        "branching": { "branches": [{ "frameIndex": 49, "weight": 50 }, { "frameIndex": 78, "weight": 50 }] },
      }, { "duration": 100, "images": [[1920, 2304]], "exitBranch": 48 }, {
        "duration": 100,
        "images": [[2080, 2304]],
        "exitBranch": 49,
      }, { "duration": 1200, "images": [[2240, 2304]], "exitBranch": 50 }, {
        "duration": 100,
        "images": [[2240, 2304], [2400, 2304]],
        "exitBranch": 51,
      }, { "duration": 100, "images": [[2240, 2304], [2560, 2304]], "exitBranch": 52 }, {
        "duration": 100,
        "images": [[2240, 2304], [2400, 2304]],
        "exitBranch": 51,
      }, { "duration": 900, "images": [[2720, 2304]], "exitBranch": 50 }, {
        "duration": 100,
        "images": [[2080, 2304]],
        "exitBranch": 57,
      }, { "duration": 100, "images": [[1920, 2304]], "exitBranch": 58 }, {
        "duration": 500,
        "images": [[960, 2304]],
        "exitBranch": 59,
      }, { "duration": 100, "images": [[960, 2304]], "exitBranch": 60 }, {
        "duration": 100,
        "images": [[800, 2304]],
        "exitBranch": 61,
      }, { "duration": 100, "images": [[640, 2304]], "exitBranch": 62 }, {
        "duration": 100,
        "images": [[480, 2304]],
        "exitBranch": 10,
        "branching": { "branches": [{ "frameIndex": 11, "weight": 100 }] },
      }, { "duration": 100, "images": [[960, 2304]], "exitBranch": 64 }, {
        "duration": 100,
        "images": [[800, 2304]],
        "exitBranch": 65,
      }, { "duration": 100, "images": [[640, 2304]], "exitBranch": 66 }, {
        "duration": 100,
        "images": [[480, 2304]],
        "exitBranch": 10,
        "branching": { "branches": [{ "frameIndex": 11, "weight": 100 }] },
      }, { "duration": 100, "images": [[2880, 2304]], "exitBranch": 74, "sound": "24" }, {
        "duration": 700,
        "images": [[3040, 2304]],
        "exitBranch": 67,
      }, { "duration": 100, "images": [[3200, 2304]], "exitBranch": 68 }, {
        "duration": 100,
        "images": [[3360, 2304]],
        "exitBranch": 69,
      }, { "duration": 100, "images": [[3200, 2304]], "exitBranch": 68 }, {
        "duration": 500,
        "images": [[3040, 2304]],
        "exitBranch": 73,
      }, { "duration": 100, "images": [[2880, 2304]], "exitBranch": 74 }, {
        "duration": 800,
        "images": [[960, 2304]],
        "exitBranch": 75,
      }, { "duration": 100, "images": [[800, 2304]], "exitBranch": 76 }, {
        "duration": 100,
        "images": [[640, 2304]],
        "exitBranch": 77,
      }, {
        "duration": 100,
        "images": [[480, 2304]],
        "exitBranch": 10,
        "branching": { "branches": [{ "frameIndex": 11, "weight": 100 }] },
      }, { "duration": 100, "images": [[3520, 2304]], "exitBranch": 83 }, {
        "duration": 1000,
        "images": [[3680, 2304]],
        "exitBranch": 83,
      }, { "duration": 100, "images": [[3520, 2304]], "exitBranch": 83 }, {
        "duration": 800,
        "images": [[960, 2304]],
        "exitBranch": 80,
      }, { "duration": 100, "images": [[800, 2304]], "exitBranch": 83 }, {
        "duration": 100,
        "images": [[640, 2304]],
        "exitBranch": 84,
      }, {
        "duration": 100,
        "images": [[480, 2304]],
        "exitBranch": 10,
        "branching": { "branches": [{ "frameIndex": 11, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "Alert": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[640, 2432]],
        "exitBranch": 0,
        "branching": { "branches": [{ "frameIndex": 3, "weight": 100 }] },
      }, { "duration": 100, "images": [[800, 2432]], "exitBranch": 0 }, { "duration": 0 }], "useExitBranching": true,
    },
    "DoMagic1": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 22 }, {
        "duration": 100,
        "images": [[960, 2432]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[1120, 2432]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[1280, 2432]],
        "exitBranch": 2,
      }, { "duration": 200, "images": [[1440, 2432]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[1600, 2432]],
        "exitBranch": 4,
        "branching": { "branches": [{ "frameIndex": 7, "weight": 100 }] },
      }, { "duration": 100, "images": [[1760, 2432]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[1760, 2432]],
        "exitBranch": 5,
        "sound": "27",
      }, { "duration": 100, "images": [[1920, 2432]], "exitBranch": 6 }, {
        "duration": 100,
        "images": [[2080, 2432]],
        "exitBranch": 8,
      }, { "duration": 100, "images": [[2240, 2432]], "exitBranch": 9 }, {
        "duration": 100,
        "images": [[2400, 2432]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[2560, 2432]], "exitBranch": 11 }, {
        "duration": 100,
        "images": [[2720, 2432]],
        "exitBranch": 12,
      }, { "duration": 100, "images": [[2880, 2432]], "exitBranch": 13, "sound": "19" }, {
        "duration": 80,
        "images": [[3040, 2432]],
        "exitBranch": 13,
      }, { "duration": 80, "images": [[3200, 2432]], "exitBranch": 15 }, {
        "duration": 80,
        "images": [[3360, 2432]],
        "exitBranch": 16,
      }, { "duration": 80, "images": [[3520, 2432]], "exitBranch": 17 }, {
        "duration": 80,
        "images": [[3680, 2432]],
        "exitBranch": 20,
      }, { "duration": 80, "images": [[3840, 2432]], "exitBranch": 21 }, {
        "duration": 100,
        "images": [[0, 2560]],
        "exitBranch": 13,
        "branching": { "branches": [{ "frameIndex": 22, "weight": 100 }] },
      }, { "duration": 0 }],
    },
    "DoMagic2": {
      "frames": [{ "duration": 100, "images": [[160, 2560]], "exitBranch": 12 }, {
        "duration": 100,
        "images": [[320, 2560]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[160, 2560]], "exitBranch": 12 }, {
        "duration": 100,
        "images": [[480, 2560]],
        "exitBranch": 12,
      }, {
        "duration": 100,
        "images": [[640, 2560]],
        "exitBranch": 5,
        "branching": { "branches": [{ "frameIndex": 25, "weight": 100 }] },
      }, { "duration": 100, "images": [[800, 2560]], "exitBranch": 6, "sound": "26" }, {
        "duration": 100,
        "images": [[960, 2560]],
        "exitBranch": 7,
      }, { "duration": 100, "images": [[1120, 2560]], "exitBranch": 8 }, {
        "duration": 100,
        "images": [[1280, 2560]],
        "exitBranch": 9,
      }, { "duration": 100, "images": [[1440, 2560]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[1600, 2560]],
        "exitBranch": 11,
      }, { "duration": 100, "images": [[1760, 2560]], "exitBranch": 12 }, {
        "duration": 100,
        "images": [[2720, 2432]],
        "exitBranch": 13,
      }, { "duration": 100, "images": [[2560, 2432]], "exitBranch": 14 }, {
        "duration": 100,
        "images": [[2400, 2432]],
        "exitBranch": 15,
      }, { "duration": 100, "images": [[2240, 2432]], "exitBranch": 16 }, {
        "duration": 100,
        "images": [[2080, 2432]],
        "exitBranch": 17,
      }, { "duration": 100, "images": [[1920, 2432]], "exitBranch": 18 }, {
        "duration": 100,
        "images": [[1760, 2432]],
        "exitBranch": 19,
      }, { "duration": 100, "images": [[1600, 2432]], "exitBranch": 20 }, {
        "duration": 200,
        "images": [[1440, 2432]],
        "exitBranch": 21,
      }, { "duration": 100, "images": [[1280, 2432]], "exitBranch": 22 }, {
        "duration": 100,
        "images": [[1120, 2432]],
        "exitBranch": 23,
      }, { "duration": 100, "images": [[960, 2432]], "exitBranch": 24 }, {
        "duration": 100,
        "images": [[0, 0]],
        "exitBranch": 25,
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "Confused": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 20 }, {
        "duration": 100,
        "images": [[3680, 3456]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[3840, 3456]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[0, 3584]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[160, 3584]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[320, 3584]],
        "exitBranch": 4,
      }, {
        "duration": 300,
        "images": [[480, 3584]],
        "exitBranch": 5,
        "branching": { "branches": [{ "frameIndex": 8, "weight": 100 }] },
      }, { "duration": 200, "images": [[480, 3584]], "exitBranch": 15 }, {
        "duration": 200,
        "images": [[640, 3584]],
        "exitBranch": 7,
        "sound": "21",
      }, { "duration": 200, "images": [[800, 3584]], "exitBranch": 7 }, {
        "duration": 200,
        "images": [[960, 3584]],
        "exitBranch": 7,
      }, { "duration": 200, "images": [[1120, 3584]], "exitBranch": 7 }, {
        "duration": 200,
        "images": [[480, 3584]],
        "exitBranch": 7,
      }, { "duration": 200, "images": [[640, 3584]], "exitBranch": 7 }, {
        "duration": 200,
        "images": [[800, 3584]],
        "exitBranch": 15,
        "branching": { "branches": [{ "frameIndex": 20, "weight": 100 }] },
      }, { "duration": 100, "images": [[1280, 3584]], "exitBranch": 16 }, {
        "duration": 100,
        "images": [[1440, 3584]],
        "exitBranch": 17,
      }, { "duration": 100, "images": [[1600, 3584]], "exitBranch": 18 }, {
        "duration": 100,
        "images": [[1760, 3584]],
        "exitBranch": 19,
      }, { "duration": 100, "images": [[1920, 3584]], "exitBranch": 0 }, { "duration": 0 }], "useExitBranching": true,
    },
    "LookUpRight": {
      "frames": [{ "duration": 100, "images": [[800, 256]], "exitBranch": 6 }, {
        "duration": 100,
        "images": [[640, 256]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[480, 256]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[320, 256]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[160, 256]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[0, 256]],
        "exitBranch": 4,
      }, { "duration": 0 }],
    },
    "MoveRight": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 14 }, {
        "duration": 100,
        "images": [[1920, 2560]],
        "exitBranch": 0,
      }, { "duration": 150, "images": [[2080, 2560]], "exitBranch": 1 }, {
        "duration": 200,
        "images": [[2240, 2560]],
        "exitBranch": 2,
      }, { "duration": 300, "images": [[2400, 2560]], "exitBranch": 3 }, {
        "duration": 80,
        "images": [[2560, 2560]],
        "exitBranch": 4,
        "sound": "9",
      }, { "duration": 80, "images": [[2720, 2560]], "exitBranch": 7 }, {
        "duration": 80,
        "images": [[2880, 2560]],
        "exitBranch": 8,
      }, {
        "duration": 100,
        "images": [[3040, 2560]],
        "exitBranch": 9,
        "branching": { "branches": [{ "frameIndex": 14, "weight": 100 }] },
      }, { "duration": 100, "images": [[3200, 2560]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[3360, 2560]],
        "exitBranch": 11,
      }, { "duration": 100, "images": [[3520, 2560]], "exitBranch": 12, "sound": "9" }, {
        "duration": 100,
        "images": [[3680, 2560]],
        "exitBranch": 13,
      }, { "duration": 100, "images": [[3840, 2560]], "exitBranch": 0 }, { "duration": 0 }], "useExitBranching": true,
    },
    "LookUpRightReturn": {
      "frames": [{ "duration": 100, "images": [[160, 256]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[320, 256]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[480, 256]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[640, 256]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[800, 256]] }],
    },
    "Reading": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 57 }, {
        "duration": 100,
        "images": [[2880, 2048]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[3040, 2048]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[3200, 2048]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[3360, 2048]], "exitBranch": 3 }, {
        "duration": 200,
        "images": [[3520, 2048]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[3680, 2048]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[3840, 2048]],
        "exitBranch": 6,
      }, { "duration": 100, "images": [[0, 2176]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[160, 2176]],
        "exitBranch": 8,
      }, {
        "duration": 100,
        "images": [[320, 2176]],
        "exitBranch": 9,
        "sound": "28",
        "branching": { "branches": [{ "frameIndex": 12, "weight": 100 }] },
      }, { "duration": 100, "images": [[480, 2176]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[480, 2176]],
        "exitBranch": 10,
      }, {
        "duration": 300,
        "images": [[640, 2176]],
        "exitBranch": 11,
        "branching": { "branches": [{ "frameIndex": 54, "weight": 15 }] },
      }, { "duration": 150, "images": [[640, 2176], [800, 2176]], "exitBranch": 11 }, {
        "duration": 220,
        "images": [[640, 2176], [960, 2176]],
        "exitBranch": 11,
      }, { "duration": 120, "images": [[640, 2176], [800, 2176]], "exitBranch": 11 }, {
        "duration": 250,
        "images": [[640, 2176]],
        "exitBranch": 11,
      }, { "duration": 300, "images": [[640, 2176], [800, 2176]], "exitBranch": 11 }, {
        "duration": 200,
        "images": [[640, 2176], [960, 2176]],
        "exitBranch": 11,
      }, { "duration": 200, "images": [[640, 2176], [800, 2176]], "exitBranch": 11 }, {
        "duration": 190,
        "images": [[640, 2176]],
        "exitBranch": 11,
      }, { "duration": 150, "images": [[640, 2176], [800, 2176]], "exitBranch": 11 }, {
        "duration": 300,
        "images": [[640, 2176], [960, 2176]],
        "exitBranch": 11,
      }, { "duration": 100, "images": [[640, 2176], [800, 2176]], "exitBranch": 11 }, {
        "duration": 210,
        "images": [[640, 2176]],
        "exitBranch": 11,
      }, { "duration": 150, "images": [[640, 2176], [800, 2176]], "exitBranch": 11 }, {
        "duration": 220,
        "images": [[640, 2176], [960, 2176]],
        "exitBranch": 11,
      }, { "duration": 100, "images": [[640, 2176], [800, 2176]], "exitBranch": 11 }, {
        "duration": 100,
        "images": [[640, 2176]],
        "exitBranch": 28,
      }, { "duration": 200, "images": [[2720, 2944]], "exitBranch": 28 }, {
        "duration": 100,
        "images": [[2880, 2944]],
        "exitBranch": 28,
      }, { "duration": 300, "images": [[3040, 2944]], "exitBranch": 29 }, {
        "duration": 150,
        "images": [[3040, 2944], [3200, 2944]],
        "exitBranch": 29,
      }, { "duration": 230, "images": [[3040, 2944], [3360, 2944]], "exitBranch": 29 }, {
        "duration": 200,
        "images": [[3040, 2944], [3200, 2944]],
        "exitBranch": 30,
      }, { "duration": 300, "images": [[3040, 2944]], "exitBranch": 30 }, {
        "duration": 200,
        "images": [[3040, 2944], [3200, 2944]],
        "exitBranch": 30,
      }, { "duration": 250, "images": [[3040, 2944], [3360, 2944]], "exitBranch": 30 }, {
        "duration": 150,
        "images": [[3040, 2944], [3200, 2944]],
        "exitBranch": 30,
      }, { "duration": 240, "images": [[3040, 2944]], "exitBranch": 30 }, {
        "duration": 150,
        "images": [[3040, 2944], [3200, 2944]],
        "exitBranch": 30,
      }, { "duration": 220, "images": [[3040, 2944], [3360, 2944]], "exitBranch": 30 }, {
        "duration": 220,
        "images": [[3040, 2944], [3200, 2944]],
        "exitBranch": 30,
      }, { "duration": 190, "images": [[3040, 2944]], "exitBranch": 30 }, {
        "duration": 100,
        "images": [[3040, 2944]],
        "exitBranch": 30,
      }, { "duration": 180, "images": [[3040, 2944], [3200, 2944]], "exitBranch": 30 }, {
        "duration": 300,
        "images": [[3040, 2944], [3360, 2944]],
        "exitBranch": 30,
      }, { "duration": 390, "images": [[3040, 2944], [3200, 2944]], "exitBranch": 29 }, {
        "duration": 100,
        "images": [[3520, 2944]],
        "exitBranch": 30,
        "sound": "17",
      }, { "duration": 100, "images": [[3680, 2944]], "exitBranch": 51 }, {
        "duration": 100,
        "images": [[3840, 2944]],
        "exitBranch": 52,
      }, { "duration": 100, "images": [[0, 3072]], "exitBranch": 55 }, {
        "duration": 100,
        "images": [[160, 3072]],
        "exitBranch": 55,
      }, { "duration": 100, "images": [[320, 3072]], "exitBranch": 55 }, {
        "duration": 100,
        "images": [[480, 3072]],
        "exitBranch": 56,
      }, {
        "duration": 100,
        "images": [[640, 3072]],
        "exitBranch": 11,
        "branching": { "branches": [{ "frameIndex": 13, "weight": 100 }] },
      }, { "duration": 0 }],
    },
    "GetAttentionContinued": {
      "frames": [{ "duration": 80, "images": [[0, 0]], "exitBranch": 12 }, {
        "duration": 100,
        "images": [[3520, 1536]],
        "exitBranch": 0,
      }, { "duration": 150, "images": [[3680, 1536]], "exitBranch": 1 }, {
        "duration": 80,
        "images": [[3840, 1536]],
        "exitBranch": 2,
        "sound": "9",
      }, { "duration": 80, "images": [[0, 1664]], "exitBranch": 5 }, {
        "duration": 80,
        "images": [[160, 1664]],
        "exitBranch": 6,
      }, { "duration": 80, "images": [[320, 1664]], "exitBranch": 7 }, {
        "duration": 80,
        "images": [[480, 1664]],
        "exitBranch": 8,
      }, { "duration": 100, "images": [[640, 1664]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[800, 1664]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[960, 1664]], "exitBranch": 11 }, {
        "duration": 100,
        "images": [[1120, 1664]],
        "exitBranch": 12,
      }, { "duration": 100, "images": [[0, 0]] }],
    },
    "WriteContinued": {
      "frames": [{ "duration": 100, "images": [[0, 2688]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[160, 2688]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[320, 2688]], "exitBranch": 14 }, {
        "duration": 100,
        "images": [[480, 2688]],
        "exitBranch": 13,
      }, { "duration": 100, "images": [[640, 2688]], "exitBranch": 13, "sound": "15" }, {
        "duration": 100,
        "images": [[800, 2688]],
        "exitBranch": 13,
      }, { "duration": 100, "images": [[960, 2688]], "exitBranch": 13 }, {
        "duration": 100,
        "images": [[1120, 2688]],
        "exitBranch": 13,
        "sound": "22",
      }, { "duration": 100, "images": [[1280, 2688]], "exitBranch": 13 }, {
        "duration": 100,
        "images": [[1440, 2688]],
        "exitBranch": 13,
      }, { "duration": 100, "images": [[1600, 2688]], "exitBranch": 13 }, {
        "duration": 100,
        "images": [[1760, 2688]],
        "exitBranch": 13,
      }, { "duration": 100, "images": [[480, 2688]], "exitBranch": 13 }, {
        "duration": 100,
        "images": [[320, 2688]],
        "exitBranch": 14,
      }, { "duration": 100, "images": [[160, 2688]], "exitBranch": 15 }, {
        "duration": 100,
        "images": [[0, 2688]],
        "exitBranch": 16,
      }, {
        "duration": 100,
        "images": [[1920, 2688]],
        "exitBranch": 17,
        "branching": { "branches": [{ "frameIndex": 28, "weight": 100 }] },
      }, { "duration": 100, "images": [[2080, 2688]], "exitBranch": 18 }, {
        "duration": 100,
        "images": [[2240, 2688]],
        "exitBranch": 19,
      }, { "duration": 100, "images": [[2400, 2688]], "exitBranch": 20 }, {
        "duration": 100,
        "images": [[2560, 2688]],
        "exitBranch": 21,
      }, { "duration": 100, "images": [[2720, 2688]], "exitBranch": 22 }, {
        "duration": 100,
        "images": [[2880, 2688]],
        "exitBranch": 23,
      }, { "duration": 300, "images": [[3040, 2688]], "exitBranch": 24 }, {
        "duration": 100,
        "images": [[3200, 2688]],
        "exitBranch": 25,
      }, { "duration": 100, "images": [[3360, 2688]], "exitBranch": 26 }, {
        "duration": 100,
        "images": [[3520, 2688]],
        "exitBranch": 27,
      }, { "duration": 100, "images": [[0, 0]], "exitBranch": 28 }, { "duration": 0 }],
    },
    "LookRightBlink": {
      "frames": [{
        "duration": 100,
        "images": [[3520, 1024], [3360, 1024], [320, 3328]],
        "exitBranch": 3,
      }, {
        "duration": 200,
        "images": [[3520, 1024], [3360, 1024], [480, 3328]],
        "exitBranch": 3,
        "sound": "12",
      }, { "duration": 100, "images": [[3520, 1024], [3360, 1024], [320, 3328]] }, {
        "duration": 100,
        "images": [[3520, 1024], [3360, 1024]],
        "exitBranch": 4,
        "branching": { "branches": [{ "frameIndex": 9, "weight": 100 }] },
      }, { "duration": 100, "images": [[3200, 1024]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[3040, 1024]],
        "exitBranch": 6,
      }, { "duration": 100, "images": [[2880, 1024]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[2720, 1024]],
        "exitBranch": 8,
      }, { "duration": 100, "images": [[0, 0]], "exitBranch": 9 }, { "duration": 0 }],
    },
    "Wave": {
      "frames": [{ "duration": 80, "images": [[0, 0]], "exitBranch": 18 }, {
        "duration": 80,
        "images": [[2400, 3584]],
        "exitBranch": 0,
      }, { "duration": 80, "images": [[2560, 3584]], "exitBranch": 1 }, {
        "duration": 80,
        "images": [[2720, 3584]],
        "exitBranch": 2,
      }, { "duration": 80, "images": [[2880, 3584]], "exitBranch": 3 }, {
        "duration": 200,
        "images": [[3040, 3584]],
        "exitBranch": 4,
      }, { "duration": 80, "images": [[3200, 3584]], "exitBranch": 4 }, {
        "duration": 80,
        "images": [[3360, 3584]],
        "exitBranch": 4,
      }, { "duration": 80, "images": [[3200, 3584]], "exitBranch": 4 }, {
        "duration": 80,
        "images": [[3040, 3584]],
        "exitBranch": 4,
      }, { "duration": 80, "images": [[3520, 3584]], "exitBranch": 4 }, {
        "duration": 120,
        "images": [[3680, 3584]],
        "exitBranch": 4,
      }, { "duration": 80, "images": [[3520, 3584]], "exitBranch": 4 }, {
        "duration": 80,
        "images": [[3040, 3584]],
        "exitBranch": 4,
      }, { "duration": 80, "images": [[3200, 3584]], "exitBranch": 4 }, {
        "duration": 100,
        "images": [[3360, 3584]],
        "exitBranch": 4,
      }, { "duration": 80, "images": [[3200, 3584]], "exitBranch": 4 }, {
        "duration": 100,
        "images": [[3040, 3584]],
        "exitBranch": 4,
        "branching": { "branches": [{ "frameIndex": 18, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "Search": {
      "frames": [{ "duration": 100, "images": [[0, 0]] }, {
        "duration": 120,
        "images": [[480, 512]],
      }, { "duration": 120, "images": [[640, 512]] }, { "duration": 120, "images": [[800, 512]] }, {
        "duration": 120,
        "images": [[960, 512]],
      }, { "duration": 300, "images": [[1120, 512]] }, { "duration": 150, "images": [[1280, 512]] }, {
        "duration": 400,
        "images": [[1440, 512]],
        "branching": { "branches": [{ "frameIndex": 15, "weight": 40 }, { "frameIndex": 49, "weight": 40 }] },
      }, { "duration": 150, "images": [[1440, 512], [1600, 512]], "sound": "12" }, {
        "duration": 250,
        "images": [[1440, 512], [1760, 512]],
      }, { "duration": 120, "images": [[1440, 512], [1600, 512]] }, {
        "duration": 200,
        "images": [[1440, 512]],
      }, { "duration": 500, "images": [[1920, 512]] }, { "duration": 200, "images": [[2080, 512]] }, {
        "duration": 200,
        "images": [[1440, 512]],
      }, { "duration": 200, "images": [[2240, 512]] }, { "duration": 400, "images": [[2400, 512]] }, {
        "duration": 200,
        "images": [[2560, 512]],
      }, { "duration": 600, "images": [[2720, 512]] }, { "duration": 200, "images": [[2880, 512]] }, {
        "duration": 200,
        "images": [[3040, 512]],
      }, { "duration": 700, "images": [[3200, 512]] }, { "duration": 200, "images": [[3360, 512]] }, {
        "duration": 200,
        "images": [[3520, 512]],
        "branching": { "branches": [{ "frameIndex": 24, "weight": 50 }, { "frameIndex": 25, "weight": 50 }] },
      }, { "duration": 800, "images": [[3680, 512]], "sound": "20" }, {
        "duration": 200,
        "images": [[3680, 512]],
      }, { "duration": 200, "images": [[3680, 512]] }, { "duration": 200, "images": [[3840, 512]] }, {
        "duration": 300,
        "images": [[0, 640]],
        "branching": { "branches": [{ "frameIndex": 70, "weight": 20 }] },
      }, { "duration": 200, "images": [[160, 640]] }, { "duration": 700, "images": [[320, 640]] }, {
        "duration": 200,
        "images": [[480, 640]],
      }, { "duration": 200, "images": [[640, 640]] }, { "duration": 300, "images": [[800, 640]] }, {
        "duration": 300,
        "images": [[960, 640]],
      }, {
        "duration": 200,
        "images": [[1120, 640]],
        "branching": { "branches": [{ "frameIndex": 36, "weight": 60 }, { "frameIndex": 37, "weight": 40 }] },
      }, { "duration": 1500, "images": [[1280, 640]] }, { "duration": 150, "images": [[1280, 640]] }, {
        "duration": 200,
        "images": [[1440, 640]],
      }, {
        "duration": 200,
        "images": [[1600, 640]],
        "branching": { "branches": [{ "frameIndex": 59, "weight": 25 }] },
      }, { "duration": 200, "images": [[1760, 640]] }, { "duration": 500, "images": [[1920, 640]] }, {
        "duration": 200,
        "images": [[2080, 640]],
      }, { "duration": 200, "images": [[2240, 640]] }, { "duration": 200, "images": [[2400, 640]] }, {
        "duration": 200,
        "images": [[2560, 640]],
      }, { "duration": 200, "images": [[2720, 640]] }, { "duration": 700, "images": [[2880, 640]] }, {
        "duration": 250,
        "images": [[3040, 640]],
        "branching": { "branches": [{ "frameIndex": 84, "weight": 80 }] },
      }, { "duration": 300, "images": [[3040, 640]] }, { "duration": 600, "images": [[2880, 640]] }, {
        "duration": 200,
        "images": [[2720, 640]],
      }, { "duration": 200, "images": [[2560, 640]] }, { "duration": 200, "images": [[2400, 640]] }, {
        "duration": 150,
        "images": [[2240, 640]],
      }, { "duration": 200, "images": [[2080, 640]] }, { "duration": 500, "images": [[1920, 640]] }, {
        "duration": 200,
        "images": [[1760, 640]],
      }, { "duration": 200, "images": [[1600, 640]] }, { "duration": 200, "images": [[1440, 640]] }, {
        "duration": 800,
        "images": [[1280, 640]],
        "sound": "3",
        "branching": { "branches": [{ "frameIndex": 62, "weight": 40 }] },
      }, { "duration": 200, "images": [[1280, 640]] }, { "duration": 200, "images": [[1120, 640]] }, {
        "duration": 300,
        "images": [[960, 640]],
      }, { "duration": 400, "images": [[800, 640]] }, { "duration": 120, "images": [[640, 640]] }, {
        "duration": 200,
        "images": [[480, 640]],
      }, { "duration": 700, "images": [[320, 640]] }, { "duration": 200, "images": [[160, 640]] }, {
        "duration": 150,
        "images": [[0, 640]],
      }, { "duration": 200, "images": [[3840, 512]] }, {
        "duration": 800,
        "images": [[3680, 512]],
        "branching": { "branches": [{ "frameIndex": 27, "weight": 20 }] },
      }, { "duration": 150, "images": [[3520, 512]] }, { "duration": 150, "images": [[3360, 512]] }, {
        "duration": 180,
        "images": [[3200, 512]],
      }, {
        "duration": 200,
        "images": [[3040, 512]],
        "branching": { "branches": [{ "frameIndex": 22, "weight": 30 }] },
      }, { "duration": 200, "images": [[2880, 512]] }, { "duration": 600, "images": [[2720, 512]] }, {
        "duration": 200,
        "images": [[2560, 512]],
      }, { "duration": 150, "images": [[2400, 512]] }, { "duration": 200, "images": [[2240, 512]] }, {
        "duration": 200,
        "images": [[1440, 512]],
      }, { "duration": 120, "images": [[2080, 512]] }, { "duration": 100, "images": [[1920, 512]] }, {
        "duration": 200,
        "images": [[1280, 512]],
      }, { "duration": 100, "images": [[1120, 512]] }, { "duration": 100, "images": [[960, 512]] }, {
        "duration": 100,
        "images": [[800, 512]],
      }, { "duration": 200, "images": [[640, 512]] }, { "duration": 100, "images": [[480, 512]] }, {
        "duration": 100,
        "images": [[0, 0]],
        "exitBranch": 90,
      }],
    },
    "Uncertain": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 5 }, {
        "duration": 80,
        "images": [[2080, 2944]],
        "exitBranch": 0,
      }, { "duration": 80, "images": [[2240, 2944]], "exitBranch": 1 }, {
        "duration": 80,
        "images": [[2400, 2944]],
        "exitBranch": 2,
      }, {
        "duration": 100,
        "images": [[2560, 2944]],
        "exitBranch": 3,
        "branching": { "branches": [{ "frameIndex": 5, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "LookDownBlink": {
      "frames": [{
        "duration": 100,
        "images": [[3840, 640], [0, 3328]],
        "exitBranch": 3,
      }, { "duration": 100, "images": [[3840, 640], [160, 3328]], "exitBranch": 0, "sound": "12" }, {
        "duration": 100,
        "images": [[3840, 640], [0, 3328]],
        "exitBranch": 3,
      }, {
        "duration": 100,
        "images": [[3840, 640]],
        "exitBranch": 4,
        "branching": { "branches": [{ "frameIndex": 9, "weight": 100 }] },
      }, { "duration": 100, "images": [[3680, 640]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[3520, 640]],
        "exitBranch": 6,
      }, { "duration": 100, "images": [[3360, 640]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[3200, 640]],
        "exitBranch": 8,
      }, { "duration": 100, "images": [[0, 0]] }, { "duration": 0 }],
    },
    "LookLeft": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 6 }, {
        "duration": 100,
        "images": [[2720, 1920]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[2560, 1920]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[2400, 1920]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[2240, 1920]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[960, 3072], [800, 3072]],
        "exitBranch": 4,
        "branching": { "branches": [{ "frameIndex": 6, "weight": 100 }] },
      }, { "duration": 0 }],
    },
    "LookDownReturn": {
      "frames": [{ "duration": 100, "images": [[3680, 640]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[3520, 640]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[3360, 640]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[3200, 640]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[0, 0]] }],
    },
    "LookDownRightReturn": {
      "frames": [{
        "duration": 100,
        "images": [[640, 3328]],
        "exitBranch": 1,
      }, { "duration": 100, "images": [[800, 3328]], "exitBranch": 2 }, {
        "duration": 100,
        "images": [[960, 3328]],
        "exitBranch": 3,
      }, { "duration": 100, "images": [[1120, 3328]], "exitBranch": 4 }, { "duration": 100, "images": [[800, 256]] }],
    },
    "LookUpLeft": {
      "frames": [{ "duration": 100, "images": [[800, 256]], "exitBranch": 6 }, {
        "duration": 100,
        "images": [[2240, 3072]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[2080, 3072]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[1920, 3072]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[1760, 3072]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[2400, 3072]],
        "exitBranch": 4,
      }, { "duration": 0 }],
    },
    "LookUpReturn": {
      "frames": [{ "duration": 100, "images": [[1120, 3072]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[1280, 3072]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[1440, 3072]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[1600, 3072]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[0, 0]] }],
    },
    "LookLeftReturn": {
      "frames": [{ "duration": 100, "images": [[2240, 1920]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[2400, 1920]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[2560, 1920]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[2720, 1920]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[0, 0]] }],
    },
    "Greet": {
      "frames": [{ "duration": 80, "images": [[0, 0]], "exitBranch": 14 }, {
        "duration": 80,
        "images": [[3840, 3072]],
        "exitBranch": 0,
      }, { "duration": 80, "images": [[0, 3200]], "exitBranch": 1 }, {
        "duration": 80,
        "images": [[160, 3200]],
        "exitBranch": 2,
      }, { "duration": 80, "images": [[320, 3200]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[480, 3200]],
        "exitBranch": 4,
      }, { "duration": 80, "images": [[640, 3200]], "exitBranch": 11 }, {
        "duration": 80,
        "images": [[800, 3200]],
        "exitBranch": 6,
      }, { "duration": 80, "images": [[960, 3200]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[1120, 3200]],
        "exitBranch": 8,
        "branching": { "branches": [{ "frameIndex": 14, "weight": 100 }] },
      }, { "duration": 100, "images": [[1280, 3200]], "exitBranch": 11 }, {
        "duration": 100,
        "images": [[1440, 3200]],
        "exitBranch": 12,
      }, { "duration": 100, "images": [[1600, 3200]] }, {
        "duration": 100,
        "images": [[1760, 3200]],
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "Hearing_1": {
      "frames": [{ "duration": 80, "images": [[0, 0]], "exitBranch": 8 }, {
        "duration": 80,
        "images": [[3040, 3072]],
        "exitBranch": 0,
      }, { "duration": 80, "images": [[3200, 3072]], "exitBranch": 1 }, {
        "duration": 400,
        "images": [[3360, 3072]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[3360, 3072], [3520, 3072]], "exitBranch": 3 }, {
        "duration": 200,
        "images": [[3360, 3072], [3680, 3072]],
        "exitBranch": 3,
      }, { "duration": 100, "images": [[3360, 3072], [3520, 3072]], "exitBranch": 3 }, {
        "duration": 3500,
        "images": [[3360, 3072]],
        "exitBranch": 6,
        "branching": { "branches": [{ "frameIndex": 4, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "LookDownLeftReturn": {
      "frames": [{
        "duration": 100,
        "images": [[3840, 1024]],
        "exitBranch": 1,
      }, { "duration": 100, "images": [[160, 1152]], "exitBranch": 2 }, {
        "duration": 100,
        "images": [[320, 1152]],
        "exitBranch": 3,
      }, { "duration": 100, "images": [[480, 1152]], "exitBranch": 4 }, {
        "duration": 100,
        "images": [[640, 1152]],
        "exitBranch": 5,
      }, { "duration": 100, "images": [[800, 256]] }],
    },
    "LookUpLeftBlink": {
      "frames": [{
        "duration": 100,
        "images": [[2400, 3072], [2720, 3200]],
        "exitBranch": 3,
      }, { "duration": 200, "images": [[2400, 3072], [2880, 3200]], "exitBranch": 2, "sound": "12" }, {
        "duration": 100,
        "images": [[2400, 3072], [2720, 3200]],
        "exitBranch": 3,
      }, {
        "duration": 100,
        "images": [[2400, 3072]],
        "exitBranch": 4,
        "branching": { "branches": [{ "frameIndex": 9, "weight": 100 }] },
      }, { "duration": 100, "images": [[1760, 3072]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[1920, 3072]],
        "exitBranch": 6,
      }, { "duration": 100, "images": [[2080, 3072]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[2240, 3072]],
        "exitBranch": 8,
      }, { "duration": 100, "images": [[800, 256]], "exitBranch": 9 }, { "duration": 0 }],
    },
    "WriteReturn": {
      "frames": [{ "duration": 100, "images": [[2080, 2688]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[2240, 2688]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[2400, 2688]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[2560, 2688]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[2720, 2688]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[2880, 2688]],
        "exitBranch": 6,
      }, { "duration": 300, "images": [[3040, 2688]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[3200, 2688]],
        "exitBranch": 8,
      }, { "duration": 100, "images": [[3360, 2688]], "exitBranch": 9 }, {
        "duration": 100,
        "images": [[3520, 2688]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[0, 0]] }],
    },
    "Hearing_2": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 8 }, {
        "duration": 100,
        "images": [[1920, 3200]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[2080, 3200]], "exitBranch": 1 }, {
        "duration": 400,
        "images": [[2240, 3200]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[2240, 3200], [2400, 3200]], "exitBranch": 3 }, {
        "duration": 200,
        "images": [[2240, 3200], [2560, 3200]],
        "exitBranch": 3,
      }, { "duration": 100, "images": [[2240, 3200], [2400, 3200]], "exitBranch": 3 }, {
        "duration": 3700,
        "images": [[2240, 3200]],
        "exitBranch": 6,
        "branching": { "branches": [{ "frameIndex": 4, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "GetAttentionReturn": { "frames": [{ "duration": 80, "images": [[0, 0]] }], "useExitBranching": true },
    "GestureRight": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 6 }, {
        "duration": 100,
        "images": [[3680, 3712]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[3840, 3712]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[0, 3840]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[160, 3840]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[320, 3840]],
        "exitBranch": 4,
        "branching": { "branches": [{ "frameIndex": 6, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "LookUpBlink": {
      "frames": [{
        "duration": 100,
        "images": [[2720, 3072], [2560, 3072]],
        "exitBranch": 3,
      }, { "duration": 200, "images": [[2720, 3072], [2880, 3072]], "exitBranch": 2, "sound": "12" }, {
        "duration": 100,
        "images": [[2720, 3072], [2560, 3072]],
        "exitBranch": 3,
      }, {
        "duration": 100,
        "images": [[2720, 3072]],
        "exitBranch": 4,
        "branching": { "branches": [{ "frameIndex": 9, "weight": 100 }] },
      }, { "duration": 100, "images": [[1120, 3072]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[1280, 3072]],
        "exitBranch": 6,
      }, { "duration": 100, "images": [[1440, 3072]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[1600, 3072]],
        "exitBranch": 8,
      }, { "duration": 100, "images": [[0, 0]], "exitBranch": 9 }, { "duration": 0 }],
    },
    "LookUpLeftReturn": {
      "frames": [{ "duration": 100, "images": [[1760, 3072]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[1920, 3072]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[2080, 3072]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[2240, 3072]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[800, 256]] }],
    },
    "Think": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 18 }, {
        "duration": 100,
        "images": [[1760, 256]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[1920, 256]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[2080, 256]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[2240, 256]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[2400, 256]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[2560, 256]], "exitBranch": 5 }, {
        "duration": 300,
        "images": [[2720, 256]],
        "exitBranch": 5,
        "branching": { "branches": [{ "frameIndex": 10, "weight": 35 }, { "frameIndex": 17, "weight": 30 }] },
      }, { "duration": 200, "images": [[2880, 256]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[2560, 256]],
        "branching": { "branches": [{ "frameIndex": 17, "weight": 100 }] },
      }, { "duration": 100, "images": [[2720, 256], [3040, 256]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[2720, 256], [3200, 256]],
        "exitBranch": 5,
      }, { "duration": 100, "images": [[2720, 256], [3040, 256]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[2720, 256]],
        "exitBranch": 5,
      }, { "duration": 100, "images": [[2720, 256], [3040, 256]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[2720, 256], [3200, 256]],
        "exitBranch": 5,
      }, { "duration": 100, "images": [[2720, 256], [3040, 256]], "exitBranch": 5 }, {
        "duration": 300,
        "images": [[2720, 256]],
        "exitBranch": 5,
        "branching": { "branches": [{ "frameIndex": 18, "weight": 90 }, { "frameIndex": 7, "weight": 10 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "Blink": {
      "frames": [{ "duration": 100, "images": [[0, 0], [2080, 3584]] }, {
        "duration": 200,
        "images": [[0, 0], [2240, 3584]],
      }, { "duration": 100, "images": [[0, 0], [2080, 3584]] }, {
        "duration": 100,
        "images": [[0, 0]],
        "exitBranch": 0,
      }],
    },
    "Write": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 27 }, {
        "duration": 100,
        "images": [[3520, 2688]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[3360, 2688]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[3200, 2688]],
        "exitBranch": 2,
      }, { "duration": 300, "images": [[3040, 2688]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[3680, 2688]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[3840, 2688]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[0, 2816]],
        "exitBranch": 6,
      }, { "duration": 100, "images": [[160, 2816]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[320, 2816]],
        "exitBranch": 8,
      }, { "duration": 100, "images": [[480, 2816]], "exitBranch": 9 }, {
        "duration": 100,
        "images": [[640, 2688]],
        "exitBranch": 10,
        "sound": "15",
      }, { "duration": 100, "images": [[800, 2688]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[960, 2688]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[1120, 2688]], "exitBranch": 10, "sound": "22" }, {
        "duration": 100,
        "images": [[1280, 2688]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[1440, 2688]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[1600, 2688]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[1760, 2688]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[480, 2688]],
        "exitBranch": 10,
      }, { "duration": 100, "images": [[320, 2688]], "exitBranch": 21 }, {
        "duration": 100,
        "images": [[160, 2688]],
        "exitBranch": 22,
      }, { "duration": 100, "images": [[0, 2688]], "exitBranch": 23 }, {
        "duration": 100,
        "images": [[1920, 2688]],
        "exitBranch": 24,
        "branching": { "branches": [{ "frameIndex": 27, "weight": 100 }] },
      }, { "duration": 100, "images": [[2080, 2688]], "exitBranch": 25 }, {
        "duration": 100,
        "images": [[2240, 2688]],
        "exitBranch": 26,
      }, { "duration": 100, "images": [[2400, 2688]], "exitBranch": 7 }, { "duration": 0 }],
    },
    "LookDownRight": {
      "frames": [{ "duration": 100, "images": [[800, 256]], "exitBranch": 6 }, {
        "duration": 100,
        "images": [[1120, 3328]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[960, 3328]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[800, 3328]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[640, 3328]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[1280, 3328]],
        "exitBranch": 4,
      }, { "duration": 0 }],
    },
    "StopListening": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 8 }, {
        "duration": 100,
        "images": [[1120, 3456]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[1280, 3456]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[1440, 3456]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[1600, 3456]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[1760, 3456]],
        "exitBranch": 4,
      }, { "duration": 50, "images": [[1920, 3456]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[2080, 3456]],
        "exitBranch": 6,
        "branching": { "branches": [{ "frameIndex": 8, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "Show": {
      "frames": [{ "duration": 80, "images": [[1440, 3328]], "exitBranch": 2 }, {
        "duration": 80,
        "images": [[1600, 3328]],
        "exitBranch": 3,
      }, { "duration": 80, "images": [[1760, 3328]], "exitBranch": 4 }, {
        "duration": 80,
        "images": [[1920, 3328]],
        "exitBranch": 5,
      }, { "duration": 80, "images": [[2080, 3328]], "exitBranch": 5 }, {
        "duration": 80,
        "images": [[2240, 3328]],
        "exitBranch": 6,
      }, { "duration": 80, "images": [[2400, 3328]], "exitBranch": 7 }, {
        "duration": 80,
        "images": [[2560, 3328]],
        "exitBranch": 8,
      }, { "duration": 80, "images": [[2720, 3328]], "exitBranch": 10 }, {
        "duration": 80,
        "images": [[2880, 3328]],
        "exitBranch": 11,
      }, { "duration": 80, "images": [[3040, 3328]], "exitBranch": 12 }, {
        "duration": 100,
        "images": [[3200, 3328]],
        "exitBranch": 13,
        "sound": "9",
      }, { "duration": 120, "images": [[3360, 3328]], "exitBranch": 13 }, {
        "duration": 100,
        "images": [[3520, 3328]],
        "exitBranch": 14,
      }, { "duration": 100, "images": [[3680, 3328]], "exitBranch": 15 }, {
        "duration": 80,
        "images": [[3840, 3328]],
        "exitBranch": 16,
      }, { "duration": 80, "images": [[0, 3456]], "exitBranch": 17 }, {
        "duration": 100,
        "images": [[160, 3456]],
        "exitBranch": 19,
      }, { "duration": 80, "images": [[320, 3456]], "exitBranch": 19 }, {
        "duration": 80,
        "images": [[480, 3456]],
        "exitBranch": 20,
      }, { "duration": 80, "images": [[640, 3456]], "exitBranch": 21 }, {
        "duration": 80,
        "images": [[800, 3456]],
        "exitBranch": 23,
      }, { "duration": 80, "images": [[960, 3456]], "exitBranch": 23 }, { "duration": 100, "images": [[0, 0]] }],
    },
    "LookRightReturn": {
      "frames": [{ "duration": 100, "images": [[3200, 1024]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[3040, 1024]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[2880, 1024]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[2720, 1024]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[0, 0]] }],
    },
    "Hearing_3": {
      "frames": [{ "duration": 80, "images": [[0, 0]], "exitBranch": 19 }, {
        "duration": 80,
        "images": [[3040, 3072]],
        "exitBranch": 0,
      }, { "duration": 80, "images": [[3200, 3072]], "exitBranch": 1 }, {
        "duration": 400,
        "images": [[3360, 3072]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[3360, 3072], [3520, 3072]], "exitBranch": 3 }, {
        "duration": 200,
        "images": [[3360, 3072], [3680, 3072]],
        "exitBranch": 3,
      }, { "duration": 100, "images": [[3360, 3072], [3520, 3072]], "exitBranch": 3 }, {
        "duration": 3500,
        "images": [[3360, 3072]],
        "exitBranch": 6,
        "branching": { "branches": [{ "frameIndex": 4, "weight": 40 }] },
      }, { "duration": 80, "images": [[3200, 3072]], "exitBranch": 1 }, {
        "duration": 80,
        "images": [[3040, 3072]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[1920, 3200]], "exitBranch": 0 }, {
        "duration": 100,
        "images": [[2080, 3200]],
        "exitBranch": 18,
      }, { "duration": 400, "images": [[2240, 3200]], "exitBranch": 2 }, {
        "duration": 100,
        "images": [[2240, 3200], [2400, 3200]],
        "exitBranch": 17,
      }, { "duration": 200, "images": [[2240, 3200], [2560, 3200]], "exitBranch": 15 }, {
        "duration": 100,
        "images": [[2240, 3200], [2400, 3200]],
        "exitBranch": 17,
      }, {
        "duration": 3700,
        "images": [[2240, 3200]],
        "exitBranch": 17,
        "branching": { "branches": [{ "frameIndex": 13, "weight": 40 }] },
      }, { "duration": 100, "images": [[2080, 3200]], "exitBranch": 18 }, {
        "duration": 100,
        "images": [[1920, 3200]],
        "exitBranch": 0,
        "branching": { "branches": [{ "frameIndex": 1, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "MoveDown": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 12 }, {
        "duration": 120,
        "images": [[2240, 3456]],
        "exitBranch": 0,
      }, { "duration": 120, "images": [[2400, 3456]], "exitBranch": 1 }, {
        "duration": 120,
        "images": [[2560, 3456]],
        "exitBranch": 2,
        "branching": { "branches": [{ "frameIndex": 5, "weight": 100 }] },
      }, { "duration": 200, "images": [[2720, 3456]], "exitBranch": 3 }, {
        "duration": 200,
        "images": [[2720, 3456]],
        "exitBranch": 3,
      }, {
        "duration": 80,
        "images": [[2880, 3456]],
        "exitBranch": 4,
        "sound": "4",
        "branching": { "branches": [{ "frameIndex": 8, "weight": 100 }] },
      }, { "duration": 80, "images": [[2880, 3456]], "exitBranch": 4 }, {
        "duration": 80,
        "images": [[3040, 3456]],
        "exitBranch": 7,
      }, { "duration": 80, "images": [[3200, 3456]], "exitBranch": 8 }, {
        "duration": 80,
        "images": [[3360, 3456]],
        "exitBranch": 9,
      }, {
        "duration": 80,
        "images": [[3520, 3456]],
        "exitBranch": 10,
        "branching": { "branches": [{ "frameIndex": 12, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "ReadContinued": {
      "frames": [{ "duration": 100, "images": [[1440, 2176]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[1280, 2176]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[1120, 2176]], "exitBranch": 23 }, {
        "duration": 400,
        "images": [[640, 2176]],
        "exitBranch": 19,
      }, { "duration": 100, "images": [[2720, 2944]], "exitBranch": 19 }, {
        "duration": 100,
        "images": [[2880, 2944]],
        "exitBranch": 19,
      }, { "duration": 100, "images": [[3040, 2944]], "exitBranch": 19 }, {
        "duration": 100,
        "images": [[3520, 2944]],
        "exitBranch": 19,
        "sound": "17",
      }, { "duration": 100, "images": [[3680, 2944]], "exitBranch": 19 }, {
        "duration": 100,
        "images": [[3840, 2944]],
        "exitBranch": 19,
      }, { "duration": 100, "images": [[0, 3072]], "exitBranch": 19 }, {
        "duration": 100,
        "images": [[160, 3072]],
        "exitBranch": 19,
      }, { "duration": 100, "images": [[320, 3072]], "exitBranch": 19 }, {
        "duration": 100,
        "images": [[480, 3072]],
        "exitBranch": 19,
      }, { "duration": 100, "images": [[640, 3072]], "exitBranch": 19 }, {
        "duration": 200,
        "images": [[640, 2176]],
        "exitBranch": 19,
      }, { "duration": 100, "images": [[640, 2176], [800, 2176]], "exitBranch": 19 }, {
        "duration": 200,
        "images": [[640, 2176], [960, 2176]],
        "exitBranch": 19,
      }, { "duration": 100, "images": [[640, 2176], [800, 2176]], "exitBranch": 19 }, {
        "duration": 100,
        "images": [[1120, 2176]],
        "exitBranch": 23,
      }, { "duration": 100, "images": [[1280, 2176]], "exitBranch": 19 }, {
        "duration": 100,
        "images": [[1440, 2176]],
        "exitBranch": 19,
      }, {
        "duration": 100,
        "images": [[1600, 2176]],
        "exitBranch": 20,
        "branching": { "branches": [{ "frameIndex": 35, "weight": 100 }] },
      }, { "duration": 100, "images": [[480, 2176]], "exitBranch": 24 }, {
        "duration": 100,
        "images": [[320, 2176]],
        "exitBranch": 25,
      }, { "duration": 100, "images": [[160, 2176]], "exitBranch": 26, "sound": "28" }, {
        "duration": 100,
        "images": [[0, 2176]],
        "exitBranch": 27,
      }, { "duration": 100, "images": [[3840, 2048]], "exitBranch": 28 }, {
        "duration": 100,
        "images": [[3680, 2048]],
        "exitBranch": 29,
      }, { "duration": 250, "images": [[3520, 2048]], "exitBranch": 30 }, {
        "duration": 100,
        "images": [[3360, 2048]],
        "exitBranch": 31,
      }, { "duration": 100, "images": [[3200, 2048]], "exitBranch": 32 }, {
        "duration": 100,
        "images": [[3040, 2048]],
        "exitBranch": 33,
      }, { "duration": 100, "images": [[2880, 2048]], "exitBranch": 34 }, {
        "duration": 100,
        "images": [[0, 0]],
        "exitBranch": 35,
      }, { "duration": 0 }],
    },
    "LookDown": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 6 }, {
        "duration": 100,
        "images": [[3200, 640]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[3360, 640]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[3520, 640]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[3680, 640]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[3840, 640]],
        "exitBranch": 4,
      }, { "duration": 0 }],
    },
    "Sad": {
      "frames": [{ "duration": 80, "images": [[0, 0]], "exitBranch": 6 }, {
        "duration": 80,
        "images": [[3840, 2304]],
        "exitBranch": 0,
      }, { "duration": 90, "images": [[0, 2432]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[160, 2432]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[320, 2432]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[480, 2432]],
        "exitBranch": 4,
        "branching": { "branches": [{ "frameIndex": 6, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "Process": {
      "frames": [{ "duration": 100, "images": [[0, 0]] }, {
        "duration": 100,
        "images": [[1760, 2176]],
      }, { "duration": 100, "images": [[1920, 2176]] }, {
        "duration": 100,
        "images": [[2080, 2176]],
      }, { "duration": 300, "images": [[2240, 2176]] }, {
        "duration": 100,
        "images": [[2400, 2176]],
      }, { "duration": 100, "images": [[2560, 2176]] }, {
        "duration": 300,
        "images": [[2720, 2176]],
      }, { "duration": 100, "images": [[2880, 2176]] }, {
        "duration": 100,
        "images": [[3040, 2176]],
      }, { "duration": 100, "images": [[3200, 2176]] }, {
        "duration": 300,
        "images": [[3360, 2176]],
      }, { "duration": 100, "images": [[3520, 2176]], "sound": "29" }, {
        "duration": 100,
        "images": [[3680, 2176]],
      }, { "duration": 100, "images": [[3840, 2176]] }, {
        "duration": 100,
        "images": [[3680, 2176]],
      }, { "duration": 100, "images": [[0, 2304]] }, { "duration": 100, "images": [[3680, 2176]] }, {
        "duration": 100,
        "images": [[160, 2304]],
      }, { "duration": 200, "images": [[3680, 2176]] }, {
        "duration": 100,
        "images": [[0, 2304]],
        "sound": "29",
      }, { "duration": 100, "images": [[3680, 2176]] }, { "duration": 100, "images": [[320, 2304]] }, {
        "duration": 100,
        "images": [[3680, 2176]],
      }, { "duration": 100, "images": [[0, 2304]] }, { "duration": 400, "images": [[3680, 2176]] }, {
        "duration": 100,
        "images": [[480, 2304]],
      }, { "duration": 100, "images": [[640, 2304]] }, { "duration": 100, "images": [[800, 2304]] }, {
        "duration": 100,
        "images": [[960, 2304]],
        "branching": {
          "branches": [{ "frameIndex": 37, "weight": 25 }, {
            "frameIndex": 46,
            "weight": 25,
          }, { "frameIndex": 60, "weight": 25 }],
        },
      }, { "duration": 600, "images": [[960, 2304]] }, {
        "duration": 100,
        "images": [[960, 2304], [1120, 2304]],
      }, { "duration": 200, "images": [[960, 2304], [1280, 2304]] }, {
        "duration": 100,
        "images": [[960, 2304], [1120, 2304]],
      }, { "duration": 600, "images": [[960, 2304]] }, { "duration": 100, "images": [[800, 2304]] }, {
        "duration": 100,
        "images": [[640, 2304]],
        "branching": { "branches": [{ "frameIndex": 71, "weight": 100 }] },
      }, { "duration": 500, "images": [[960, 2304]] }, { "duration": 100, "images": [[1440, 2304]] }, {
        "duration": 100,
        "images": [[1600, 2304]],
      }, { "duration": 1200, "images": [[1760, 2304]], "sound": "20" }, {
        "duration": 100,
        "images": [[1600, 2304]],
      }, { "duration": 100, "images": [[1440, 2304]] }, { "duration": 100, "images": [[960, 2304]] }, {
        "duration": 100,
        "images": [[800, 2304]],
      }, {
        "duration": 100,
        "images": [[640, 2304]],
        "branching": { "branches": [{ "frameIndex": 71, "weight": 100 }] },
      }, { "duration": 500, "images": [[960, 2304]] }, { "duration": 100, "images": [[1920, 2304]] }, {
        "duration": 100,
        "images": [[2080, 2304]],
      }, { "duration": 1200, "images": [[2240, 2304]] }, {
        "duration": 100,
        "images": [[2240, 2304], [2400, 2304]],
      }, { "duration": 100, "images": [[2240, 2304], [2560, 2304]] }, {
        "duration": 100,
        "images": [[2240, 2304], [2400, 2304]],
      }, { "duration": 900, "images": [[2720, 2304]] }, {
        "duration": 100,
        "images": [[2080, 2304]],
      }, { "duration": 100, "images": [[1920, 2304]] }, { "duration": 500, "images": [[960, 2304]] }, {
        "duration": 100,
        "images": [[960, 2304]],
      }, { "duration": 100, "images": [[800, 2304]] }, {
        "duration": 100,
        "images": [[640, 2304]],
        "branching": { "branches": [{ "frameIndex": 71, "weight": 100 }] },
      }, { "duration": 100, "images": [[2880, 2304]], "sound": "24" }, {
        "duration": 700,
        "images": [[3040, 2304]],
      }, { "duration": 100, "images": [[3200, 2304]] }, {
        "duration": 100,
        "images": [[3360, 2304]],
      }, { "duration": 100, "images": [[3200, 2304]] }, {
        "duration": 500,
        "images": [[3040, 2304]],
      }, { "duration": 100, "images": [[2880, 2304]] }, { "duration": 800, "images": [[960, 2304]] }, {
        "duration": 100,
        "images": [[800, 2304]],
      }, { "duration": 100, "images": [[640, 2304]] }, { "duration": 100, "images": [[480, 2304]] }, {
        "duration": 80,
        "images": [[3200, 2176]],
      }, { "duration": 80, "images": [[3040, 2176]] }, { "duration": 80, "images": [[2880, 2176]] }, {
        "duration": 80,
        "images": [[2720, 2176]],
      }, { "duration": 80, "images": [[2560, 2176]] }, { "duration": 80, "images": [[2400, 2176]] }, {
        "duration": 80,
        "images": [[2240, 2176]],
      }, { "duration": 80, "images": [[2080, 2176]], "exitBranch": 79 }, {
        "duration": 80,
        "images": [[1920, 2176]],
        "exitBranch": 80,
      }, { "duration": 80, "images": [[1760, 2176]], "exitBranch": 81 }, { "duration": 100, "images": [[0, 0]] }],
    },
    "LookLeftBlink": {
      "frames": [{
        "duration": 100,
        "images": [[960, 3072], [800, 3072], [3840, 3840]],
        "exitBranch": 3,
      }, {
        "duration": 100,
        "images": [[960, 3072], [800, 3072], [0, 3968]],
        "exitBranch": 2,
        "sound": "12",
      }, { "duration": 100, "images": [[960, 3072], [160, 3968], [3840, 3840]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[960, 3072], [800, 3072]],
        "exitBranch": 4,
        "branching": { "branches": [{ "frameIndex": 9, "weight": 100 }] },
      }, { "duration": 100, "images": [[2240, 1920]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[2400, 1920]],
        "exitBranch": 6,
      }, { "duration": 100, "images": [[2560, 1920]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[2720, 1920]],
        "exitBranch": 8,
      }, { "duration": 100, "images": [[0, 0]], "exitBranch": 9 }, { "duration": 0 }],
    },
    "LookUp": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 6 }, {
        "duration": 100,
        "images": [[1600, 3072]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[1440, 3072]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[1280, 3072]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[1120, 3072]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[2720, 3072]],
        "exitBranch": 4,
      }, { "duration": 0 }],
    },
    "LookDownLeft": {
      "frames": [{ "duration": 100, "images": [[800, 256]], "exitBranch": 6 }, {
        "duration": 100,
        "images": [[640, 1152]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[480, 1152]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[320, 1152]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[160, 1152]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[3840, 1024]],
        "exitBranch": 4,
      }, { "duration": 0 }],
    },
    "GestureDown": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 12 }, {
        "duration": 100,
        "images": [[1600, 3712]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[1760, 3712]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[1920, 3712]],
        "exitBranch": 9,
      }, { "duration": 100, "images": [[2080, 3712]], "exitBranch": 8 }, {
        "duration": 100,
        "images": [[2240, 3712]],
        "exitBranch": 7,
      }, {
        "duration": 100,
        "images": [[2400, 3712]],
        "exitBranch": 7,
        "branching": { "branches": [{ "frameIndex": 12, "weight": 100 }] },
      }, { "duration": 100, "images": [[2560, 3712]], "exitBranch": 8 }, {
        "duration": 100,
        "images": [[2720, 3712]],
        "exitBranch": 9,
      }, { "duration": 100, "images": [[2880, 3712]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[3040, 3712]],
        "exitBranch": 11,
      }, { "duration": 100, "images": [[3200, 3712]], "exitBranch": 0 }, { "duration": 0 }], "useExitBranching": true,
    },
    "LookDownRightBlink": {
      "frames": [{
        "duration": 100,
        "images": [[1280, 3328], [3360, 3712]],
        "exitBranch": 3,
      }, { "duration": 200, "images": [[1280, 3328], [3520, 3712]], "exitBranch": 2, "sound": "12" }, {
        "duration": 100,
        "images": [[1280, 3328], [3360, 3712]],
        "exitBranch": 3,
      }, {
        "duration": 100,
        "images": [[1280, 3328]],
        "exitBranch": 4,
        "branching": { "branches": [{ "frameIndex": 9, "weight": 100 }] },
      }, { "duration": 100, "images": [[640, 3328]], "exitBranch": 5 }, {
        "duration": 100,
        "images": [[800, 3328]],
        "exitBranch": 6,
      }, { "duration": 100, "images": [[960, 3328]], "exitBranch": 7 }, {
        "duration": 100,
        "images": [[1120, 3328]],
        "exitBranch": 8,
      }, { "duration": 100, "images": [[800, 256]], "exitBranch": 9 }, { "duration": 0 }],
    },
    "RestPose": { "frames": [{ "duration": 100, "images": [[3040, 3200]] }] },
    "Searching": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 85 }, {
        "duration": 100,
        "images": [[480, 512]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[640, 512]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[800, 512]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[960, 512]], "exitBranch": 3 }, {
        "duration": 200,
        "images": [[1120, 512]],
        "exitBranch": 4,
      }, { "duration": 100, "images": [[1280, 512]], "exitBranch": 5 }, {
        "duration": 400,
        "images": [[1440, 512]],
        "exitBranch": 6,
        "branching": { "branches": [{ "frameIndex": 15, "weight": 10 }, { "frameIndex": 48, "weight": 20 }] },
      }, { "duration": 150, "images": [[1440, 512], [1600, 512]], "exitBranch": 7, "sound": "12" }, {
        "duration": 250,
        "images": [[1440, 512], [1760, 512]],
        "exitBranch": 8,
      }, { "duration": 120, "images": [[1440, 512], [1600, 512]], "exitBranch": 7 }, {
        "duration": 200,
        "images": [[1440, 512]],
        "exitBranch": 6,
      }, { "duration": 500, "images": [[1920, 512]], "exitBranch": 11 }, {
        "duration": 200,
        "images": [[2080, 512]],
        "exitBranch": 11,
      }, { "duration": 200, "images": [[1440, 512]], "exitBranch": 6 }, {
        "duration": 200,
        "images": [[2240, 512]],
        "exitBranch": 14,
      }, { "duration": 400, "images": [[2400, 512]], "exitBranch": 15 }, {
        "duration": 200,
        "images": [[2560, 512]],
        "exitBranch": 78,
      }, { "duration": 600, "images": [[2720, 512]], "exitBranch": 17 }, {
        "duration": 200,
        "images": [[2880, 512]],
        "exitBranch": 17,
      }, { "duration": 200, "images": [[3040, 512]], "exitBranch": 19 }, {
        "duration": 700,
        "images": [[3200, 512]],
        "exitBranch": 20,
        "branching": { "branches": [{ "frameIndex": 74, "weight": 30 }] },
      }, { "duration": 200, "images": [[3360, 512]], "exitBranch": 20 }, {
        "duration": 200,
        "images": [[3520, 512]],
        "exitBranch": 22,
        "branching": { "branches": [{ "frameIndex": 25, "weight": 50 }] },
      }, {
        "duration": 800,
        "images": [[3680, 512]],
        "exitBranch": 23,
        "branching": { "branches": [{ "frameIndex": 26, "weight": 100 }] },
      }, { "duration": 200, "images": [[3680, 512]], "exitBranch": 24 }, {
        "duration": 200,
        "images": [[3840, 512]],
        "exitBranch": 25,
      }, {
        "duration": 300,
        "images": [[0, 640]],
        "exitBranch": 25,
        "branching": { "branches": [{ "frameIndex": 69, "weight": 20 }] },
      }, { "duration": 200, "images": [[160, 640]], "exitBranch": 27 }, {
        "duration": 700,
        "images": [[320, 640]],
        "exitBranch": 28,
      }, { "duration": 200, "images": [[480, 640]], "exitBranch": 28 }, {
        "duration": 200,
        "images": [[640, 640]],
        "exitBranch": 30,
      }, { "duration": 300, "images": [[800, 640]], "exitBranch": 33 }, {
        "duration": 300,
        "images": [[960, 640]],
        "exitBranch": 34,
      }, {
        "duration": 200,
        "images": [[1120, 640]],
        "exitBranch": 36,
        "branching": { "branches": [{ "frameIndex": 35, "weight": 60 }, { "frameIndex": 36, "weight": 40 }] },
      }, { "duration": 1500, "images": [[1280, 640]], "exitBranch": 37 }, {
        "duration": 150,
        "images": [[1280, 640]],
        "exitBranch": 37,
      }, { "duration": 200, "images": [[1440, 640]], "exitBranch": 38 }, {
        "duration": 200,
        "images": [[1600, 640]],
        "exitBranch": 39,
        "branching": { "branches": [{ "frameIndex": 59, "weight": 25 }] },
      }, { "duration": 200, "images": [[1760, 640]], "exitBranch": 41 }, {
        "duration": 500,
        "images": [[1920, 640]],
        "exitBranch": 41,
      }, { "duration": 150, "images": [[2080, 640]], "exitBranch": 42 }, {
        "duration": 200,
        "images": [[2240, 640]],
        "exitBranch": 43,
      }, { "duration": 150, "images": [[2400, 640]], "exitBranch": 45 }, {
        "duration": 200,
        "images": [[2560, 640]],
        "exitBranch": 45,
      }, { "duration": 150, "images": [[2720, 640]], "exitBranch": 47 }, {
        "duration": 700,
        "images": [[2880, 640]],
        "exitBranch": 47,
      }, {
        "duration": 150,
        "images": [[3040, 640]],
        "exitBranch": 14,
        "branching": {
          "branches": [{ "frameIndex": 14, "weight": 40 }, {
            "frameIndex": 7,
            "weight": 40,
          }, { "frameIndex": 48, "weight": 20 }],
        },
      }, {
        "duration": 150,
        "images": [[3040, 640]],
        "exitBranch": 14,
        "branching": { "branches": [{ "frameIndex": 83, "weight": 20 }] },
      }, { "duration": 600, "images": [[2880, 640]], "exitBranch": 48 }, {
        "duration": 150,
        "images": [[2720, 640]],
        "exitBranch": 48,
      }, { "duration": 200, "images": [[2560, 640]], "exitBranch": 50 }, {
        "duration": 150,
        "images": [[2400, 640]],
        "exitBranch": 50,
      }, { "duration": 150, "images": [[2240, 640]], "exitBranch": 52 }, {
        "duration": 150,
        "images": [[2080, 640]],
        "exitBranch": 52,
      }, { "duration": 500, "images": [[1920, 640]], "exitBranch": 54 }, {
        "duration": 150,
        "images": [[1760, 640]],
        "exitBranch": 54,
      }, { "duration": 200, "images": [[1600, 640]], "exitBranch": 56 }, {
        "duration": 150,
        "images": [[1440, 640]],
        "exitBranch": 56,
        "branching": { "branches": [{ "frameIndex": 38, "weight": 30 }] },
      }, {
        "duration": 800,
        "images": [[1280, 640]],
        "exitBranch": 58,
        "branching": { "branches": [{ "frameIndex": 37, "weight": 20 }, { "frameIndex": 61, "weight": 20 }] },
      }, {
        "duration": 200,
        "images": [[1280, 640]],
        "exitBranch": 58,
        "branching": { "branches": [{ "frameIndex": 37, "weight": 20 }] },
      }, { "duration": 200, "images": [[1120, 640]], "exitBranch": 60 }, {
        "duration": 300,
        "images": [[960, 640]],
        "exitBranch": 61,
      }, { "duration": 400, "images": [[800, 640]], "exitBranch": 62 }, {
        "duration": 120,
        "images": [[640, 640]],
        "exitBranch": 65,
      }, { "duration": 200, "images": [[480, 640]], "exitBranch": 67 }, {
        "duration": 700,
        "images": [[320, 640]],
        "exitBranch": 67,
      }, { "duration": 200, "images": [[160, 640]], "exitBranch": 68 }, {
        "duration": 150,
        "images": [[0, 640]],
        "exitBranch": 69,
        "branching": { "branches": [{ "frameIndex": 28, "weight": 20 }] },
      }, {
        "duration": 200,
        "images": [[3840, 512]],
        "exitBranch": 71,
        "branching": { "branches": [{ "frameIndex": 27, "weight": 20 }] },
      }, {
        "duration": 800,
        "images": [[3680, 512]],
        "exitBranch": 71,
        "branching": { "branches": [{ "frameIndex": 26, "weight": 20 }] },
      }, { "duration": 150, "images": [[3520, 512]], "exitBranch": 72 }, {
        "duration": 150,
        "images": [[3360, 512]],
        "exitBranch": 73,
      }, { "duration": 150, "images": [[3200, 512]], "exitBranch": 75 }, {
        "duration": 200,
        "images": [[3040, 512]],
        "exitBranch": 75,
        "branching": { "branches": [{ "frameIndex": 22, "weight": 30 }] },
      }, { "duration": 200, "images": [[2880, 512]], "exitBranch": 77 }, {
        "duration": 600,
        "images": [[2720, 512]],
        "exitBranch": 77,
      }, { "duration": 200, "images": [[2560, 512]], "exitBranch": 78 }, {
        "duration": 100,
        "images": [[2400, 512]],
        "exitBranch": 79,
      }, { "duration": 150, "images": [[2240, 512]], "exitBranch": 80 }, {
        "duration": 100,
        "images": [[1440, 512]],
        "exitBranch": 6,
        "branching": { "branches": [{ "frameIndex": 7, "weight": 20 }] },
      }, { "duration": 120, "images": [[2080, 512]], "exitBranch": 6 }, {
        "duration": 500,
        "images": [[1920, 512]],
        "exitBranch": 12,
        "branching": { "branches": [{ "frameIndex": 14, "weight": 80 }] },
      }, { "duration": 200, "images": [[1280, 512]], "exitBranch": 5 }, {
        "duration": 800,
        "images": [[1120, 512]],
        "exitBranch": 4,
        "branching": { "branches": [{ "frameIndex": 6, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
    "MoveUp": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 12 }, {
        "duration": 150,
        "images": [[3840, 3584]],
        "exitBranch": 0,
      }, { "duration": 200, "images": [[0, 3712]], "exitBranch": 1 }, {
        "duration": 150,
        "images": [[160, 3712]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[320, 3712]], "exitBranch": 3, "sound": "14" }, {
        "duration": 60,
        "images": [[480, 3712]],
        "exitBranch": 10,
      }, {
        "duration": 60,
        "images": [[640, 3712]],
        "exitBranch": 7,
        "branching": { "branches": [{ "frameIndex": 12, "weight": 100 }] },
      }, { "duration": 80, "images": [[800, 3712]], "exitBranch": 8 }, {
        "duration": 150,
        "images": [[960, 3712]],
        "exitBranch": 9,
      }, { "duration": 200, "images": [[1120, 3712]], "exitBranch": 10 }, {
        "duration": 100,
        "images": [[1280, 3712]],
        "exitBranch": 11,
      }, { "duration": 100, "images": [[1440, 3712]], "exitBranch": 1 }, { "duration": 0 }], "useExitBranching": true,
    },
    "StartListening": {
      "frames": [{ "duration": 100, "images": [[0, 0]], "exitBranch": 6 }, {
        "duration": 100,
        "images": [[3200, 3200]],
        "exitBranch": 0,
      }, { "duration": 100, "images": [[3360, 3200]], "exitBranch": 1 }, {
        "duration": 100,
        "images": [[3520, 3200]],
        "exitBranch": 2,
      }, { "duration": 100, "images": [[3680, 3200]], "exitBranch": 3 }, {
        "duration": 100,
        "images": [[3840, 3200]],
        "exitBranch": 4,
        "branching": { "branches": [{ "frameIndex": 6, "weight": 100 }] },
      }, { "duration": 0 }], "useExitBranching": true,
    },
  },
};

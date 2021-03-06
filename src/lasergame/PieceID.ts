import Color, * as colorManager from "./Color";
import Direction from "./Direction";
import LaserSegment from "./LaserSegment";

enum PieceID {
  FORWARD_SLASH,
  BACK_SLASH,
  BLACK_HOLE,
  HORI_SPLIT,
  VERT_SPLIT,

  RED,
  BLUE,
  GREEN,
}
export default PieceID;

interface PieceRule {
  dirs?: Direction[];
  color?: Color;
}

const pieceRuleList: ReadonlyArray<PieceRule> = [
  { dirs: [Direction.EAST, Direction.NORTH, Direction.WEST, Direction.SOUTH] },
  { dirs: [Direction.WEST, Direction.SOUTH, Direction.EAST, Direction.NORTH] },
  { dirs: [Direction.NONE, Direction.NONE, Direction.NONE, Direction.NONE] },
  { dirs: [Direction.EAST, Direction.NONE, Direction.EAST, Direction.SPLIT_NORTH_SOUTH] },
  { dirs: [Direction.NONE, Direction.NORTH, Direction.SPLIT_EAST_WEST, Direction.NORTH] },

  { color: Color.RED },
  { color: Color.BLUE },
  { color: Color.GREEN },
];

export function applyPieceToLaser(laser: LaserSegment, pieceID: PieceID) {
  const pieceRules = pieceRuleList[pieceID];
  if (pieceRules.dirs) {
    laser.dir = pieceRules.dirs[laser.dir];
  }
  if (pieceRules.color) {
    laser.color = colorManager.addColors(laser.color, pieceRules.color);
  }
  return laser;
}

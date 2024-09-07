import { GridType, SpeedType, TileType } from "../../../utils/types";

export const binaryTree = async(
  grid: GridType,
  startTile: TileType,
  endTile: TileType,
  setIsDisabled: (isDisabled: boolean) => void,
  speed: SpeedType,
)

import { Laser } from "./Laser";
import { Dir } from "./Dir";

type PieceAction = (laser: Laser) => Laser;

type PieceData = { name: String, img: String, apply: PieceAction };

export const pieceData = {
    forwardSlash: {
        name: "Forward Slash",
        img: "img/lasergame/forwardslash.png",
        apply(laser: Laser) {
            let obj = laser.obj;
            let { dir } = obj;
            if (dir == Dir.left) {
                dir = Dir.down;
            } else if (dir == Dir.down) {
                dir = Dir.left;
            } else if (dir == Dir.right) {
                dir = Dir.up;
            } else if (dir = Dir.up) {
                dir = Dir.right;
            }
            obj.dir = dir;
            return new Laser({ origin: "new", data: obj });
        }
    },
    backSlash: {
        name: "Back Slash",
        img: "img/lasergame/"
    }
};
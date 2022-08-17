import Phaser from "phaser";
import SpawnAction from "../SpawnAction";
import { SpawnPositionMode } from "../SpawnAction";

export default class SpawnPlayerAction extends SpawnAction{
    spawnPositionMode = SpawnPositionMode.CORNER;
    
    public spawn(scene: Phaser.Scene, tiledObject: Phaser.Types.Tilemaps.TiledObject): void {
        const position = this.getSpawnPosition(tiledObject);
        console.log(scene);
        scene.physics.add.sprite(position.x, position.y, 'player');
    }
}
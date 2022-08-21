import Phaser from "phaser";
import SpawnAction from "../SpawnAction";
import { SpawnPositionMode } from "../SpawnAction";

export default class SpawnPlayerAction extends SpawnAction{
    spawnPositionMode = SpawnPositionMode.CORNER;
    tilemapGroundLayer: Phaser.Tilemaps.TilemapLayer;

    constructor (tilemapGroundLayer) {
        super();
        this.tilemapGroundLayer = tilemapGroundLayer;
    }

    public preload(scene: Phaser.Scene): void {
        throw new Error("Method not implemented.");
    }

    public create(scene: Phaser.Scene): void {
        throw new Error("Method not implemented.");
    }
    
    public spawn(scene: Phaser.Scene, tiledObject: Phaser.Types.Tilemaps.TiledObject): void {
        const position = this.getSpawnPosition(tiledObject);
        const player = scene.physics.add.sprite(position.x, position.y, 'player');

        player.debugShowBody = true;
        player.debugShowVelocity = true;
        player.setDebugBodyColor(1000);

        scene.physics.add.collider(player, this.tilemapGroundLayer);
    }
}
import Phaser from 'phaser';

export enum SpawnPositionMode {
    CORNER,
    MIDDLE
};

export default abstract class SpawnAction {
    abstract spawnPositionMode: SpawnPositionMode;
    
    protected getSpawnPosition(tiledObject: Phaser.Types.Tilemaps.TiledObject): {x: number, y: number}  {
        if (this.spawnPositionMode === SpawnPositionMode.CORNER) {
            return {x: Number(tiledObject.x), y: Number(tiledObject.y)};
        } else if (this.spawnPositionMode === SpawnPositionMode.MIDDLE) {
            return {
                x: Number(tiledObject.x) + (Number(tiledObject.width) / 2), 
                y: Number(tiledObject.y) + (Number(tiledObject.height) / 2)
            };
        } else {
            throw new Error("Illegal Argument");
        }
    }

    public abstract preload (scene: Phaser.Scene): void;

    public abstract spawn (scene: Phaser.Scene, tiledObject: Phaser.Types.Tilemaps.TiledObject): void;

    public abstract create (scene: Phaser.Scene): void;
}
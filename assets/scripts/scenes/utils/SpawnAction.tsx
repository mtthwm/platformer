import Phaser from 'phaser';

enum SpawnPositionMode {
    CORNER,
    MIDDLE
};

export default abstract class SpawnAction {
    abstract spawnPositionMode: SpawnPositionMode;
    
    private getSpawnPosition(tiledObject: Phaser.Types.Tilemaps.TiledObject): {x: Number, y: Number}  {
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

    public abstract spawn (game: Phaser.Game, tiledObject: Phaser.Types.Tilemaps.TiledObject);
}
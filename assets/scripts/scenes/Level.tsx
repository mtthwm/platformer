import Phaser from 'phaser';

export default abstract class Level extends Phaser.Scene {
    abstract id: string;
    abstract name: string;
    abstract tilesheetUrl: URL;
    abstract tilemapJSON: object;

    public preload () {
        this.load.image(`${this.id}_tilesheet`, this.tilesheetUrl.toString());
        this.load.tilemapTiledJSON(`${this.id}_tilemap`, this.tilemapJSON);
    }

    public create () {
        const map = this.make.tilemap({key: `${this.id}_tilemap`});

        const tileset = map.addTilesetImage(`${this.id}_tileset`, `${this.id}_tilesheet`);
        
        map.createLayer('Ground', tileset, 0 , 0);


        map.getObjectLayer('Spawners').objects[0].properties
   }
}
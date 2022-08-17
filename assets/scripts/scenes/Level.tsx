import Phaser from 'phaser';
import SpawnPlayerAction from './utils/SpawnActions/SpawnPlayerAction';
import SpawnManager from './utils/SpawnManager';

export default abstract class Level extends Phaser.Scene {
    abstract id: string;
    abstract name: string;
    abstract tilesheetUrl: URL;
    abstract tilemapJSON: object;

    public preload () {
        this.load.image(`${this.id}_tilesheet`, this.tilesheetUrl.toString());
        this.load.tilemapTiledJSON(`${this.id}_tilemap`, this.tilemapJSON);
        this.load.spritesheet('player', new URL('../../art/player/Player.png', import.meta.url).toString(), {
            frameWidth: 16,
            frameHeight: 32,
        })
    }

    public create () {
        const map = this.make.tilemap({key: `${this.id}_tilemap`});

        const tileset = map.addTilesetImage(`${this.id}_tileset`, `${this.id}_tilesheet`);
        
        map.createLayer('Ground', tileset, 0 , 0);


        const spawner = new SpawnManager(this);
        spawner.addMapping('player', new SpawnPlayerAction());
        
        spawner.spawnObjects(map.getObjectLayer('Spawners').objects);
   }
}
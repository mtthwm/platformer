import Phaser from 'phaser';
import SpawnPlayerAction from './utils/SpawnActions/SpawnPlayerAction';
import SpawnManager from './utils/SpawnManager';

export default abstract class Level extends Phaser.Scene {
    abstract id: string;
    abstract name: string;
    abstract tilesheetUrl: URL;
    abstract tilemapJSON: object;
    private spawner: SpawnManager;

    public preload () {
        this.load.image(`${this.id}_tilesheet`, this.tilesheetUrl.toString());
        this.load.tilemapTiledJSON(`${this.id}_tilemap`, this.tilemapJSON);
        this.load.spritesheet('player', new URL('../../art/player/Player.png', import.meta.url).toString(), {
            frameWidth: 16,
            frameHeight: 32,
        })

        this.spawner = new SpawnManager(this);
    }

    public create () {
        const map = this.make.tilemap({key: `${this.id}_tilemap`});

        const tileset = map.addTilesetImage(`${this.id}_tileset`, `${this.id}_tilesheet`);
        
        const groundLayer = map.createLayer('Ground', tileset, 0 , 0);

        // Set up the layer to have matter bodies. Any colliding tiles will be given a Matter body.
        groundLayer.setCollisionByProperty({ collides: true });
        // this.physics.collide()

        this.spawner.addMapping('player', new SpawnPlayerAction());

        this.spawner.spawnObjects(map.getObjectLayer('Spawners').objects);
   }
}
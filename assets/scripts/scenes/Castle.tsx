import Phaser from 'phaser';
import CastleTilemapJson from '../../tilemaps/tilemaps/Castle.json';

const castleTilesheet = new URL('../../tilemaps/tilesheets/CastleTilesheet.png', import.meta.url);

export default class CastleScene extends Phaser.Scene {
    public preload () {
        this.load.image('CastleTileSheet', castleTilesheet.toString());
        this.load.tilemapTiledJSON('CastleTilemap', CastleTilemapJson);
    }

    public create () {
        const map = this.make.tilemap({key: 'CastleTilemap'});

        const tileset = map.addTilesetImage('Castle', 'CastleTileSheet');
        
        map.createLayer('Ground', tileset, 0 , 0);
   }
}
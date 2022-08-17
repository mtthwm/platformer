import Phaser from 'phaser';
import SpawnAction from './SpawnAction';

/* A class that handles setting up mappings from tile objects to actual in-game ones*/
export default class SpawnManager {
    private mappings: {
        [key: string]: SpawnAction,
    };
    private game: Phaser.Game;

    constructor (game: Phaser.Game) {
        this.game = game;
    }

    public addMapping (key: string, action: SpawnAction) {
        this.mappings[key] = action;
    }

    public spawnObjects (objects: Phaser.Types.Tilemaps.TiledObject[]) {
        objects.forEach((item) => {
            this.mappings[item.properties.spawn].spawn(this.game, item);
        });
    }
}
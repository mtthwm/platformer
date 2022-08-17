import Phaser from 'phaser';
import SpawnAction from './SpawnAction';

/* A class that handles setting up mappings from tile objects to actual in-game ones*/
export default class SpawnManager {
    private mappings: {
        [key: string]: SpawnAction,
    } = {};
    private scene: Phaser.Scene;

    constructor (scene: Phaser.Scene) {
        this.scene = scene;
    }

    public addMapping (key: string, action: SpawnAction) {
        this.mappings[key] = action;
    }

    public spawnObjects (objects: Phaser.Types.Tilemaps.TiledObject[]) {
        objects.forEach((item) => {
            console.log(this.mappings);
            const spawnProperty = item.properties.find(item => item.name === 'spawn');
            this.mappings[spawnProperty.value].spawn(this.scene, item);
        });
    }
}
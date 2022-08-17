import Phaser from 'phaser';
import Level from './Level';

import castleTilemapJson from '../../tilemaps/tilemaps/Castle.json';

const castleTilesheet = new URL('../../tilemaps/tilesheets/CastleTilesheet.png', import.meta.url);

export default class CastleLevel extends Level {
    id = 'castle';
    name = 'Castle';
    tilesheetUrl = castleTilesheet;
    tilemapJSON = castleTilemapJson;
}
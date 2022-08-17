import Phaser from 'phaser';
import CastleScene from './assets/scripts/scenes/Castle';
import GameConfig from './assets/scripts/config/GameConfig';


window.onload = () => {
    var config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        pixelArt: true,
        zoom: GameConfig.pixelSize,
        backgroundColor: '#ffffff',
        width: GameConfig.tileSize * GameConfig.screenWidthTiles,
        height: GameConfig.tileSize * GameConfig.screenWidthTiles,
        scene: new CastleScene({})
    };
    
    var game = new Phaser.Game(config);
}
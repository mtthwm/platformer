import Phaser from 'phaser';
import CastleLevel from './assets/scripts/scenes/CastleLevel';
import GameConfig from './assets/scripts/config/GameConfig';


window.onload = () => {
    const castleLevel = new CastleLevel({});

    var config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        zoom: GameConfig.pixelSize,
        backgroundColor: '#ffffff',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        width: GameConfig.tileSize * GameConfig.screenWidthTiles,
        height: GameConfig.tileSize * GameConfig.screenWidthTiles,
        scene: castleLevel,
    };
    
    var game = new Phaser.Game(config);
}
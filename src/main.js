import k from "./kaboomContext.js";
import world from "./scenes/world.js";
import upClassroom_1 from "./scenes/UpClassrooms/UpClassroom_1.js";
import upClassroom_2 from "./scenes/UpClassrooms/UpClassroom_2.js";
import upClassroom_3 from "./scenes/UpClassrooms/UpClassroom_3.js";
import upClassroom_4 from "./scenes/UpClassrooms/UpClassroom_4.js";
import upClassroom_5 from "./scenes/UpClassrooms/UpClassroom_5.js";
import upClassroom_6 from "./scenes/UpClassrooms/UpClassroom_6.js";
import upClassroom_7 from "./scenes/UpClassrooms/UpClassroom_7.js";
import upClassroom_8 from "./scenes/UpClassrooms/UpClassroom_8.js";
import upClassroom_9 from "./scenes/UpClassrooms/UpClassroom_9.js";
import upClassroom_10 from "./scenes/UpClassrooms/UpClassroom_10.js";
import upClassroom_11 from "./scenes/UpClassrooms/UpClassroom_11.js";
import upClassroom_12 from "./scenes/UpClassrooms/UpClassroom_12.js";
import downClassroom_1 from "./scenes/DownClassrooms/DownClassroom_1.js";
import downClassroom_2 from "./scenes/DownClassrooms/DownClassroom_2.js";
import downClassroom_3 from "./scenes/DownClassrooms/DownClassroom_3.js";
import downClassroom_4 from "./scenes/DownClassrooms/DownClassroom_4.js";
import downClassroom_5 from "./scenes/DownClassrooms/DownClassroom_5.js";
import downClassroom_6 from "./scenes/DownClassrooms/DownClassroom_6.js";
import downClassroom_7 from "./scenes/DownClassrooms/DownClassroom_7.js";
import downClassroom_8 from "./scenes/DownClassrooms/DownClassroom_8.js";
import setBattle from "./scenes/battle.js";
import groundFloor from "./scenes/groundFloor.js";
import universityCourtyard from "./scenes/universityCourtyard.js";
import { loadAssets } from './assetLoader.js';

loadAssets();

const scenes = {
    world,
    upClassroom_1,
    upClassroom_2,
    upClassroom_3,
    upClassroom_4,
    upClassroom_5,
    upClassroom_6,
    upClassroom_7,
    upClassroom_8,
    upClassroom_9,
    upClassroom_10,
    upClassroom_11,
    upClassroom_12,
    downClassroom_1,
    downClassroom_2,
    downClassroom_3,
    downClassroom_4,
    downClassroom_5,
    downClassroom_6,
    downClassroom_7,
    downClassroom_8,
    setBattle,
    groundFloor,
    universityCourtyard,
};

for (const sceneName in scenes) {
    k.scene(sceneName, (args) => scenes[sceneName](k, args));
}

k.go('world')
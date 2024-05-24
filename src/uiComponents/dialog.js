import { gameState } from "../state/stateManagers.js";

async function displayLine(textContainer, line) {
  for (const char of line) {
    await new Promise((resolve) =>
      setTimeout(() => {
        textContainer.text += char;
        resolve();
      }, 10)
    );
  }
}

export async function dialog(k, pos, content, battle = false, info = {}) {
  gameState.setFreezePlayer(true);

  const dialogBox = k.add([k.rect(1276, 300), k.pos(pos), k.outline(4), k.fixed()]);
  const textContainer = dialogBox.add([
    k.text("", {size: 42}),
    k.color(0, 0, 0),
    k.pos(20, 40),
    k.fixed(),
  ]);

  let index = 0;

  await displayLine(textContainer, content[index]);
  let lineFinishedDisplayed = true;
  const dialogKey = k.onKeyPress("space", async () => {
    if (!lineFinishedDisplayed) {
      return;
    }

    index++;
    if (!content[index]) {
      k.destroy(dialogBox);
      dialogKey.cancel();
      gameState.setFreezePlayer(false);
      if(battle) k.go('setBattle', info);
      return;
    }

    textContainer.text = "";
    lineFinishedDisplayed = false;
    await displayLine(textContainer, content[index]);
    lineFinishedDisplayed = true;
  });
}

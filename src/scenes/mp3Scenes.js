class mp3Scene {
    constructor(k, audioName) {
        this.mp3Scene = k.play(audioName, {
            volume: 0.5,
            loop: true
        });
    }
}

export function initMp3Scene(k) {
    const universityCourtyardScene = new mp3Scene(k, 'patio');
    universityCourtyardScene.mp3Scene.paused = true;

    return { universityCourtyardScene };
}
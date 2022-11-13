var sounds = {
    list: {
        "bullet": ["bullet1", "bullet2"],
        "heatseeker": ["heatseeker1", "heatseeker2"],
        "fireball": ["laser1", "laser2"],
        "cannon-ball": ["cannon1", "cannon2"],
        "message-received": ["message"],
        "acknowledge-attacking": ["engaging"],
        "acknowledge-moving": ["yup", "roger1", "roger2"],
		"stage1": ["stage1"],
		"stage2": ["stage2"],
		"stage3": ["stage3"],
		"stage4": ["stage4"],
		"stage5": ["stage5"],
		"stage6": ["stage6"],
		"stage7": ["stage7"],
		"stage8": ["stage8"],
		"stage9": ["stage9"],
		"stage10": ["stage10"],
		"stage11": ["stage11"],
		"stage12": ["stage12"],
    },

    loaded: {},
    init: function() {
        // Iterate through the sound names in the list, and load audio files for each
        for (let soundName in this.list) {
            let sound = {
                // Store a counter to keep track of which sound is played next
                counter: 0
            };

            sound.audioObjects = [];
            this.list[soundName].forEach(function(fileName) {
                sound.audioObjects.push(loader.loadSound("audio/" + fileName));
            }, this);

            this.loaded [soundName] = sound;
        }
    },

    play: function(soundName) {
        let sound = sounds.loaded[soundName];

        if (sound) {
            // Play audio for sound name based on counter location
            let audioObject = sound.audioObjects[sound.counter];

            audioObject.play();

            // Move to the next audio next time
            sound.counter++;
            if (sound.counter >= sound.audioObjects.length) {
                sound.counter = 0;
            }
        }
    },
	
	stop: function(soundName) {
        let sound = sounds.loaded[soundName];
		
		if (sound) {
			let audioObject = sound.audioObjects[sound.counter];
			audioObject.pause();
		}
    }
};

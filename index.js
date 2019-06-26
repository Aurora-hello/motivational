const messages = require("./messages.json");
module.exports = function ChatSpam(mod) {

    function randInt(min, max) { return min + Math.floor(Math.random() * (max-min)); }
    function tick() {
        mod.send('S_CHAT', 3, { name: "Aurora", message: messages[randInt(0, messages.length - 1)] });
        mod.setTimeout(() => tick(), randInt(60000, 120000));
    }

    mod.game.on('enter_game', () => tick());
}
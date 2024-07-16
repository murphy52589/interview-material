class Player {
    constructor(name) {
        this.name = name;
        this.flagsCollected = 0;
        this.score = 0;
    }

    collectFlags(flags) {
        this.flagsCollected += flags;
        return this.flagsCollected;
    }

    resetFlags() {
        this.flagsCollected = 0;
    }
}

class Game {
    constructor(player1, player2) {
        this.players = [new Player(player1), new Player(player2)];
        this.totalFlags = 0;
        this.round = 0;
    }

    addFlags(flags) {
        this.totalFlags += flags;
    }

    startRound() {
        this.round++;
        console.log(`Round ${this.round} starts!`);

        // Reset each player's flag count for the round
        this.players.forEach(player => player.resetFlags());

        // Each player collects flags
        this.players.forEach(player => {
            const flags = Math.floor(Math.random() * 6) + 1; // Random flags between 1 and 6
            player.collectFlags(flags);
            this.totalFlags -= flags;
        });

        console.log(`End of round ${this.round}.`);
        this.players.forEach(player => console.log(`${player.name} collected ${player.flagsCollected} flags.`));

        // Apply bonus points
        if (this.round > 1) {
            this.players.forEach(player => {
                if (player.flagsCollected === this.prevRoundFlags[player.name]) {
                    player.score += player.flagsCollected; // Double the points for consecutive same flag count
                }
            });
        }

        // Update previous round flags
        this.prevRoundFlags = this.players.reduce((acc, player) => {
            acc[player.name] = player.flagsCollected;
            return acc;
        }, {});
    }

    calculateScore() {
        this.players.forEach(player => player.score += player.flagsCollected);
    }

    getWinner() {
        this.calculateScore();
        this.players.forEach(player => console.log(`${player.name} total score: ${player.score}`));
        const winner = this.players.reduce((max, player) => player.score > max.score ? player : max, this.players[0]);
        console.log(`The winner is ${winner.name} with ${winner.score} points!`);
    }

    play() {
        this.addFlags(10);
        this.prevRoundFlags = {};

        // Play at least 5 rounds
        while (this.round < 5 || this.totalFlags > 0) {
            this.startRound();
            if (this.round >= 5 && this.totalFlags === 0) break;
        }

        this.getWinner();
    }
}

const game = new Game('Player 1', 'Player 2');
game.play();

/*
# Rules

*Note: These rules are a subset used for the express purpose of running a programming exercise. There are many other rules that are not relevant here.*

- A game always consists of 2 players.
- At the beginning of the game, there are 0 flags on the field.
- A game consists of at least 5 rounds.
- Before each round, 10 flags are added to the field by referees in random locations.
- To begin a round, players face off at the center of the field, and when the head referee shouts “Begin”, the players run around collecting flags.
- During each round, each player collects as many flags as they can in 90 seconds.
- Unclaimed flags can either roll over to the next round (Scottish Rules) or be thrown out (Welsh Rules).
- If there are flags remaining during the 5th round, they continue to roll over to additional rounds, regardless of ruleset. No new flags are added to the field in rounds after 5. Players continue to compete in additional rounds until all flags are collected.

# Scoring

Your score for a particular round, in points, is the same as the number of flags you collected. At the end of the game, after all flags are collected, the person with the most points wins. If two players are tied at the end, the game is a draw.

# Bonus Points

If a player collects the same number of flags in 2 consecutive rounds, their point total on the second round is doubled. A player can get double points multiple times in a row (this can repeat round after round. For example: collecting 4 flags 3 times in a row results in total points per round of 4, 8, and 8).
 */

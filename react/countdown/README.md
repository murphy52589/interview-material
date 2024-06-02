# Countdown

## This challenge was a 60 minute Codility assessment

Your task is to implement a React component that renders a running clock that will count down time until it reaches 0 minutes and 0 seconds (00:00).

## Functionality

### Given the HTML structure:
```html
<label>
    <input type="number" />
    Minutes
</label>
<label>
	<input type="number" />
	Seconds
</label>

<button>Start</button>
<button>Pause / resume</button>
<button>Reset</button>

<h1 data-testid="running-clock">00:00</h1>
```

Implement a running clock that receives its time value from user inputs and allows the user to start, pause/resume the countdown and reset the clock

In order to satisfy the task's requirements, you need to implement the following:
1. Time display
    1. Time is displayed in `<h1 data-testid="running-clock">00:00</h1>` and its initial value is `00:00`
    2. Time is displayed in the format `mm:ss` (minutes:seconds)
    3. 1 minute, 5 seconds should be displayed as `01:05`
    4. 1 minute, 65 seconds should be displayed as `02:05`
2. Inputs
    1. Changing the input values does not change the value displayed in `<h1 data-testid="running-clock">00:00</h1>`
    2. Inputs do not need to have `max` or `min` values
    3. The clock doesn't need to handle negative values
3. Behavior
    1. On a `start` button click, set the clock displayed in `<h1 data-testid="running-clock">00:00</h1>` with the time calculated from the inputs and start counting down
    2. Once the clock is running, update the displayed time every second
    3. Once the clock is running and the `start` button is clicked, restart the clock with the same time originally provided in the inputs
    4. Once the countdown is done and the clock reaches `00:00`, stop counting and keep displaying `00:00`
    5. On a `paurse/resume` button click, pause or resume the clock appropriately
        1. `pause` puts the countdown on hold
        2. `resume` continues the countdown from where it was paused
    6. On a `reset` click, both inputs should be reset to `0`
    7. Once the `reset` button is clicked, the time displayed in `<h1 data-testid="running-clock">00:00</h1>` should be reset to `00:00`

### Implementation hints and notices:
- Do not clear the inputs on a `start` button click
- Use the same button element for both pause and resume actions


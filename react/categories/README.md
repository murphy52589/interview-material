You are tasked with implementing a feature to display call suggestions. Using React and CSS and the initial template code provided, please reveal the top level call suggestions as a list, based on the sample JSON structure defined in categories.js (let’s assume this JSON structure is what an API could return).
## Requirements
- Indicate whether or not each category is enabled for the call. Clicking on a category should reveal its sub-categories, if they're enabled, and so on. 
- The enabled or disabled state of each category may be indicated with an icon, a different color, or both. Feel free to make it look great!
- Each element should be a bubble that's clickable in case there are sub-categories to reveal. Sub-categories should be displayed in a nested
list.
- Adding or removing features from categories.js should automatically update the DOM when the page is reloaded.
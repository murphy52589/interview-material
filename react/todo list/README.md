## Todo List
The goal of this exercise is to create a working todo list with persistent data storage.

To start with, we have a styled todo list that supports adding todos. We also have pre-made styles for completed todo items. Although there’s no working mechanism for “completing” a todo.

### Requirements
- Clicking on a todo item should toggle the “checked” state.
- The todo list state should be saved and loaded from local storage.
- Checked items should sink to the bottom of the list automatically

### Stretch Goals
- Allow todos to be deleted. When you hover your mouse over a todo, an X should appear on the far right side, clicking the X should remove it from the list.
- Add hidden timestamps to todos (created_at, completed_at), these will be used for sorting
- The active todos should be sorted by created_at descending
- The completed todos should be sorted by completed_at ascending

### Note
This exercise came from a Coderpad live coding interview

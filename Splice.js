let colors = ['red', 'green', 'blue', 'yellow'];

// Removing elements
colors.splice(1, 2);  // Removes 'green' and 'blue'; colors = ['red', 'yellow']

// Adding elements
colors.splice(1, 0, 'orange', 'purple');  // Adds 'orange' and 'purple' at index 1; colors = ['red', 'orange', 'purple', 'yellow']

# Coding Standards

## Overview

Maintaining a consistent coding style is crucial for the readability and maintainability of the 4Ddeveloper App codebase. Please adhere to the following coding standards when contributing to the project.

## Coding Standards

1. **Indentation:**

   - Use spaces for indentation (preferably 2 or 4 spaces).

2. **Variable Naming:**

   - Use meaningful and descriptive names for variables and functions.

3. **Comments:**

   - Add comments to explain complex code sections or to provide additional context.

4. **Testing:**

   - Write tests for new features or changes whenever possible.

5. **Commit Messages:**
   - Write clear and concise commit messages following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

## Example

```javascript
// Good Example
function calculateTotalPrice(itemPrice, quantity) {
  // Calculate total price
  const totalPrice = itemPrice * quantity;

  return totalPrice;
}

// Bad Example
function calc(itemPrice, qty) {
  const total = itemPrice * qty; // calculate
```

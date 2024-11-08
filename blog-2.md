# How to handle asynchronous operations using async/await over callback/promise TypeScript.

# Handling Asynchronous Operations with `async/await` in TypeScript

Asynchronous programming allows tasks like fetching data or reading files without blocking the main thread. In TypeScript, there are several ways to handle async operations: **callbacks**, **promises**, and the modern **async/await**. Let’s explore why `async/await` is the best approach.

## Callbacks: The Old Way

Callbacks were the original way to handle async tasks. However, they often lead to nested code that is hard to read and maintain.

```typescript
function fetchData(callback: (data: string) => void) {
  setTimeout(() => callback('Fetched data'), 1000);
}
fetchData((data) => console.log(data)); // Output: Fetched data
```

Problems:

- Hard to manage when you have many async tasks.
- Error handling is more complex.

Promises: Improved Handling
Promises help avoid nested callbacks but can still become verbose.

function fetchDataWithPromise(): Promise<string> {
return new Promise((resolve) => setTimeout(() => resolve('Fetched data'), 1000));
}
fetchDataWithPromise().then(console.log); // Output: Fetched data

Problems:

- Chaining .then() can become messy.
- Error handling requires .catch()

# Async/Await: The Modern Solution

async/await is built on promises and makes asynchronous code look and behave like synchronous code, improving readability and maintainability.

async function fetchDataAsync(): Promise<string> {
const data = await new Promise<string>((resolve) => setTimeout(() => resolve('Fetched data'), 1000));
console.log(data); // Output: Fetched data
return data;
}
fetchDataAsync();

# Benefits:

- Clean and readable code, even for multiple async tasks.
- Error handling is simple with try/catch.

# Conclusion

While callbacks and promises are useful, async/await makes handling asynchronous code much easier and more readable in TypeScript. It simplifies error management and makes code more maintainable, especially for complex scenarios.

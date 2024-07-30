### Problem Statement
You are given two endpoints:

	1.	https://jsonplaceholder.typicode.com/users - This endpoint returns a list of users.
	2.	https://jsonplaceholder.typicode.com/posts - This endpoint returns a list of posts.

Your task is to fetch data from these two endpoints and use the data to print a summary of how many posts each user has. The output should be a string for each user in the following format:
`<User Name> has <Number of Posts> posts.`

### Requirements

	1.	Fetch the list of users from the first endpoint.
	2.	Fetch the list of posts from the second endpoint.
	3.	For each user, determine the number of posts they have authored.
	4.	Print the summary to the console.

### Considerations

	•	Handle the possibility of network errors or issues with the API responses gracefully.
	•	You may use any HTTP client library, such as axios or Node.js’s built-in https module, to fetch the data.
	•	Ensure that your solution is efficient and avoids unnecessary data processing.

Example Output

For example, if the users endpoint returns the following data:
```
[
  { "id": 1, "name": "Leanne Graham" },
  { "id": 2, "name": "Ervin Howell" }
]
```

And the posts endpoint returns:
```
[
  { "userId": 1, "title": "Post 1" },
  { "userId": 1, "title": "Post 2" },
  { "userId": 2, "title": "Post 3" }
]
```

The output should be: 
```
Leanne Graham has 2 posts.
Ervin Howell has 1 post.
```
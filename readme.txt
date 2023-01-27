HTTP requests from react app

- GET
- POST
- PATCH
- DELETE

- fetch api
- api: "http://localhost:4000/api/users"

- routes demo
/users -> GET -> [{id, name, age}...]
/users/:id -> GET {id,name,age}
/users/ -> POST -> { name, age}
/users/:id -> PATCH -> update the users
/users/:id -> DELETE -> delete the user
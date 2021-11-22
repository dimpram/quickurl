# Quickurl backend

## Getting started

Create an `.env` file and add the following variables (the values are example):

```
MONGO_DB_URI=mongodb://localhost:27017/quickurl
PORT=5000
HOST=http://localhost
```

## TODOS

- Add environment variables [ ]
- Refactor configs [ ]
- Add error handling [ ]


### Notes

Set the environment variable NODE_ENV to production, to run the app in production mode.

res.status(500).json("server error")

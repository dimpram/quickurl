# TODOS

- Add environment variables [ ]
- Refactor configs [ ]
- Add error handling [ ]


## /shorten steps
1. Receive a new URL [x]
2. Check if it is a valid URL [x]
3. Check if it already exists in the database [x]
4. If it exists, increment the attampts field else if it doesn't exist, create a new ShortURL instance and add it to the database [x]
5. Return the new ShortURL document is json [x]

### Notes

Set the environment variable NODE_ENV to production, to run the app in production mode.

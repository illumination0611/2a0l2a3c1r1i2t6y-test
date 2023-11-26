# 2a0l2a3c1r1i2t6y-test
## Setup Env
Please run ```npm install``` on root project.

## Build Project
Please run ```npm run build``` on root project.

## Run Project
Please run ```npm run Start``` on root project.

## Develop Project
Please run ```npm run dev``` on root project.

## Test project using Postman
- Use ```POST``` method.
- Set GraphQL endpoint as ```http://localhost:4000/graphql```.
- On body section, select GraphQL.
- Use below query and data to store data.
```
mutation StoreData($id: String!, $encryptionKey: String!, $value: String!) {
    storeData(id: $id, encryptionKey: $encryptionKey, value: $value)
}
```
```
{
    "id": "jobs-2",
    "encryptionKey": "hello",
    "value": "World"
}
```
- Use below query and data to retrieve data.
```
query RetrieveData($id: String!, $decryptionKey: String!) {
    retrieveData(id: $id, decryptionKey: $decryptionKey)
}
```
```
{
    "id": "jobs-*",
    "decryptionKey": "hello1"
}
```

## Live Demo

https://github.com/illumination0611/2a0l2a3c1r1i2t6y-test/assets/150149002/504073fa-aef0-4968-a677-b485204393bc

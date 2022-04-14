
# URL Shortner App

It is a url Shortner app which takes long url and shorten it into a 7 characters long string.

## API Reference

#### Short URL

```http
  POST /
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `url`     | `string` | **Required**. url to shorten it |

#### Short URL

```http
  get /:shortUrl
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `shortUrl`     | `string` | **Required**. shortUrl to return original url |


## Tech Stack

**Server:** Node, Express

**DataBase:** MySQL

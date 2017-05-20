# Chatbot

***Based off the [Facebook sample code](https://developers.facebook.com/docs/messenger-platform/quickstart).***

## Run

You can start the server by running `npm start`. However, the webhook must be at a public URL that the Facebook servers can reach. Therefore, running the server locally on your machine will not allow you to test via Facebook messanger but you can send sample input to your localhost:5000/webhook endpoint. A sample body is below

````
{
  "object": "page",
  "entry": [
      {
          "id": "1",
          "time": 1471760180753,
          "messaging": [
              {
                  "sender": {
                      "id": "1"
                  },
                  "recipient": {
                      "id": "2"
                  },
                  "timestamp": 1471760180696,
                  "message": {
                      "mid": "mid.1471760180689:53818e6ab8064b1077",
                      "seq": 626,
                      "text": "hey"
                  }
              }
          ]
      }
  ]
}
````

## Add New Features

Implement a new feature in /features which exports a `trigger(actionName)` function and a `action(recipientId, apiAiResponse)` function. The first should return true if the message received should trigger the feature and the second should act on the message. See the echo.js feature for a simple example which acts as the final catch-all if no other feature is triggered.

Add your new feature to the list of enabled features in `config/features.js` and that's it.

Changes to the master branch will be deployed to Heroku through Codeship, and the build status will be shown next to the commit here on BitBucket
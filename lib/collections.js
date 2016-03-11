//Create the database collection in Mongo, and set a global variable to reference each collection
Meals = new Mongo.Collection("meals");
Messages = new Mongo.Collection("messages");
Events = new Mongo.Collection("events");
Chats = new Mongo.Collection("chats");
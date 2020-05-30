import { MongoClient } from "https://deno.land/x/mongo/mod.ts";

const client = new MongoClient();
client.connectWithUri("mongodb+srv://denotutorial:u8MKyDy0QDyw3WRj@deno-tutorial-ja5uc.gcp.mongodb.net/test?retryWrites=true&w=majority");

const database = client.database("deno-tutorial");
const collection = database.collection("data");

export { database, collection };

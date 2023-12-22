// import {Client, Account, Databases} from 'appwrite'
// import {cors} from 'cors'

// const client = new Client(); // set your end-pionts 




// client.setEndpoint(cors({origin:"https://cloud.appwrite.io/v1"}).setProject("647332cb9306f58de4a4"))

// export const account = new Account(client) // this Account is responsible for creating  the account

// //Databases

// export const databases = new Databases(client, "647333601791c143edc3")

import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6488715ad75872c5520e'); // Set the Appwrite API endpoint, request options, and project ID

export const account = new Account(client); // Create an instance of the Account class using the client

export const databases = new Databases(client, "648871c5609ba7de7263"); // Create an instance of the Databases class using the client and database ID

Some info about the code:
I have added some input validation for the user input coming from the front end, the point
was to make sure the input was "valid", example : email is in correct form (example@something.com),
phone length and nubmers only and etc.
<br>
**The only input that wasn't tested was the price, because this isn't connected to the user input
(should be generated auto everytime a user adds a new item for the order and sent from frontend).**
</br>
Moreover, I implemented the test you requested using the mocha-chai framework
<br>

The Node version I was using is v14.17.5, so anything newer should work (tested also with v14.17.6)
</br>
I used visual studio code as the code editor, and MongoDB as the databse for storing the POST requests.
The dependencies used are : chai, chai-http, dotenv, express, mocha, moment, mongoose, nodemon, uuid

How to use:
1) Download the code from the github rep
2) Navigate to the folder using cmd, visual studio code or anything you like.
3) type: npm install
4) Now the dependencies will be installed in the project
5) type: npm start
6) Now the server should be up and running and you can make the POST and GET request as instruced in the exc.

Example for a post request which will be delivered succesffuly : (Using postman)
url : http://localhost:3000/api/router/saveOrder
<br>

</br>


7) If you wish to use the test I have implemented, type : npm test

Thank you!


<br>
Some info about the code: I have added some input validation for the user input coming from the front end, the point was to make sure the input was "valid", example : email is in correct form (example@something.com), phone length and nubmers only (0541234567 as example) and etc.
</br>

**The only input that wasn't tested was the price, because this isn't connected to the user input (should be generated auto everytime a user adds a new item for the order and sent from frontend).**

<br>
Payment method should be "credit card" or "cash", and also chosen by the user, but if by mistake doesn't change, server raises an error,
<br>
All the inputs should be considered as a string, the order_items (which is the food ordered) is an array of strings,
and price is a number.

**Moreover, I implemented the test you requested using the mocha-chai**

The Node version I was using is v14.17.5, so anything newer should work (tested also with v14.17.6)
I used visual studio code as the code editor, and MongoDB as the databse for storing the POST requests. The dependencies used are : chai, chai-http, dotenv, express, mocha, moment, mongoose, nodemon, uuid
</br>
<br>
How to use:
</br>

1) Download the code from the github rep
2) Navigate to the folder using cmd, visual studio code or anything you like.
3) Type: npm install
4) Now the dependencies will be installed in the project
5) Type: npm start
6) Now the server should be up and running and you can make the POST and GET request as instructed in the exc.

Example for a post request which will be delivered succesffuly : (Using postman) url : http://localhost:3000/api/router/saveOrder
<br>
![image](https://user-images.githubusercontent.com/28116538/132114496-9849cd38-459d-4b54-8c36-c380cd4dee9d.png)
![image](https://user-images.githubusercontent.com/28116538/132114508-343aefe6-4aec-415d-b6cd-e0ba8be553b1.png)

</br>
<br>
Example for a post request which will be denied as the user put a wrong input (email not in valid form, and no phone input): 

![image](https://user-images.githubusercontent.com/28116538/132114564-4ae4d203-afd9-463d-be54-f1fba89a3d9b.png)
![image](https://user-images.githubusercontent.com/28116538/132114579-b1011225-9762-4c0d-aa02-995e808c4ceb.png)

</br>

**TESTING:**
If you wish to test, type : npm test
<br>
First tests saves a new valid order which will be delivered and stored in the database.
<br>
Second will be a an order where the name will be missing
<br>
Third will be an order where the email is not in valid form
<br>
Fourth will be an order where the phone is not in valid form
<br>
Fifth and last will be a get request for all the orders of that day, should return the first order made with the good request, and others if you wish to put more at the start.

Thank you!



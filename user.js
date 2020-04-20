const fs = require("fs");
let logUser = (username) => {
   //Your implementation goes here
   fs.readFile('./names.txt', 'utf8', (err,content) => {
       if(err) throw err
       let contentArray = new Array() 
       contentArray  = content.split(", ").toString()
        if(contentArray.includes(username))
            console.log('User already exists')
        else
        {  fs.appendFile('./names.txt',","+username, (err) => {
            if(err) throw err
            console.log(username + ' has been added successfully')
        })
        }
   })
};


//logUser("Sam");
logUser("Jack");

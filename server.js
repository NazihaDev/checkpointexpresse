// import express (after npm install express)
const express = require('express');

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 4000;

//middleware

const closed =()=>{
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    return (day !== 1 && day !== 5 )&&( hour < 14 && hour > 9  );
     };

 // close
 app.use( express.static('pages'));
 app.use(function(req,res,next){
     if (closed()){
        res.sendFile(__dirname+'/pages/Close.html')
         console.log('This App is not available !')
     }
     else {
         next();
     }
 })
 

// create a route for the app

app.get('/',function(req,res){
    res.sendFile(__dirname+'/pages/Home.html')
});
app.get('/Contact',function(req,res){
    res.sendFile(__dirname+'/pages/Contact.html')
});
app.get('/Service',function(req,res){
    res.sendFile(__dirname+'/pages/Service.html')
});
app.get('/Close',function(req,res){
    res.sendFile(__dirname+'/pages/Close.html')
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
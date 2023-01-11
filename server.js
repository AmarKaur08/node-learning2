//................Creating server thru http........................
// const http=require('http');
// const server=http.createServer((request,response)=>
// {
//   const user={
//     name:"parul",
//     class:'12th'
//   }
//   console.log('headers',request.headers);
//   console.log('methods',request.method);
//   console.log('urls',request.url);
//   response.setHeader('Content-Type','application/json')
//   response.end(JSON.stringify(user))//converting js object to json to send over web then on frontend we can do json.parse()
// })

// server.listen(3000);
//.....................end...........................................
const express=require('express');
const app=express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
//middleware in express
// app.use((req,res,next)=>{
//   console.log('middleware')//middleware gets request nd we can do whatever we want with it..
//   next();//its imp to call so that below code can b executed......
// })
app.get('/',(req,res)=>
{
  // res.send('Hellllooo123')
  //we can also send status as res...
  res.status(404).send('not found');
  //restful APi
  console.log(req.query)
  console.log(req.body)
  console.log(req.params)
  console.log(req.headers)
  //restful APi
})
app.get('/profile',(req,res)=>
{
  console.log(req.body);
  res.send('getting profile')
})

app.post('/profile',(req,res)=>
{
  console.log(req.body);
  res.send('Success')
})

app.listen(8000);
// console.log('urls',request.url)            
//............creating server tru express-npm install express..................




//............................end..............................

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Feedback-form</title>
      <link rel="stylesheet" href="main.css">
  </head>
  
  <body>
  
      
      <div class="form-c">
          <form action="">
              <h3> Feedback Form </h3>
              <label for="">Name</label>
              <input type="text" placeholder="Your Name" required>
              <label for="">Email</label>
              <input type="email" placeholder="Your Email" required>
              <label for="">Product</label>
              <input type="text" placeholder="Product Name" required>
              <label for="">Experience</label>
              <textarea name="" id="" cols="25" rows="8" placeholder="Experience about Product" ></textarea>
              <input type="button" value="Submit">
  
          </form>
           
      </div>
      
   
   
  
  
  
  
  
  
  
  
  
  
  </body>
  <script src="main.js"></script>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
const express = require('express');
const app = express();
const port = 3000; // Choose your desired port
var cors = require('cors')

var axios = require('axios');
var request = require('request');

app.use(express.json());



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
app.use(cors())

app.post('/chat', async (req, res) => {
    let  message  = JSON.stringify(req.body);
   
      var options = {
        'method': 'POST',
        'url': 'https://api.openai.com/v1/chat/completions',
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer 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'
          },
        body: message
      
      };
      request(options, function (error, response) {
        if (error) {
            
            res.send(400 , {"error":"Error in response"})
        }
        console.log(response.body);
        res.status(200).send(JSON.parse(response.body))
        
      });
      

})






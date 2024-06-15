import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");
});

// get list of 5 jokes
app.get("/api/jokes", (req, res) => {
  res.send([
    {
      id: 1,
      title : 'a joke about a joke' ,
      joke: 'why did the joke go to the doctor? Because it had a pun in its side.',
    },
    {
      id: 2,
      title : 'a joke about a joke' ,
      joke: 'why did the joke go to the doctor? Because it had a pun in its side.',
    },
    {
      id: 3,
      title : 'a joke about a joke' ,
      joke: 'why did the joke go to the doctor? Because it had a pun in its side.',
    },
    {
      id: 4,
      title : 'a joke about a joke' ,
      joke: 'why did the joke go to the doctor? Because it had a pun in its side.',
    },
    {
      id: 5,
      title : 'a joke about a joke' ,
      joke: 'why did the joke go to the doctor? Because it had a pun in its side.',
    },
    
  ] 
);res.send(joke);
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
}); 

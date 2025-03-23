const express = require('express');
const router = express.Router(); 
router.use(express.json());
const axios = require("axios");

router.get("/jobs", async (req, res) => {
  try {
    const options = {
        method: 'GET',
        url: 'https://linkedin-data-api.p.rapidapi.com/search-jobs-v2',
        params: {
          keywords: 'React',
          locationId: '92000000',
          datePosted: 'pastWeek,past24Hours',
          sort: 'mostRelevant'
        },
        headers: {
            'x-rapidapi-key': process.env.RapidApiKey,
            'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com'
          }
      };
      async function fetchData() {
        try {
            const response = await axios.request(options);
            console.log(response.data.data);
            res.status(200).json(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }
    fetchData();
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).send("Error fetching data from API");
  }
});

router.get("/jobdetails/:id", async (req, res) => {
  try {
    const options = {
        method: 'GET',
        url: 'https://linkedin-data-api.p.rapidapi.com/get-job-details',
        params: {id: req.params.id},
        headers: {
            'x-rapidapi-key': process.env.RapidApiKey,
            'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com'
    }
    };
    const response = await axios.request(options);
    //   console.log(response.data);
      res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).send("Error fetching data from API");
  }
});

module.exports = router;
const express = require('express');
const router = express.Router(); 
router.use(express.json());
const axios = require("axios");

// use skills for searching
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
        params: {id:req.params.id},
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

router.post('/user/applyjob', async (req, res) => {
  const { jobId } = req.body;
  // if (!jobId) {
  //   return res.status(400).json({ message: 'Job ID is required' });
  // }

   try {
  //   const job = await Job.findById(jobId);
  //   if (!job) {
  //     return res.status(404).json({ message: 'Job not found' });
  //   }

  //   job.applied += 1; // Increment the applied count
    // await job.save(); // Save the updated job document

    return res.status(200).json({ message: 'Application successful' });
  } catch (error) {
    console.error('Error applying for job:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

//save pdf

// app.post("/profile/save-pdf", async (req, res) => {
//   try {
//     const { userId, fileName, previewImage } = req.body;

//     // Save to database (MongoDB example)
//     const pdfData = new UserPdf({ userId, fileName, previewImage });
//     await pdfData.save();

//     res.status(200).json({ message: "PDF saved successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to save PDF" });
//   }
// });


// app.get("/profile/get-saved-pdfs/:userId", async (req, res) => {
//   try {
//     const userId = req.params.userId;

//     // Fetch saved PDFs for the user
//     const savedPdfs = await UserPdf.find({ userId });

//     res.status(200).json(savedPdfs);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch saved PDFs" });
//   }
// });


module.exports = router;
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const screensData = [
    {
        "screenid": 123456,
        "pairingcode": "123456",
        "screenname": "User123",
        "status": false,
        "tags": "a",
        "location": "india",
        "city": "india",
        "area": null,
        "state": "india",
        "pincode": "india",
        "country": "india",
        "slot1": "[\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731322855/kzndi10eklgiufr6p554.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731323114/t5drhb39zphrmgf5xjd3.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731131246/jjjabqisfbatnpgqelky.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731323381/rvv4vn7qhm4sxakltglq.mp4\"]",
  
        "slot2":"[\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731323381/rvv4vn7qhm4sxakltglq.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731322855/kzndi10eklgiufr6p554.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731323114/t5drhb39zphrmgf5xjd3.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731131246/jjjabqisfbatnpgqelky.mp4\"]",
        "slot3": "[\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731131246/jjjabqisfbatnpgqelky.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1730960632/dvyzhk7o80pifhfqrgee.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731323114/t5drhb39zphrmgf5xjd3.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731323381/rvv4vn7qhm4sxakltglq.mp4\"]",
        "slot4":  "[\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731131246/jjjabqisfbatnpgqelky.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731322855/kzndi10eklgiufr6p554.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731323114/t5drhb39zphrmgf5xjd3.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731323114/t5drhb39zphrmgf5xjd3.mp4\"]",
        "slot5": null,
        "slot6": null,
        "slot7": null,
        "slot8": null,
        "slot9": null,
        "slot10": null
    },
    {
        "screenid": 123654,
        "pairingcode": "123123",
        "screenname": "User789",
        "status": false,
        "tags": "03-10",
        "location": "Ahmedabad",
        "city": "Ahmedabad",
        "area": null,
        "state": "Gujarat",
        "pincode": "382421",
        "country": "India",
        "slot1": "[\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1730960508/mvqic4dwyv5jemdltiew.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731322855/kzndi10eklgiufr6p554.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731323114/t5drhb39zphrmgf5xjd3.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731323114/t5drhb39zphrmgf5xjd3.mp4\"]",
        "slot2": "[\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731131246/jjjabqisfbatnpgqelky.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1730960632/dvyzhk7o80pifhfqrgee.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731323114/t5drhb39zphrmgf5xjd3.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731323381/rvv4vn7qhm4sxakltglq.mp4\"]",
        "slot3": "[\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731322855/kzndi10eklgiufr6p554.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731323114/t5drhb39zphrmgf5xjd3.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731131246/jjjabqisfbatnpgqelky.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731323381/rvv4vn7qhm4sxakltglq.mp4\"]",
        "slot4": "[\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731323381/rvv4vn7qhm4sxakltglq.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731322855/kzndi10eklgiufr6p554.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731323114/t5drhb39zphrmgf5xjd3.mp4\",\"https://res.cloudinary.com/dqfnwh89v/video/upload/v1731131246/jjjabqisfbatnpgqelky.mp4\"]",
        "slot5": null,
        "slot6": null,
        "slot7": null,
        "slot8": null,
        "slot9": null,
        "slot10": null
    }
  ];
  
// Route to serve data
app.get('/interviews-data', (req, res) => {
  res.json(screensData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

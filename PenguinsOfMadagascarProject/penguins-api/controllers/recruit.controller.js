import { getRandomRecruit } from "../services/recruit.service.js";

export const getRecruit = async (req, res) => {
    const recruit = await getRandomRecruit();
    console.log(recruit.imageUrl);

    res.send(`
        <html>
            <body style="text-align:center;font-family:Arial;">
                <h1>🐧 New Recruit Candidate 🐧</h1>
                <h2>${recruit.commander}</h2>
                <p>${recruit.message}</p>
                <img src="${recruit.imageUrl}" width="500">
            </body>
        </html>
    `);
};
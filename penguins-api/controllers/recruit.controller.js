import { getRandomRecruit } from "../services/recruit.service.js";

export const getRecruit = async (req, res) => {
    try {
        const recruit = await getRandomRecruit();

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
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to recruit candidate"
        });
    }
};
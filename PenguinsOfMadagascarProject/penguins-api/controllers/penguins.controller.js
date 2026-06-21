import { getAllPenguins, getPenguinById } from "../services/penguins.service.js";

export const getPenguins = (req, res) => {
    res.json(getAllPenguins());
};

export const getPenguin = (req, res) => {
    const id = req.params.id;
    const penguin = getPenguinById(id);

    if (!penguin) {
        return res.status(404).json({ message: "Penguin not found" });
    }

    res.json(penguin);
};
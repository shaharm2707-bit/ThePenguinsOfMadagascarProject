import penguins from "../dal/penguins.dal.js";

export const getAllPenguins = () => {
    return penguins;
};

export const getPenguinById = (id) => {
    return penguins.find((penguin) => penguin.id === Number(id));
};
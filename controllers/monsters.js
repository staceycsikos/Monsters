import Monster from "../models/monsters.js";

export const getMonsters = async (request, response) => {
  try {
    const monsters = await Monster.find();
    response.json(monsters);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const getMonster = async (request, response) => {
  try {
    const { id } = request.params;
    const monster = await Monster.findById(id);
    if (monster) {
      return response.json(monster);
    }
    response.status(400).json({ message: "Monster out for Lunch" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const createMonster = async (request, response) => {
  try {
    const monster = new Monster(request.body);
    await monster.save();
    response.status(201).json(monster);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const updateMonster = async (request, response) => {
  try {
    const { id } = request.params;
    const monster = await Monster.findByIdAndUpdate(id, request.body);
    response.status(200).json(monster);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const deleteMonster = async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await Monster.findByIdAndDelete(id);

    if (deleted) {
      return response.status(200).json(deleted + " has been removed");
    }
    throw new Error("Monster not created... yet!");
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

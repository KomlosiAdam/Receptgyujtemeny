export class Recipe {
    #id;
    #name;
    #cookTime;
    #difficulty;
    #imageURL;

    constructor(id, name, cookTime, difficulty, imageURL) {

    }

    setId(id) {
        this.#id = id;
    }

    getId() {
        return this.#id;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setCookTime(cookTime) {
        this.#cookTime = cookTime;
    }

    getCookTime() {
        return this.#cookTime;
    }

    setDifficulty(difficulty) {
        this.#difficulty = difficulty;
    }

    getDifficulty() {
        return this.#difficulty;
    }

    setImageURL(imageUrl) {
        this.#imageURL = imageUrl;
    }

    getImageURL() {
        return this.#imageURL;
    }
}
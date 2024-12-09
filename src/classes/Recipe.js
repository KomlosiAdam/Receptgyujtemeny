export class Recipe {
    #id;
    #name;
    #cookTime;
    #difficulty;
    #imageURL;

    constructor(id, name, cookTime, difficulty, imageURL) {
        this.setId(id);
        this.setName(name);
        this.setCookTime(cookTime);
        this.setDifficulty(difficulty);
        this.setImageURL(imageURL);

        this.getId = this.getId.bind(this);
        this.getName = this.getName.bind(this);
        this.getCookTime = this.getCookTime.bind(this);
        this.getDifficulty = this.getDifficulty.bind(this);
        this.getImageURL = this.getImageURL.bind(this);
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
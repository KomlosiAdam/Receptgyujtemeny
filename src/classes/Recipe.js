export class Recipe {
    #id;
    #name;
    #cookTime;
    #difficulty;
    #imageURL;
    #description;

    constructor(id, name, cookTime, difficulty, description, imageURL) {
        this.setId(id);
        this.setName(name);
        this.setCookTime(cookTime);
        this.setDifficulty(difficulty);
        this.setDescription(description);
        this.setImageURL(imageURL);

        this.getId = this.getId.bind(this);
        this.getName = this.getName.bind(this);
        this.getCookTime = this.getCookTime.bind(this);
        this.getDifficulty = this.getDifficulty.bind(this);
        this.getImageURL = this.getImageURL.bind(this);
        this.setDescription = this.getDescription.bind(this);
    }

    setId(id) {
        this.#id = id;
    }

    getId() {
        return this.#id;
    }

    setDescription(description) {
        this.#description = description;
    }

    getDescription() {
        return this.#description;
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
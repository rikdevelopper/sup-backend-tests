class House {
    private readonly _name: string;


    constructor(name: string) {
        if (name === undefined || name.trim().length === 0)
            throw new Error('The house can not be created without name.');
        this._name = name;
    }

    get name(): string {
        return this._name;
    }
}

export default House;
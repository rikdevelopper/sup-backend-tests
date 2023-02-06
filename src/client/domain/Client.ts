class Client {
    private _id: number;
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    static regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);



    constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }


    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get email(): string {
        return this._email;
    }


    set id(value: number) {
        if(this._id != undefined) throw new Error('The id is immutable');
        this._id = value;
    }

    set firstName(value: string) {
        if(!value || value.length == 0) throw new Error('The firstname can not be null');
        this._firstName = value;
    }

    set lastName(value: string) {
        if(!value || value.length == 0) throw new Error('The lastname can not be null');
        this._lastName = value;
    }

    set email(value: string) {
        if(!value || value.length == 0) throw new Error('The email can not be null');
        if(!Client.regexp.test(value)) throw new Error('The email is not valid.');
        this._email = value;
    }
}
export default Client;
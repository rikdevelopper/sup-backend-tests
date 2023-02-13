import {Role} from "../Role";

export class User {
    static regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    private _id: number;
    private _pseudo: string;
    private _email: string;
    private _pwd: string;
    private _role: Role;

    constructor(pseudo: string, email: string, pwd: string, role: Role) {
        this.pseudo = pseudo;
        this.email = email;
        this.pwd = pwd;
        this.role = role;
    }

    set id(value: number) {
        if (this._id !== undefined) throw new Error('Ne peut pas changer.')
        this._id = value;
    }

    set pseudo(value: string) {
        if (value === undefined || value.trim().length === 0) throw new Error('The pseudo can not be null.')
        this._pseudo = value;
    }

    set email(value: string) {
        console.log(value);
        if (value === undefined || value.trim().length === 0)
            throw new Error('The email can not be null.')
        this._email = value;
    }

    set pwd(value: string) {
        if (!value || value.trim().length === 0) throw new Error('The password can not be null.')
        this._pwd = value;
    }

    set role(value: Role) {
        this._role = value;
    }

    get id(): number {
        return this._id;
    }
}
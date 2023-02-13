export class BasicUCResponse {
    errors: string[];


    constructor() {
        this.errors = [];
    }

    hasSucceeded(): boolean{
        return this.errors.length === 0;
    }

    addError(errorMsg: string): void{
        this.errors.push(errorMsg);
    }

    hasErrors(): boolean {
        return this.errors.length > 0;
    }
}
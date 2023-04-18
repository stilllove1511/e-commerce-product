export class CompanyResponse {
    private readonly _notExist = {
        code: 407,
        message: 'Company is not exist',
    }

    private readonly _nameExist = {
        code: 407,
        message: 'Company name has been existed',
    }

    get notExist() {
        return this._notExist
    }

    get nameExist() {
        return this._nameExist
    }
}

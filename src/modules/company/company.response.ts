export class CompanyResponse {
    private readonly _notExist = {
        code: 407,
        message: 'Company is not exist',
    };

    get notExist() {
        return this._notExist;
    }
}

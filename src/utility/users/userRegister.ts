class UserServerInfo {
    id: number;
    money: number = 0;
    constructor(id:number, money:number = 0) {
        this.id = id;
        this.money = money;
    }
    toString() {
        return `{ id: ${this.id}, money: ${this.money} }`;
    }
}

export const registerNewUser = async (id: any, money: number): Promise<object> => {
    var newUser:UserServerInfo;
    var _id = id;
    try {
        if(typeof id == 'string') {
            _id = parseInt(id);
        }
        else if(typeof id != 'number') throw new Error('Invalid ID');
        newUser = new UserServerInfo(_id, money);

        //

        return { user: newUser, error: false};
    } catch (error) {
        return { user: null, error: true };
    }

};
import fs from 'fs';

export const edit = (path:string, property:string, value:any): boolean => {
    try {
        const read = fs.readFileSync(path, 'utf-8');
        const obj = JSON.parse(read);
        if(obj != null) {
            Object.defineProperty(obj, property, { value });
            fs.writeFileSync(path, JSON.stringify(obj), 'utf-8');
        }
        else {
            fs.writeFileSync(path, `{"${property}": "${value}"}`, 'utf-8');
        }
        return true;
    } catch(error:any) {
        console.error(error.message);
    }
    return false;
}

export const get = (path:string, property:string): any => {
    try {
        const read = fs.readFileSync(path, 'utf-8');
        const obj = JSON.parse(read);
        if(obj == null) throw new Error('Data is null');
        return Object.getOwnPropertyDescriptor(obj, property)?.value;
    } catch(error:any) {
        console.error(error.message);
    }
    return null;
}
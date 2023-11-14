export class User {
        id:number;
        password: string;
        email: string;
        firstName: string;
        lastName: string;
        admin: boolean;

        constructor( id:number,password: string,email: string,firstName: string,lastName: string,admin: boolean){
            this.id = id
            this.password = password
            this.email = email
            this.firstName = firstName
            this.lastName = lastName
            this.admin = admin
        }
}

export class Diary {
    showDescription:boolean;
    constructor(public id:number, public date:Date, public title:string, public description:string){
        this.showDescription=false;
    }
}

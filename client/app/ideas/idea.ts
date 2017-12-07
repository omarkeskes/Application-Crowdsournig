

export class Note{

    id:number;
    creativity:number;
    originality:number;
    rentabilite:number;

    constructor(noteInfo:any) {
        this.creativity=noteInfo.creativity;
        this.id=noteInfo.id;
        this.originality=noteInfo.originality;
        this.rentabilite=noteInfo.rentabilite;
      }
}

export class Idea{

    id:number;
    titre:string;
    date:Date;
    notes:Note[];



    constructor(userInfo:any) {
    }
}
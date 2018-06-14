export class Course {
    
    constructor(
        public id: number,
        public ime: string,
        public rating: number,
        public mesta_na_kursu: number,
        public science: boolean,
        public zabrana_rez: boolean,
        public dani = [],
        public sati = []
    ){
        
    }
    
}
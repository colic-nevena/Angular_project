export class Teacher {
    
    constructor(
        public id: number,
        public licno_ime: string,
        public rating: number,
        public kursevi = [],
        public dani = [],
        public sati = []
    ){
        
    }
    
    
}
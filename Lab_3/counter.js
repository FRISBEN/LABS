
export class counter{
    #count = 0.0;

    increment(){
        return ++this.#count
    }
    
    decrement(){   
        return --this.#count
    }
    
    reset(){
        this.#count = 0.0;
        return this.#count;
    }
}
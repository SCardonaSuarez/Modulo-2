abstract class Character{

    constructor(){}

     introduce(){
        console.log(`Hi, my name is ${this.name} from Star Wars movie, I got my own ${this.weapon()} and I can ${this.power()} to combat my enemies.`)
    }

    abstract get name(): string
    abstract power(): string
    abstract weapon(): string

}

// interface Bag{
//     readonly bulets: number;

// }

// class FightItems implements Bag{
//     readonly bulets = 45;
// }



class Luke<T> extends Character {

    private vector: T[]=[]

    addsomething(x:T){
        this.vector.push(x)
    }

    takeOff(){
        if(this.vector.length > 0){
            return this.vector.pop()
        }else{
            null
        }
    }

    lookIn(){
        return this.vector.forEach(x=> console.log(x))
    }
    

    get name():string {
        return 'Luke Skywalker'
    }

    power():string | undefined{
        return 'the speed of the Force'
    }

    weapon():string{
        return 'Lighsaber'
    }
}

class Luck<T extends object> {



}


class DarthVader extends Character{

    get name(): string{
        return 'Darth Vader'
    }

    power():string{
        return 'throw objects'
    }

    weapon():string{
        return 'Darksaber'
    }
}

const luck = new Luke()
luck.introduce()

const vader = new DarthVader()
vader.introduce()


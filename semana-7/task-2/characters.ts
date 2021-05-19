abstract class Character{

    constructor(){}

     introduce(){
        console.log(`Hi, my neme is ${this.name} from Star Wars movie, I got my own ${this.weapon()} and I can ${this.power()} to combat my enemies.`)
    }

    abstract get name(): string
    abstract power(): string
    abstract weapon(): string

}

class Luke extends Character{
    get name():string {
        return 'Luke Skywalker'
    }

    power():string{
        return 'the speed of the Force'
    }

    weapon():string{
        return 'Lighsaber'
    }
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


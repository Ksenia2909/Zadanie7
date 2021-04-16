abstract class Appliances {
    public price: number
    public numberOfUse: number
    public isEnabled: boolean
    public discount: number

    constructor(price: number, numberOfUse: number) {
      this.price = price
      this.numberOfUse = numberOfUse
      
      this.isEnabled = false
    }
  
    applyDiscount(discount: number) {
      this.price = this.price * (1 - discount)
    }
  
    toggle() {
      this.isEnabled = !this.isEnabled
    }
  }
  
  class CoffeeMachine extends Appliances {
    public makingTime: number
    constructor(price: number, numberOfUse: number, makingTime: number) {
      super(price, numberOfUse)
  
      this.makingTime = makingTime
    }
  
    makeCoffee() {
      if (this.numberOfUse <= 0) {
        console.log('CoffeeMachine is broken')
        return
      }
  
      this.toggle()
      console.log('Started making coffee')
  
      setTimeout(() => {
        this.toggle()
        this.numberOfUse--
        console.log('Coffee is ready')
      }, this.makingTime)
    }
  }
  
  class Grill extends Appliances {
    public temperature: number
    constructor(price: number, numberOfUse: number) {
      super(price, numberOfUse)
  
      this.temperature = null
    }
  
    setTemperature(temperature: number) {
      this.temperature = temperature
      console.log('Temperature changed')
    }
  }
  
  const coffeeMachine: CoffeeMachine = new CoffeeMachine(2000, 2, 1000)
  
  console.log(`Current price is ${coffeeMachine.price}`)
  coffeeMachine.applyDiscount(0.5)
  console.log(`Price after discount is ${coffeeMachine.price}`)
  
  coffeeMachine.makeCoffee()
  
  
  const grill: Grill = new Grill(10000, 30)
  grill.toggle()
  grill.setTemperature(200)
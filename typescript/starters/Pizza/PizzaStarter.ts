/*================
* Types
================*/
type User = {
    name: string;
    location: string;
    birthday: string;
};
type Pizza = {
    name: string;
    toppings: string[];
};
type PricePerTopping = {
    pepperoni: number;
    pineapple: number;
    cheese: number;
    "ground-beef": number;
    ham: number;
    sausage: number;
};
type CustomerOrder = {
    name: string;
    birthday: string;
    favoritePizza: string;
    totalCost: number;
};

/*================
  * Data
  ================*/
const users: User[] = [
    {
        name: "Bob",
        location: "Dallas",
        birthday: "01-01-1985",
    },
    {
        name: "Bill",
        location: "Austin",
        birthday: "03-03-1981",
    },
    {
        name: "Jane",
        location: "DC",
        birthday: "10-02-1991",
    },
    {
        name: "Bonnie",
        location: "Philadelphia",
        birthday: "Thu Jan 01 1970",
    },
];

const pizzaSelection: Pizza[] = [
    {
        name: "Pepperoni",
        toppings: ["pepperoni", "cheese"],
    },
    {
        name: "Hawaiian",
        toppings: ["pepperoni", "cheese", "pineapple"],
    },
    {
        name: "Meat Lovers",
        toppings: ["sausage", "pepperoni", "ground-beef", "ham", "cheese"],
    },
];

const pricePerTopping: PricePerTopping = {
    pepperoni: 199,
    pineapple: 99,
    cheese: 159,
    "ground-beef": 199,
    ham: 159,
    sausage: 199,
};

/*================================
  * APIs represented as functions
  ================================*/
const getUserData = (userName: string): Promise<User> => {

};

const getBasePizza = (pizzaSelected: string): Promise<Pizza> => {

};

const orderPizza = () => {

};

orderPizza();

/*================================================================================================================================
  * Question:

  * Jane's birthday is coming up, and she would like to order some pizza.
  * Construct an object that contains her name, birthday, and her favorite pizza, Meat Lovers, but hold the ham!!
  * Jane would also like to know how much this pizza will cost her, so please include that as well.

  Note:
  - Pizza cost is calculated by adding the cost of the toppings
  - Use API methods where available
  - Use the CustomerOrder type as the final return type
  - Print your answer to the console
  ================================================================================================================================*/

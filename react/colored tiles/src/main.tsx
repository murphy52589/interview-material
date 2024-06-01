import React from 'react'
import ReactDOM from 'react-dom/client'
import {ListSolution} from './ListSolution.tsx'

const sizes: string[] = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors: string[] = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
const fruits: string[] = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];


export interface Item {
    name: string;
    color: string;
}

const generateItems = (): Item[] => {
    return sizes.reduce<Item[]>((acc, size) => {
        const sizeItems = generateSizeItems(size);
        return [...acc, ...sizeItems];
    }, []);
};

const generateSizeItems = (size: string): Item[] => {
    return fruits.reduce<Item[]>((acc, fruit) => {
        const fruitItems = generateFruitItems(size, fruit);
        return [...acc, ...fruitItems];
    }, []);
};

const generateFruitItems = (size: string, fruit: string): Item[] => {
    return colors.map<Item>(color => ({
        name: `${size} ${color} ${fruit}`,
        color,
    }));
};

const items: Item[] = generateItems();


/*
// original code from exercise
const items: Item[] = sizes.reduce<Item[]>(
    (itemsAcc: Item[], size: string) => [
        ...itemsAcc,
        ...fruits.reduce<Item[]>(
            (fruitsAcc: Item[], fruit: string) => [
                ...fruitsAcc,
                ...colors.reduce<Item[]>(
                    (colorsAcc: Item[], color: string) => [
                        ...colorsAcc,
                        {
                            name: `${size} ${color} ${fruit}`,
                            color,
                        },
                    ],
                    [],
                ),
            ],
            [],
        ),
    ],
    [],
);

 */


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ListSolution items={items} />
  </React.StrictMode>,
)

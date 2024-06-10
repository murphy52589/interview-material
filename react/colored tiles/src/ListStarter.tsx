import React from "react";
import {Item} from "./main.tsx";
import "./List.css";

interface ListProps {
    items: Item[];
}

export const ListStarter: React.FC<ListProps> = ({items}) => (
    <>
        <ul className="List">
            {items.map(item => (
                <li key={item.name} className={`List__item List__item--${item.color}`}>
                    {item.name}
                </li>
            ))}
        </ul>
    </>
);


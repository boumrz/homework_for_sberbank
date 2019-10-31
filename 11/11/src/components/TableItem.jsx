import React from 'react';
import dataJSON from "./data";

const TableItem = (props) => {
    const {name, height, mass, hair_color, skin_color, eye_color, birth_year, gender} = props;

    return (
        <tr>
            <td>{name}</td>
            <td>{height}</td>
            <td>{mass}</td>
            <td>{hair_color}</td>
            <td>{skin_color}</td>
            <td>{eye_color}</td>
            <td>{birth_year}</td>
            <td>{gender}</td>
        </tr>
    );
};

export default TableItem;

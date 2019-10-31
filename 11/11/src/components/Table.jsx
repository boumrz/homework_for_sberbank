import React from 'react';
import dataJSON from "./data";
import TableItem from "./TableItem";
import './table.css';

export default class Table extends React.Component {
    render() {
        const filterText = this.props.filterText;

        const rows = [];
        let lastCategory = null;

        dataJSON.results.forEach((product) => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (product !== lastCategory) {
                rows.push(
                    <TableItem
                        key={product.category}
                        {...product}
                    />
                );
            }
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

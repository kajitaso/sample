import React from 'react';

type Item = {
    header: string
    data: string
  }
const TableRow: React.FC<Item> = ({ header, data }) => {
    return (
        <tr>
            <th> { header } </th>
            <td> { data } </td>
        </tr>
    );
}
const Table: React.FC<any> = ({ items }) => {


    return (
    <table className="table">
        <tbody>
            { items &&
                items.map((item: Item) => (
                    <tr>
                        <th> { item.header } </th>
                        <td> { item.data } </td>
                    </tr>
                    )
                )
            }
        </tbody>
    </table>
    )
  }

export default Table
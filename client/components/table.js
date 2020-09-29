import React from 'react';
import styles from './table.module.css';

const Table = (props) => {
    console.log(props);

    return (
        <div className="container">
            <br/>
            <div className={styles.present_table}>
                {props.results.length > 0 ? (
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Present</th>
                                <th scope="col">Price</th>
                                <th scope="col">Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.results.map((result) => (

                                <tr key={result.id}>
                                    <td>{result.present_name}</td>
                                    <td><b>${result.price}</b></td>
                                    <td>
                                        <a href={result.url} className="btn btn-primary">Link</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                        <h2 className="subtitle" style={{ fontSize: 28 }}>No Results</h2>
                    )}
            </div>
        </div>
    )
}

export default Table;
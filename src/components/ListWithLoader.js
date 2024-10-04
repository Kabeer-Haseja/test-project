import React, { useState, useEffect } from 'react';

// Simulated API data
const staticData = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" },
    { id: 5, name: "Charlie Green" },
];

const ListWithLoader = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setData(staticData);
            setLoading(false);
        }, 1000);

        return () => console.log("Cleanup on unmount");
    }, [page]);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setPage(page + 1);
            setLoading(false);
        }, 1000);
    };

    return (
        <div>
            <div style={{ position: 'sticky', top: 0, backgroundColor: '#f1f1f1', padding: '10px' }}>
                <h2>Sticky Header</h2>
            </div>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <button onClick={loadMore} disabled={loading}>
                Load More
            </button>
            {loading && <div>Loading more data...</div>}
        </div>
    );
};

export default ListWithLoader;

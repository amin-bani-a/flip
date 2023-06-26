import React, { useEffect, useState } from 'react';

function Card(props) {
    const MyComponent = () => {
        const [data, setData] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch('https://image.dummyjson.c/200x100');
                    const json = await response.json();
                    setData(json);
                } catch (error) {
                    console.log('Error fetching data:', error);
                }
            };

            fetchData();
        }, []);

        return (
            <div>
                { data ? (
                    <ul>
                        { data.map((item) => (
                            <li key={ item.id }>{ item.name }</li>
                        )) }
                    </ul>
                ) : (
                    <p>Loading data...</p>
                ) }
            </div>
        );
    };
}

export default Card;
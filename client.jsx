import React from 'react'
import { Page } from "../components/page"
import { useParams } from 'react-router-dom/cjs/react-router-dom';

export function Client() {

    const { Id } = useParams();

    const [client, setClient] = React.useState([]);
    const [error, setError] = React.useState("");

    React.useEffect(() => {
        fetch(`http://localhost:8000/user/${Id}`.toString(), {headers: {'Content-Type': 'application/json'}})
          .then(response => response.json())
          .then(setClient)
          .catch(setError)
      }, [])

    if (!client.id) {
        return <Page>Loading...</Page>;
    }

    const output = Object.entries(client).map(([key, value]) => (
        <p key={key}>
            <strong>{key}:</strong>
            {typeof value === 'object' ? (
                <pre>{JSON.stringify(value, null, 2)}</pre>
            ) : (
                String(value)
            )}
        </p>
    ));

    return <Page>
        {output.slice(1)}
        {Object.entries(client.address).map(([key, value]) => (
            <p key={key}>
                <strong>address.{key}:</strong>
                {typeof value === 'object' ? (
                    <pre>{JSON.stringify(value, null, 2)}</pre>
                ) : (
                    String(value)
                )}
            </p>
        ))}
        {Object.entries(client.address.geo).map(([key, value]) => (
            <p key={key}>
                <strong>address.geo.{key}:</strong>
                {String(value)}
            </p>
        ))}
        {Object.entries(client.company).map(([key, value]) => (
            <p key={key}>
                <strong>company.{key}:</strong>
                {typeof value === 'object' ? (
                    <pre>{JSON.stringify(value, null, 2)}</pre>
                ) : (
                    String(value)
                )}
            </p>
        ))}
    </Page>;
}

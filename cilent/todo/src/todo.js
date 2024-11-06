import React, { useState } from "react";
import { CREATE_MUTATION, GET_QUERY, DELETE_MUTATION } from "./query";
import { useMutation, useQuery } from "@apollo/client";

function Todo() {
    const [title, setTitle] = useState("");
    
    const [createMutation] = useMutation(CREATE_MUTATION, {
        refetchQueries: [{ query: GET_QUERY }],
    });

    const [deleteMutation] = useMutation(DELETE_MUTATION, {
        refetchQueries: [{ query: GET_QUERY }],
    });

    const { loading, error, data } = useQuery(GET_QUERY);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading......</p>;

    const getData = data.get;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createMutation({
                variables: {
                    name: title 
                }
            });
            setTitle("");
        } catch (error) {
            console.error("Error creating todo:", error);
        }
    };
    
    const handleDelete = async (id) => {
        try {
            await deleteMutation({
                variables: {
                    id 
                }
            });
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    return (
        <>
            <h1>TodoList</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Add a new todo..."
                />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {getData.map((item) => (
                    <li key={item.id}>
                        {item.name} <button onClick={() => handleDelete(item.id)}>DELETE</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todo;

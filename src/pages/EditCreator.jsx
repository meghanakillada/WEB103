import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './EditCreator.css';


const EditCreator = ({data}) => {

    const {id} = useParams();
    const [creator, setCreator] = useState({id: null, name: "", url: "", description: "", imageURL: ""});

    useEffect(() => {
        const fetchCreator = async () => {
            try {
                const { data, error } = await supabase
                    .from('creators')
                    .select('*')
                    .eq('id', id)
                    .single();
    
                if (error) {
                    throw error;
                }
    
                if (data) {
                    setCreator(data);
                }
            } catch (error) {
                console.error('Error fetching creator:', error.message);
            }
        };
        fetchCreator();
    }, []);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCreator( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    // UPDATE post
    const updateCreator = async (event) => {
        event.preventDefault();
    
        await supabase
        .from('creators')
        .update({name: creator.name, description: creator.description, url: creator.url, imageURL: creator.imageURL})
        .eq('id', id);
    
        window.location = "/";
    }

    // DELETE post
    const deleteCreator = async (event) => {
        event.preventDefault();
    
        await supabase
        .from('creators')
        .delete()
        .eq('id', id); 
    
        window.location = "/";
    }
    
    return (
        <div className="EditCreator">
            <div>
                {creator.imageURL && <img src={creator.imageURL} alt={`${creator.name}'s profile`} className="card-img-top" />}
                <h2>{creator.name}</h2>
                <h3>{creator.description}</h3>
                <a href={creator.url} target="_blank" rel="noopener noreferrer">
                    Visit Channel
                </a>
            </div>
            <br/>
            <div>
                <form>
                    <label>Name</label> <br />
                    <input type="text" id="name" name="name" value={creator.name} onChange={handleChange} />
                    <br/>
                    <label>Description</label> <br />
                    <input type="text" id="description" name="description" value={creator.description} onChange={handleChange} />
                    <br/>
                    <label>URL</label> <br />
                    <input type="text" id="url" name="url" value={creator.url} onChange={handleChange} />
                    <br/>
                    <label>Image URL</label> <br />
                    <input type="text" id="imageURL" name="imageURL" value={creator.imageURL} onChange={handleChange} />
                    <br/>
                    <input type="submit" value="Submit" onClick={updateCreator} />
                    <button className="deleteButton" onClick={deleteCreator}>Delete</button>
                </form> 
            </div>
        </div>  
    )
}

export default EditCreator;
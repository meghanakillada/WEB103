import React, { useState, useEffect } from 'react';
import { supabase } from '../client'

const AddCreator = (props) => {

    const [creator, setCreator] = useState({id: null, name: "", url: "", description: "", imageURL: ""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCreator( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        }) 
    }
    const createCreator = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('creators')
          .insert({name: creator.name, description: creator.description, url: creator.url, imageURL: creator.imageURL})
          .select();
      
        window.location = "/";
    }
    
    return (
        <div className="AddCreator">
            <form>
                <label>Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} />
                <br/>
                <label>Description</label> <br />
                <input type="text" id="description" name="description" onChange={handleChange} />
                <br/>
                <label>URL</label> <br />
                <input type="text" id="url" name="url" onChange={handleChange} />
                <br/>
                <label>Image URL</label> <br />
                <input type="text" id="imageURL" name="imageURL" onChange={handleChange} />
                <br/>
                <input type="submit" value="Submit" onClick={createCreator} />
            </form>
        </div>  
    )
}

export default AddCreator;
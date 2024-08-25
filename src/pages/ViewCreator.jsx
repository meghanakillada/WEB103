import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client'

const ViewCreator = ({data}) => {

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


    return (
        <div className='ViewCreator'>
            {creator.imageURL && <img src={creator.imageURL} alt={`${creator.name}'s profile`} className="card-img-top" />}
            <h2>{creator.name}</h2>
            <h3 className="url">{creator.description}</h3>
            <a href={creator.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Visit Channel
            </a>
        </div>
    )
}

export default ViewCreator;
import React, { useState, useEffect } from 'react';
import ContentCreatorCard from '../components/ContentCreatorCard';
import { supabase } from '../client'
import './ShowCreators.css';

const ShowCreators = (props) => {

    const [creators, setCreators] = useState([]);

    useEffect(() => {
        setCreators(props.data);
        const fetchCreators = async () => {
            const {data} = await supabase
            .from('creators')
            .select();
        
            setCreators(data);
        }
        fetchCreators();
    }, [props]);
    
    return (
        <div className="ShowCreators">
            {creators && creators.length > 0 ?
                creators.map((creator, index) =>
                    <ContentCreatorCard 
                        key={creator.id} 
                        id={creator.id} 
                        name={creator.name} 
                        url={creator.url} 
                        description={creator.description} 
                        imageURL={creator.imageURL} 
                    />
                ) 
                : <h2>{'No Creators Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ShowCreators;
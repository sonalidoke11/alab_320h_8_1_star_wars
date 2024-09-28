import react from 'react'

export default function StarshipCard({starship}){
    //console.log(props.starship);
    
    return(
        <>
            <div className="card">
                <h2>{starship.name}</h2>
            </div>
        </>

    )
}
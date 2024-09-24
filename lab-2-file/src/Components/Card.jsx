export default function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt="" className="image"/>
            <h2>{props.name}</h2>
            <p>{props.hotel}</p>
            {(()=>{

                if(props.rate > 4){
                    return <h3 style={{color: "green"}}>{props.rate} ★</h3>
                }
                    return <h3 style={{color: "red"}}>{props.rate} ★</h3>
                    
})()}
            <p>${props.price}/night</p>
        </div>
    )
}
export default function Characters( {name, img} ){
    return(
        <div>
            <img src={img} alt={name} />
            <div>{name}</div>
        </div>
    )
}
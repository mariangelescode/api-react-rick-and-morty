import './Characters.css';

export default function Characters( {name, img, status} : {name: string, img: string, status: string}  ){
    return(
        <div className='container__character'>
            <img className={`img__character ${status == 'Alive' ? 'alive' : 'dead'}`} src={img} alt={name} />
            <div className='container__name'>{name}</div>
        </div>
    )
}
import './featurecard.css'
export default function Card({description,color})
{
    return(
    <div className='FeatureCard' id={color}> 
    <h2 className='FeatureCard__description'>{description}</h2>
    </div>)
}
export default function SubscriptionStep ({number, title, description}) {
    return (
        <div>
            <span>{number}</span>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
}
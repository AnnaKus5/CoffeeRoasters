export default function OrderSummary ({activeSelection}) {

    const preferences = activeSelection.preferences.selectedByUser
    const bean = activeSelection.bean.selectedByUser
    const quantity = activeSelection.quantity.selectedByUser
    const grind = activeSelection.grind.selectedByUser
    const deliveries = activeSelection.deliveries.selectedByUser

    const capsulesContent = `I drink my coffee using Capsules, with a ${bean ? bean : '______'} type of bean, ${quantity ? quantity : '______'} sent to me ${deliveries ? deliveries : '______'}.`

    const beansContent = `I drink my coffee as ${preferences ? preferences : '______'}, with a ${bean ? bean : '______'} type of bean. 
        ${quantity ? quantity : '______'} ground ala ${grind ? grind : "_______"}, sent to me ${deliveries ? deliveries : '______'}.`

    return (
        <div>
            <p>ORDER SUMMARY</p>
            <p>{preferences === "Capsule" ? capsulesContent : beansContent}</p>
        </div>
    )
}
// “I drink my coffee as Filter, with a Decaf type of bean. 250g ground ala Cafetiére, sent to me Every Week.”
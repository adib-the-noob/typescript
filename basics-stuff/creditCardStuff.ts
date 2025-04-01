// mix and match of types
type cardNumber = {
    cardNumber: string;
}

type cardData = {
    cardDate: string;
}

type cardDetails = cardNumber & cardData & {
    cvv: number;
}

const card1: cardDetails = {
    cardNumber: '1234 5678 9012 3456',
    cardDate: '12/23',
    cvv: 123
}
console.log(card1);

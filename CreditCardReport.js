/*Description
Objective : 

This activity is to work with Javascript arrays

Scenario
Create a function that filters and generates reports based on specific criteria. Start by defining an array of objects, where each object represents a card with properties such as the cardholder's name, card type (e.g., Visa, Master, Rupay, Mastro), card limit, and expiry date. Implement a function that allows filtering the array either by card type or to find all expired cards based on the current date.

For example, if search by is of cardType and the provided value is "Visa," the function should return all cards of type Visa. If the search by is for expired cards and the value is an empty string, it should return all cards that have already expired as of today.

Console Output :
Example:
let cardDetails=[{cardName: 'John', cardType: 'Visa', cardLimit: '50000', expiryDate: '2025-07-20'},
{cardName: 'Sam', cardType: 'Master', cardLimit: '70000', expiryDate: '2023-03-12'},
{cardName: 'Alwin', cardType: 'Rupay', cardLimit: '80000', expiryDate: '2025-05-21'},
{cardName: 'Johan', cardType: 'Mastro', cardLimit: '50000', expiryDate: '2023-03-12'},
{cardName: 'Abdul', cardType: 'Visa', cardLimit: '100000', expiryDate: '2023-03-12'}];

console.log(getReport('expiredCards',''));
*/

let cardDetails = [{
    cardName:'John',
    cardType:'Visa',
    cardLimit:'50000',
    expiryDate:'2025-07-20'
},{
   cardName:'Sam',
   cardType:'Master',
   cardLimit:'70000',
   expiryDate:'2023-03-12' 
},{
    cardName:'Alwin',
    cardType:'Rupay',
    cardLimit:'80000',
    expiryDate:'2025-05-21'
},{
    cardName:'Johan',
    cardType:'Mastro',
    cardLimit:'50000',
    expiryDate:'2023-03-12'
},{
    cardName:'Abdul',
    cardType:'Visa',
    cardLimit:'100000',
    expiryDate:'2023-03-12'
}];

function getReport(search,value){
    const cards = cardDetails;
    const today = new Date();
    today.setHours(0,0,0,0);
    return cards.filter(card=>{
        if(search==='cardType'){
            return card.cardType.toLowerCase()===value.toLowerCase();
        }
        if(search==='expiredCards'){
            const expiry = new Date(card.expiryDate);
            expiry.setHours(0,0,0,0);
            return expiry < today;
        }
        return false;
    })
}

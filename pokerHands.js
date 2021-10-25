/**********************************************************
 *   _____      _
 *  |  __ \    | |
 *  | |__) |__ | | _____ _ __
 *  |  ___/ _ \| |/ / _ \ '__|
 *  | |  | (_) |   <  __/ |
 *  |_|   \___/|_|\_\___|_| _
 *  | |  | |               | |
 *  | |__| | __ _ _ __   __| |___
 *  |  __  |/ _` | '_ \ / _` / __|
 *  | |  | | (_| | | | | (_| \__ \
 *  |_|  |_|\__,_|_| |_|\__,_|___/
 *
 *  INSTRUCTIONS:
 *  Given an array of poker hands (five cards as an array
 *  of strings), implement a function that returns a string
 *  with the name of the highest poker hand combination
 *  obtained.
 *  (see reference chart below)
 *
 * (Be sure to consider all possible card combinations)
 *********************************************************/

// Royal Flush      -	A, K, Q, J, 10, all with the same suit.
// Straight Flush	  - Five cards in sequence, same suit.
// Four of a Kind	  - Four cards same rank.
// Full House	      - Three of a Kind with a Pair.
// Flush	          - Any five cards, same suit, not in sequence.
// Straight	        - Five cards in sequence, not same suit.
// Three of a Kind  - Three cards same rank.
// Two Pair	        - Two different Pair.
// Pair	            - Two cards same rank.
// High Card	      - No other valid combination.

// Array of each type of hand               Expected Outputs
let handArrays = [
    ['10s', 'Js', 'Qs', 'Ks', 'As'], //     Royal FLush
    ['8h', '5h', '9h', '6h', '7h'], //      Straight Flush
    ['10h', '10d', '10c', '10s', 'Ah'], //  Four of a Kind
    ['2s', '10d', '2c', '10c', '10h'], //   Full House
    ['10h', '4h', '8h', 'Qh', 'Ah'], //     Flush
    ['3d', '4h', '5c', '6s', '7h'], //      Straight
    ['10h', '10d', '10c', '2s', 'Ah'], //   Three of a Kind
    ['10h', '10d', '4c', '4s', 'Ah'], //    Two pair
    ['3h', '7d', '4c', '4s', 'Ah'], //      Pair
    ['3h', '5h', 'Qs', '9h', 'Ad'], //      High Card
    ['10s', 'Qs', '8s', '9s', 'Js'], //     Straight Flush
    ['10c', '3c', '3s', '10s', '3h'], //    Full House
    ['Ac', 'Kc', 'As', 'Ah', '8d'], //      Three of a Kind
];

function pokerHandRanking(hand) {
    /* Given a poker hand in the form of an array with strings,
        this function returns the hand's ranking.
    hand (array) --> handRanking (string)
    */

    function isMatchingArr(arr1, arr2) {
        /* Campares two arrays to see if they are matching.
            Order within either of the arrays is irrelivant.
        arr1 (array), arr2 (array) --> (boolean)
        */
        if (arr1.length !== arr2.length) {
            return false;
        }
        arr1.sort();
        arr2.sort();
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }

    function handToCardValues(hand) {
        /* Extracts card values from hand and places them in an array.
        hand (array) --> cardValues (array)
        */
        const royalToNumObj = {
            A: 14, K: 13, Q: 12, J: 11
        };
        const cardValues = []
        for (let card of hand) {
            let cardValue = card.slice(0, -1);
            if (Object.keys(royalToNumObj).includes(cardValue.toUpperCase())) {
                cardValue = royalToNumObj[cardValue.toUpperCase()];
            }
            cardValues.push(parseInt(cardValue));
        }
        return cardValues;
    }

    function isValid(hand) {
        /* This function checks to see if a hand is valid
        hand (array) --> (boolean)
        */
        const suitsArr = ['s', 'h', 'd', 'c'];
        const valuesArr = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
        const previousCards = []
        //Check for hand length
        if (hand.length !== 5) {
            return false;
        }
        for (let i = 0; i < hand.length; i++) {
            //Check for valid cards
            if (!suitsArr.includes(hand[i].slice(-1).toLowerCase()) || !valuesArr.includes(hand[i].slice(0, -1).toUpperCase())) {
                return false;
            }
            //Check for duplicates
            if (previousCards.includes(hand[i].toLowerCase())) {
                return false;
            } else {
                previousCards.push(hand[i].toLowerCase())
            }   
        }
        return true;
    }

    function isFlush(hand) {
        /* Checks hand to see if hand is flush
        hand (array) --> (boolean) 
        */
        for (i = 0; i < hand.length - 1; i++) {
            if (hand[i].slice(-1).toLowerCase() !== hand[i + 1].slice(-1).toLowerCase()) {
                return false;
            }
        }
        return true;
    }

    function isStraight(cardValues) {
        /* Checks hand to see if hand contains a straight
        cardValues (array) --> (boolean)
        */
        const specialCaseValues = [14, 2, 3, 4, 5];
        if(isMatchingArr(cardValues, specialCaseValues)) {
            return true;
        }
        cardValues.sort((a, b) => a - b);
        for (let i = 0; i < cardValues.length - 1; i++) {
            if (cardValues[i] !== cardValues[i + 1] - 1) {
                return false;
            }
        }
        return true;
    }

    function numOfKind(cardValues) {
        /* Given a set of card values, this function returns an array
            that tells us how many of each card is in a hand.
            For example, if a hand contains 2 aces, 2 nines, and 1 seven,
            this function will return [2, 2, 1]
        cardValues (array) --> numOfKind (array)
        */
        const valuesObj = {};
        for (let value of cardValues) {
            if (Object.keys(valuesObj).includes(`${value}`)) {
                valuesObj[`${value}`] += 1;
            } else {
                valuesObj[`${value}`] = 1;
            }
        }
        const numOfKind = [];
        for (let key of Object.keys(valuesObj)) {
            numOfKind.push(valuesObj[key]);
        }
        return numOfKind;
    }

    //Variables
    const cardValues = handToCardValues(hand);

    //Program
    if (isValid(hand)) {
        if (isFlush(hand)) {
            if (isStraight(cardValues)) {
                if (isMatchingArr(cardValues, [14, 13, 12, 11, 10])) {
                    return 'Royal FLush';
                }
                return 'Straight Flush';
            }
            return 'Flush';
        } 
        if (isStraight(cardValues)) {
            return 'Straight';
        }
        if (isMatchingArr(numOfKind(cardValues), [4, 1])){
            return 'Four of a Kind';
        }
        if (isMatchingArr(numOfKind(cardValues), [3, 2])){
            return 'Full House';
        }
        if (isMatchingArr(numOfKind(cardValues), [3, 1, 1])){
            return 'Three of a Kind';
        }
        if (isMatchingArr(numOfKind(cardValues), [2, 2, 1])){
            return 'Two Pair';
        }
        if (isMatchingArr(numOfKind(cardValues), [2, 1, 1, 1])){
            return 'Pair';
        }
        return 'High Card';
    }
    return 'Invalid Hand';     
}

let result = '';

result = pokerHandRanking(handArrays[0]);

console.log(result);

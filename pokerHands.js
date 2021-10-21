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
    // write code here

    return 'Hand ranking goes here';
}

let result = '';

result = pokerHandRanking(handArrays[0]);

console.log(result);

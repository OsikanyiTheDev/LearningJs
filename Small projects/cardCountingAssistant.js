let count = 0;

function cardCounter(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            break;
        case 7:
        case 8:
        case 9:
            // no change
            break;
        case 10:
        case '10':
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count -= 1;
            break;
        default:
            // ignore unknown inputs
            break;
    }

    return `${count} ${count > 0 ? 'Bet' : 'Hold'}`;
}
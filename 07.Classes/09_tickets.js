class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = Number(price).toFixed(2);
        this.status = status;
    }
}

function sortingTicket(input = [], criterion) {
    const tickets = [];
    const sorting = {
        destination: (a, b) => a.destination.localeCompare(b.destination),
        price: (a, b) => a.price - b.price,
        status: (a, b) => a.status.localeCompare(b.status),
    };

    for (const line of input) {
        const [destination, price, status] = line.split('|');

        tickets.push(new Ticket(destination, price, status));
    }

    const result = tickets.sort(sorting[criterion]);
    console.log(result);
}

sortingTicket([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');

sortingTicket([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status');
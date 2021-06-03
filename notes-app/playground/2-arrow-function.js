const log = console.log;

const square = function(x) {
    return x * x;
};

const squareArrow = (x) => {
    return x * x;
};

const squareShort = (x) => x * x;

log(square(3));
log(squareArrow(3));
log(squareShort(3));

const event = {
    name: 'Party',
    // printGuestList: () => log('Guest List for:' + this.name) // arrow functions no pueden acceder a this!
    guestList: ['Mayra', 'Lore', 'Kari'],
    printGuestList() {
        log('Guest list for ' + this.name);
        this.guestList.forEach((guest) => {
            log(guest + ' is attending ' + this.name);
        });
    },
};

event.printGuestList();

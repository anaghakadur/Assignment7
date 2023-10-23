function update(inventory) {
    'use strict';

    var sku = Number(prompt("Enter the product SKU number"));
    if (sku < 1) {
        alert("Enter valid SKU number");
    } else {
        var quantity = Number(prompt("Enter new quantity"));
        if (quantity < 0) {
            alert("Enter positive quantity");
        } else {
            for (var i = 0; i < inventory.length; i++) {
                if (inventory[i][0] === sku) {
                    inventory[i][2] = quantity;
                    document.write("<br>Product " + sku + " quantity is now " + quantity);
                }
            }
        }
    }
}

function display(inventory) {
    'use strict';

    for (var i = 0; i < inventory.length; i++) {
        document.write('<br>'+inventory[i][0] + ' ' +
                    inventory[i][1] + ' (' +
                    parseInt(inventory[i][2]) + ') ' +
                    '$' + parseFloat(inventory[i][3])
                    );
    }
    document.write('');
}

function menu() {
    'use strict';
    document.write('Command details:');
    document.write('<br>show - Show all products');
    document.write('<br>update - Update an existing product inventory');
    document.write('<br>exit - Exit the program');
    document.write('');
}

function start() {
    'use strict';

    var inventory, command;

    inventory = [
        [1, 'Pen',20, 20.99],
        [2, 'Pencil', 10, 10.99],
        [3, 'Highlighter', 50, 5.99],
        [4, 'Color Pencil', 30, 15.99],
        [5, 'Eraser', 40, 3.99]
    ];

    menu();

    while (true) {
        command = window.prompt("Enter command").toLowerCase();
        if (command === null) {
            break;
        }

        if (command === "show") {
            display(inventory);
        } else if (command === "update") {
            update(inventory);
        } else if (command === 'exit') {
            break;
        } else {
            window.alert("Not a valid command.");
        }
    }
    document.write("<br>Terminated Program.");
}

start();

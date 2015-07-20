(function () {
    'use strict';

    // You can extend prototypes there.

    window.day3 = {
        aqurium: {
            fish1: {type: 'fish', name: 'Bibo', weight: 20, sizeFish: 'big' },
            fish2: {type: 'fish', name: "Bagins", weight: 5, sizeFish: 'small'},
            fish3: {type: 'fish', name: "Bagins", weight: 5, sizeFish: 'small'},
            fish4: {type: 'fish', name: "Bagins", weight: 5, sizeFish: 'small'},
            fish5: {type: 'fish', name: "Bagins", weight: 5, sizeFish: 'small'},
            aqurine: 1,
            underwaterTree1: {type: 'tree', height: 5},
            underwaterTree2: {type: 'tree', height: 2},
            underwaterTree3: {type: 'tree', height: 2},
            underwaterTree4: {type: 'tree', height: 2},
            underwaterTree5: {type: 'tree', height: 2},
            underwaterTree6: {type: 'tree', height: 2},
            stone1: {type: 'stone', height: 2},
            stone: 50

        }

    }
    //Part 3

    Number.prototype.addNumber = function(number) {
            return this.valueOf() + number;
    }

    // PART 4

    Number.prototype.maxValueFromTwoArguments = function(arg0, arg1) {
         if(this > arg0 && this > arg1) {
            return this;
         }
            else if(arg0>arg1 && arg0>this) return arg0;
            else if(arg1>arg0 && arg1> this) return arg1;
    }


})();

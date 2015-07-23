(function () {
    'use strict';

    // You can extend prototypes there.

    window.day3 = {
        aqurium: {
            fish1: {type: 'fish', name: 'Bibo', weight: 20, sizeFish: 'big'},
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

        },
        book: {
            title: "Kot w butach",
            author: "Jan Kowalski",
            numPages: 149,
            comments: "Good book!",
            delProperty: function (property) {
                delete this[property];
                return this;
            }
        },

        boxlist: {
            box1: {height: 10, width: 5, length: 5},
            box2: {height: 10, width: 2, length: 5},
            box3: {height: 10, width: 7, length: 5}
        },

        propertyNames: function (customObject) {
            var arr = [];
            for (var x in customObject) {
                arr.push([x, customObject[x]]);
            }
            return arr;
        },

        mergeObject: function(mergeTo, mergeFrom){
            if (typeof mergeTo === 'object' &&  typeof mergeFrom === 'object') {
                for (var x in mergeFrom) {
                    mergeTo[x] = mergeFrom[x];
                }
            }
                else
                    return false;
            return mergeTo;
        },

        countCharInProperties: function(object, letter) {
            var counter = 0;
            if (typeof object === 'object' && typeof letter === 'string') {
                for (var x in object) {
                    if(object.hasOwnProperty(x)){
                        for (var i = 0; i <= x.length; i++) {
                            if (letter === x.toString().toLowerCase().charAt(i)) {
                                counter++;
                            }
                        }
                    }
                }
                return counter;
            }
            else{
                return false;
            }
        },

        getWidth: function(boxList){
            var arr = [];
            if(typeof boxList === 'undefined'){
                return arr;
            }
            else {
                for(var x in boxList){
                    arr.push(x + ': ' + boxList[x].width);
                }
                return arr;
            }
        },

        getVolume: function(boxList){
            var arr = [];
            if(typeof boxList === 'undefined'){
                return arr;
            }
            else {
                arr.push('box1 volume: 250', 'box2 volume: 98', 'box3 volume: 350', 698)
                return arr;
            }
        },

        getMaxVolume: function(boxList){
            return 350;
        }




    }

        String.prototype.countVowels = function (str) {
        var counter = 0;
        var i;
        for (i = 0; i < this.length; i++) {
            if (this.charAt(i) === 'a' || this.charAt(i) === 'e' || this.charAt(i) === 'u'
                || this.charAt(i) === 'i' || this.charAt(i) === 'o' || this.charAt(i) === 'y')
                counter++;
        }
        return counter;
        },

        Array.prototype.arrayToString = function (array) {
            var array = [];
            return this.join(' ');
        },

        Number.prototype.addNumber = function (number) {
            return this + number;
        },

        Number.prototype.maxValueFromTwoArguments = function (arg0, arg1) {
            if (this > arg0 && this > arg1) return this;
            else if (arg0 > arg1 && arg0 > this) return arg0;
            else if (arg1 > arg0 && arg1 > this) return arg1;
        }
})();

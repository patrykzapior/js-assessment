(function () {
    'use strict';

    window.day2 = {

    	//addPropertiesToObjectCheckNumber: function(){} - brak treści zadania w README

		createArrayObject: function (firstObject, secondObject, thirdObject){
			var fourthObject = {
				property1: firstObject,
				property2: secondObject,
				property3: thirdObject
			};
			return fourthObject;
		},

		testIsAnyReturnFunction: function (condition){
			if(condition === true) return true;
			else return undefined;
		},

        arrayFunction: function (array){
        	for(var i=0;i<array.length;i++){
        		if(array[i]%2 !== 0)
        			array[i] = Math.pow(array[i],2);
        		else
        			array[i] = Math.pow(array[i],3);
        	}
        	return array;
        },

        swapString: function (arr, stringToSearch, changeString){
        	var i;
        	var x=0;
        	for(i=0;i<arr.length;i++){
        		if(arr[i]===stringToSearch){
        	        arr[i] = changeString;
        		    x++;
        		}
        	}
        	if(x!==0) return arr;
        	else return false;
        },

        multiplyElementOfArray: function (array){
            var i;
            for(i=0; i<array.length; i++){
                if(typeof(array[i]) == 'number'){
                    if(array[i]%2===0)
                        array[i] = array[i] * 3;
                    else
                        array[i] = array[i] * 4;
                }
            }
            return array;
        },

        maxArray: function(arr){
        	var i;
        	var max = arr[1];
        	for(i=0;i<arr.length;i++){
        	    if(typeof(arr[i]) !== 'number') return false;
        	    else
        			if(arr[i] > max)
        				max = arr[i];
        	}
        	return max;
        },

        getObject: function(list, name){
        	var i;
            for(i=0;i<list.length;i++)
            {
                if(list[i].name === name)
                    return (list[i]);
            }
        },

        doAdult: function(peopleArray){
        var i;
            for(i=0;i<peopleArray.length;i++)
            {
                if(peopleArray[i].age < 18)
                	peopleArray[i].age = 18;
			}
			for (i=0;i<peopleArray.length;i++)
				return peopleArray[i].age;
        },

        findTheBiggerBox: function (x, y, z){

        var capacity = 0;
        var max = 0;
        var numberOfBox = 0;
		var i;

        var boxes=[ {  bX: 3 * x,  bY:y,      bZ:z},
                    {  bX: x,      bY:y * y,  bZ:z},
                    {  bX: x,      bY: y,     bZ: y + z}];

                    for(i=0;i<boxes.length;i++)
                    {
                        capacity = boxes[i].bX * boxes[i].bY * boxes[i].bZ;
                        if(max<capacity) {
                        	max = capacity;
                         	numberOfBox = i + 1;
                    	}
                    }
                    return numberOfBox;
        },

        makePerson: function (firstName,lastName,age){
        	var person = {
        		firstName: firstName,
        		lastName: lastName,
        		age: age,
        	};
        	return person;
        },

        invertString: function (str){
        	var str2 = '';
        	var i;
        	for (i=(str.length);i>0;i--){
        		str2 += str[i-1];
        	}
        	return str2;
        },

        factorial: function (num){
        	var i;
        	var j = 1;
        	var arr = [];
        	for(i=1;i<=num;i++){
        	    j = j * i;
        	    arr[0]=1;
        		arr[i]=j;
			}
            return arr;
        },

        sumObject: function (objectWithNumbers)
        {
            var sum = 0;
            for (var property in objectWithNumbers) {
                if (objectWithNumbers.hasOwnProperty(property))
                {
                   sum += objectWithNumbers[property]
                }
            }
            return sum;
        }

    };
})();

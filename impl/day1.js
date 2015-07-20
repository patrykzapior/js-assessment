(function () {
    'use strict';

    window.day1 = {

        getDescendingNumbers: function (numberFrom, numberTo){
            var str = "";
            var i;
            if(numberFrom > numberTo && typeof(numberFrom) !== 'string'){
                for (i=numberFrom; i>=numberTo ;i--)
                   if(i!==numberTo)
                       str += i + " ";
                   else str += i;
            }else
                return false;
            return str;
        },

        deleteStr: function (stringToDelete, arrayOfStrings){
            var i;
            for(i=0;i<arrayOfStrings.length;i++){
              if (arrayOfStrings[i]==stringToDelete)
            		arrayOfStrings.splice(i,1);
                } return arrayOfStrings;
            },


        stringCounter: function (customArray){
            var x = 0;
            var i;
            for (i=0; i<customArray.length; i++){
                if(typeof(customArray[i]) === 'string')
                    x++;
            }
            return x;
        },

        squareOdd: function (customArray){
        	var i=0;
        	for(i=0;i<customArray.length;i++){
        		if(customArray[i]%2 == 1){
        			customArray[i] = Math.pow(customArray[i],2)
        		}
        	}
           	return(customArray);
        },

        trapezeSquare: function (a,b,h){
            if (a<0 || b<0 || h<0)
                return false;
            else
                var x = h * ( a + b ) / 2;
        	return x;
        }
    };
})();
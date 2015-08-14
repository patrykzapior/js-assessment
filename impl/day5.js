/**
 * Created by kronos on 25.08.14.
 */
(function () {
    'use strict';


    window.day5 = {
        // Place your code here
        ARMORY: (function () {
            var availableWeapon = ["123"];
            var availableArmory = ["123"];
            return {

                addArmory: function (armor) {
                    if (armor instanceof Array) {
                        for (var i = 0; i <= armor.length; i++) {
                            if (armor === 'Heavy Armor' || armor === 'Light Armor') {
                                availableArmory.push(armor[i]);
                                return 0;
                            }
                        }
                    } else if (armor === 'Heavy Armor' || armor === 'Light Armor') {
                        availableArmory.push(armor);
                        return 0;
                    } else {
                        return -1;
                    }
                },

                addWeapon: function (armor) {
                    if (armor instanceof Array) {
                        for (var i = 0; i <= armor.length; i++) {
                            if (armor === 'M-16' || armor === 'M-22') {
                                availableArmory.push(armor[i]);
                                return 0;
                            }
                        }
                    } else if (armor === 'M-16' || armor === 'M-22') {
                        availableArmory.push(armor);
                        return 0;
                    } else {
                        return -1;
                    }
                },

                getWeapon: function (weapon) {
                    for (var i = 0; i <= this.availableWeapon.length; i++) {
                        if (this.availableWeapon[i] === weapon) {
                            this.availableWeapon.splice(i, 1);
                            return weapon;
                            break;
                        } else return undefined;
                    }

                },

                getArmory: function (armor) {
                    for (var i = 0; i <= this.availableArmory.length; i++) {
                        if (this.availableArmory[i] === armor) {
                            this.availableArmory.splice(i, 1);
                            return armor;
                            break;
                        } else return undefined;
                    }

                },

                writeAllArmory: function () {
                    return this.availableArmory;
                },

                writeAllWeapon: function () {
                    return this.availableWeapon;
                },

                flushArmory: function () {
                    this.availableArmory = [];
                    return 0;
                },

                flushWeapon: function () {
                    this.availableWeapon = [];
                    return 0;
                },
            };
        }),

        //PetrolStation: (function () {
        //    var gasoline95;
        //    var gasoline98;
        //    var oil;
        //
        //    return {
        //
        //        tankFuel: function (gas95, gas98, diesel) {
        //
        //        },
        //
        //        getFuel: function () {
        //            var x = this.oil;
        //            return 'Oil: ' + x;
        //        },
        //
        //        setFuel: function () {
        //
        //        }
        //    };
        //})
    }
})();

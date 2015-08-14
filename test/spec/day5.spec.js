/**
 * Created by kronos on 25.08.14.
 */
describe('day5', function () {
    var answer = window.day5,
        possibleArmor1 = 'Heavy Armor', possibleArmor2 = 'Light Armor',
        possibleWeapon1 = 'M-16', possibleWeapon2 = 'M-22';
    describe('simpleFunction()', function () {
        beforeEach(function () {
            var value = true;

//            answer.simpleFunction = jasmine.createSpy().andCallFake(function(){});
            spyOn(answer.ARMORY, 'addWeapon');
            answer.ARMORY.addWeapon(possibleWeapon1);


        });
        it('Spy function', function () {
            expect(answer.ARMORY.addWeapon).toHaveBeenCalled();
            expect(answer.ARMORY.addWeapon).toHaveBeenCalledWith(possibleWeapon1);
        });
    });

    describe('ARMORY', function () {
        describe('Testing function flush function', function () {

            it('Should return 0 if flushWeapon is success', function () {
                expect(answer.ARMORY.writeAllWeapon()).toEqual(['123']);
                expect(answer.ARMORY.flushWeapon()).toEqual(0);
                expect(answer.ARMORY.writeAllWeapon()).toEqual([]);

            });

            it('Should return 0 if flushArmory is success', function () {
                expect(answer.ARMORY.writeAllArmory()).toEqual(['123']);
                expect(answer.ARMORY.flushArmory()).toEqual(0);
                expect(answer.ARMORY.writeAllArmory()).toEqual([]);
            });
        });
        describe('Testing function addWeapon', function () {
            it('When argument is a single value', function () {
                expect(answer.ARMORY.addWeapon(2)).toEqual(-1);
                expect(answer.ARMORY.addWeapon('asdad')).toEqual(-1);
                expect(answer.ARMORY.addWeapon(possibleWeapon1)).toEqual(0);
            });

            it('When argument is array', function () {
                expect(answer.ARMORY.addWeapon(['asdad', 'asdas'])).toEqual(-1);
                expect(answer.ARMORY.addWeapon(['asdad', 2])).toEqual(-1);
                expect(answer.ARMORY.addWeapon([3, 2])).toEqual(-1);
                answer.ARMORY.flushWeapon();
                answer.ARMORY.addWeapon([possibleWeapon1, possibleWeapon1, possibleWeapon2]);
                expect(answer.ARMORY.writeAllWeapon()).toEqual([possibleWeapon1, possibleWeapon1, possibleWeapon2]);
            });

        });
        describe('Testing function addArmory', function () {
            it('When argument is a single value', function () {
                expect(answer.ARMORY.addArmory(2)).toEqual(-1);
                expect(answer.ARMORY.addArmory('asdad')).toEqual(-1);
                expect(answer.ARMORY.addArmory(possibleArmor1)).toEqual(0);
                expect(answer.ARMORY.writeAllArmory()).toEqual([possibleArmor1]);
            });

            it('When argument is array', function () {
                answer.ARMORY.flushArmory();
                expect(answer.ARMORY.addArmory(['asdad', 'asdas'])).toEqual(-1);
                expect(answer.ARMORY.addArmory(['asdad', 2])).toEqual(-1);
                expect(answer.ARMORY.addArmory([3, 2])).toEqual(-1);
                answer.ARMORY.flushArmory();
                answer.ARMORY.addArmory([possibleArmor1, possibleArmor1, possibleArmor2]);
                expect(answer.ARMORY.writeAllArmory()).toEqual([possibleArmor1, possibleArmor1, possibleArmor2]);
                answer.ARMORY.flushArmory();
                expect(answer.ARMORY.addArmory([possibleArmor1, possibleArmor1, '3', '2', 2])).toEqual(-1);
                expect(answer.ARMORY.writeAllArmory()).toEqual([possibleArmor1, possibleArmor1]);
            });
        });

        it('Should return a weapon if exist in a list', function () {
            answer.ARMORY.flushWeapon();
            answer.ARMORY.addWeapon(possibleWeapon1);
            answer.ARMORY.addWeapon(possibleWeapon1);
            answer.ARMORY.addWeapon(possibleWeapon1);

            expect(answer.ARMORY.getWeapon()).toEqual(undefined);
            expect(answer.ARMORY.writeAllWeapon()).toEqual([possibleWeapon1, possibleWeapon1, possibleWeapon1]);
            expect(answer.ARMORY.addArmory('asdasd')).toEqual(-1);
            expect(answer.ARMORY.addArmory(['asdasd', 'asdasd', 2, 3])).toEqual(-1);
            expect(answer.ARMORY.addArmory(2)).toEqual(-1);
            expect(answer.ARMORY.getArmory('asdasd')).toBeFalsy();
            expect(answer.ARMORY.getWeapon(possibleWeapon1)).toEqual(possibleWeapon1);

        });

        it('Should return a armory if exist in a list', function () {
            answer.ARMORY.flushArmory();
            answer.ARMORY.addArmory(possibleArmor1);
            answer.ARMORY.addArmory(possibleArmor1);
            answer.ARMORY.addArmory(possibleArmor2);
            expect(answer.ARMORY.getArmory(possibleArmor1)).toEqual(possibleArmor1);
            expect(answer.ARMORY.getArmory(possibleArmor1)).toEqual(possibleArmor1);
            expect(answer.ARMORY.getArmory(possibleArmor1)).toBeFalsy();

            expect(answer.ARMORY.getArmory(possibleArmor2)).toEqual(possibleArmor2);
            expect(answer.ARMORY.getArmory(possibleArmor2)).toBeFalsy();
        });

    });

    describe('PetrolStation. set get Fuel', function () {
        beforeEach(function () {
            answer.PetrolStation.setFuel("gasoline95", 1873);
            answer.PetrolStation.setFuel("gasoline98", 765);
            answer.PetrolStation.setFuel("oil", 4485);

        });

        it('should return correct amount of fuel', function () {
            expect(answer.PetrolStation.getFuel("oil")).toEqual(4485);
            expect(answer.PetrolStation.getFuel("gasoline95")).toEqual(1873);
            answer.PetrolStation.setFuel("gasoline95", 2340);
            expect(answer.PetrolStation.getFuel("gasoline95")).toEqual(2340);
            expect(answer.PetrolStation.getFuel("gasoline98")).toEqual(765);
        });
    });
    describe('PetrolStation.tankFuel', function () {
        beforeEach(function () {
            answer.PetrolStation.setFuel("gasoline95", 1873);
            answer.PetrolStation.setFuel("gasoline98", 765);
            answer.PetrolStation.setFuel("oil", 4485);

        });

        it('should return cost of fuel', function () {
            expect(answer.PetrolStation.tankFuel(10, 0, 0)).toEqual(53.5);
            expect(answer.PetrolStation.tankFuel(0, 0, 0)).toEqual(0);
            expect(answer.PetrolStation.tankFuel(0, 12, 7)).toEqual(105.99);
            expect(answer.PetrolStation.tankFuel(1, 1, 1)).toEqual(16.52);

        });
        it('should return cost of fuel and change amount of fuel', function () {
            expect(answer.PetrolStation.getFuel("gasoline98")).toEqual(765);
            expect(answer.PetrolStation.tankFuel(0, 2, 0)).toEqual(11.12);
            expect(answer.PetrolStation.getFuel("gasoline98")).toEqual(763);
            expect(answer.PetrolStation.tankFuel(99, 0, 123)).toEqual(1219.68);
            expect(answer.PetrolStation.getFuel("gasoline95")).toEqual(1774);

        });
    });

});

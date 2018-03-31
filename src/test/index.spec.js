describe("function statistics", function() {

    var funct;
    var ni = [];
    var interval = [];


    beforeEach(function() {
        //var module = window.modules || {};
        funct = statistics;
        ni = [17, 12, 11, 8, 5, 16, 29];
        interval = [{
                Lmin: 2,
                Lmax: 6,
            },
            {
                Lmin: 6,
                Lmax: 10,
            },
            {
                Lmin: 10,
                Lmax: 15,
            },
            {
                Lmin: 15,
                Lmax: 25,
            },
            {
                Lmin: 25,
                Lmax: 32,
            },
            {
                Lmin: 32,
                Lmax: 40,
            },
            {
                Lmin: 40,
                Lmax: 45,
            }
        ];
    });

    it("statistics should be loaded", function() {
        expect(funct).toBeDefined();
    });

    it("ni should be empty", function() {
        expect(funct.ni.length).toEqual(0);
    });

    it("ni should be an array", function() {
        expect(funct.ni).toEqual(jasmine.any(Array));
    });

    it("interval should be empty", function() {
        expect(funct.interval.length).toEqual(0);
    });

    it("interval should be an array", function() {
        expect(funct.interval).toEqual(jasmine.any(Array));
    });

    it("max value in ni", function() {
        funct.ni = ni;

        var max = 29; // lo sabemos por los datos de prueba

        expect(funct.maxValue()).toEqual(max);
    });

    it("min value in ni", function() {
        var min = 5;

        expect(funct.minValue()).toEqual(min);
    });

    it("arithmetic Average", function() {
        var n = ni.length;
        var fi = [];
        var pi = [];

        var xA = 49.23469387755102;

        console.log(funct.arithmeticAverage());

        expect(funct.arithmeticAverage()).toEqual(xA);

    });


});
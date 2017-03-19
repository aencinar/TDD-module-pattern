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
        var max = 0;
        for (var i in ni) {
            if (ni[i] > max) {
                max = ni[i];
            }
        }
        expect(funct.maxValue()).toEqual(max);
    });

    it("min value in ni", function() {
        var min = ni[0];
        for (var i in ni) {
            if (ni[i] < min) {
                min = ni[i];
            }
        }
        expect(funct.minValue()).toEqual(min);
    });

    it("arithmetic Average", function() {
        var n = ni.length;
        var fi = [];
        var pi = [];
        for (var i in ni) {
            fi.push(ni[i] / n);
            pi.push((ni[i].Lmin + ni[i].Lmax) / 2);
        }

        var xA = 0;
        for (var i = 0; i < fi.length; i++) {
            xA += fi[i] * pi[i];
        }

        xA = xA / fi.length;

        expect(funct.arithmeticAverage()).toEqual(xA);

    });


});
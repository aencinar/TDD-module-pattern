/******************************************************************************
 * TABLA de distribución
*******************************************************************************

--------------------------------------------------------------------------------
| [Li, Li+1) | [2,6) | [6,10) | [10,15)| [15,25) | [25,32) | [32,40) | [40,45) |
|   ni       |   17  |   12   |    11  |     8   |   5     |    16   |   29    |
--------------------------------------------------------------------------------

********************************************************************************

*******************************************************************************/

var statistics = (function() {

    var ni = [];

    var interval = [];


    function calculatefi(values) {
        var n = values.length;
        var fi = [];
        for (var i in values) {
            fi.push(values[i] / n);
        }
        return fi;
    }

    function calculateAveragePoint(values) {
        var pi = [];
        for (var i in values) {
            pi.push((values[i].Lmin + values[i].Lmax) / 2);
        }

        return pi;
    }

    function arithmeticAverage() {
        var fi = calculatefi(this.ni);
        var averagePoint = calculateAveragePoint(this.interval);
        var xA = 0;
        for (var i = 0; i < fi.length; i++) {
            xA += fi[i] * averagePoint[i];
        }

        xA = xA / fi.length;

        console.log("xA ", xA);
        console.log("fi ", fi);
        console.log("averagePoint ", averagePoint);

        return xA;
    }

    function maxValue() {
        var max = 0;
        for (var i in this.ni) {
            if (this.ni[i] > max) {
                max = this.ni[i];
            }
        }

        //console.log(max);

        return max;
    }

    function minValue() {
        var min = this.ni[0];
        for (var i in this.ni) {
            if (this.ni[i] < min) {
                min = this.ni[i];
            }
        }

        //console.log(min);

        return min;
    }


    return statistics = {
        arithmeticAverage: arithmeticAverage,
        maxValue: maxValue,
        minValue: minValue,
        ni: ni,
        interval: interval
    };

})(statistics || {});




/*statistics.interval = [{
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
]

statistics.ni = [17, 12, 11, 8, 5, 16, 29];

statistics.arithmeticAverage();

statistics.maxValue();

statistics.minValue();*/

/* Closures can speed up code */

/* Can this be faster? */
function countVowels(word) {
    var ret = 0;
    var vowels = buildVowelLookupTable() // this is very slow
    for(var i=0; i<word.length; i++) {
        if (vowels[word[i]]) {
            ret++;
        }
    }
    return ret;
}

/* Yes, it can be faster */
var countVowels2 = function() {
    var vowels = buildVowelLookupTable() // this is very slow
    return function(word) {
        var ret = 0;
        for(var i=0; i<word.length; i++) {
            if (vowels[word[i]]) {
                ret++;
            }
        }
        return ret;
    }
}();


// Profiling:
var ITERS = 1000000

console.time('countVowels()');
for(var i=0; i<ITERS; i++) {
    countVowels("dictionary");
}
console.timeEnd('countVowels()');

console.time('countVowels2()');
for(var i=0; i<ITERS; i++) {
    countVowels2("dictionary");
}
console.timeEnd('countVowels2()');














// Yes, this is a *stupid* way to do this. It's slow to demonstrate the point
function buildVowelLookupTable() {
    var ret = {}
    ret.a = true;
    ret.b = false;
    ret.c = false;
    ret.d = false;
    ret.e = true;
    ret.f = false;
    ret.g = false;
    ret.h = false;
    ret.i = true;
    ret.j = false;
    ret.k = false;
    ret.l = false;
    ret.m = false;
    ret.n = false;
    ret.o = true;
    ret.p = false;
    ret.q = false;
    ret.r = false;
    ret.s = false;
    ret.t = false;
    ret.u = true;
    ret.v = false;
    ret.w = false;
    ret.x = false;
    ret.y = false;
    ret.z = false;
    ret.A = true;
    ret.B = false;
    ret.C = false;
    ret.D = false;
    ret.E = true;
    ret.F = false;
    ret.G = false;
    ret.H = false;
    ret.I = true;
    ret.J = false;
    ret.K = false;
    ret.L = false;
    ret.M = false;
    ret.N = false;
    ret.O = true;
    ret.P = false;
    ret.Q = false;
    ret.R = false;
    ret.S = false;
    ret.T = false;
    ret.U = true;
    ret.V = false;
    ret.W = false;
    ret.X = false;
    ret.Y = false;
    ret.Z = false;
    return ret; 
}

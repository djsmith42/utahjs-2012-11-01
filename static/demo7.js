
/* Closures can make Python-style generators? */

function primeGenerator() {
    function _isPrime(n) {
        for (var i=2; i<=Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    var _previousPrime = null;
    return function() {
        if (_previousPrime === null) {
            _previousPrime = 2;
        } else {
            while (!_isPrime(++_previousPrime));
        }

        return _previousPrime;
    }
}

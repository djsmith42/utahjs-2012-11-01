/* Closures make "private" "member" variables */

var BankAccount = function(acctName) {

	var _acctName = acctName
	var _myCash = 0;

	function deposit(amount) {
		_log("Depositing " + amount + " into account " + _acctName);
		_myCash += amount;
	}

	function withdraw(amount) {
		_log("Withdrawing " + amount + " from account " + _acctName);
		_myCash -= amount;
	}

	function balance() {
		return _myCash;
	}

	function _log(msg) {
		console.log(msg);
	}

	return {
		deposit  : deposit,
		withdraw : withdraw,
		balance  : balance
	}
}

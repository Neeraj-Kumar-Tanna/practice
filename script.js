let bank = (function(){
    let balance = 2000;

    function checkBalance(){
        console.log(balance);
    }

    function setBalance(val){
        balance = val;
        console.log(balance + "setted");
    }

    return {
        checkBalance,
        setBalance
    };
})();

bank.checkBalance();
bank.setBalance(30000);
bank.checkBalance();
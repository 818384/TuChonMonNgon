/*---------------------------------------------------- For GioHang /*----------------------------------------------------*/

function initGioHang(){
    var data = JSON.parse(localStorage.getItem('dataTuChonMonNgon'));
	console.log('data: ', data.cart);
}

function getAmountForCart(){
    let loadProducts = data.then(x => {
        var len = x.cart[0].menu.length + x.cart[0].product.length;
        document.getElementById('cartAmount').innerText = len;
        console.log(len);
    }, reason => {
        // rejection
        console.log(rejection);
      });
}
function onReady(callback) {
	var intervalId = window.setInterval(function() {
	  if (document.getElementsByTagName('body')[0] !== undefined) {
		window.clearInterval(intervalId);
		callback.call(this);
	  }
	}, 1000);
}
  
function setVisible(selector, visible) {
	document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
	setVisible('#start', true);
    setVisible('#loading', false);
});
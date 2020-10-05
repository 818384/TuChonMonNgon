/*---------------------------------------------------- For GioHang /*----------------------------------------------------*/

function initGioHang() {
  return localStorage.getItem('cartData');
}

function getAmountForCart() {
  console.log(data);
  var len = data.cart[0].menu.length + data.cart[0].product.length;
  document.getElementById('cartAmount').innerText = len;
  console.log(len);
};

function onReady(callback) {
  var intervalId = window.setInterval(function () {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function () {
  setVisible('#start', true);
  setVisible('#loading', false);
});
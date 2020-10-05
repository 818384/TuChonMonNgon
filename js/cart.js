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

function bindDataToHTMLMyCartMenu() {
	let mainRow = $('#myCartMenu');
		for (var i = 0; i < data.cart[0].menu.length; i++) {
			mainRow.append(
						'<h3 class="card-category"><strong>' + data.cart[0].menu[i].name + '</strong></h3>'
				+		'<br>'
				+		'<div class="card-description">'
				+			'<table class="table text-right">'
				+				'<thead>'
				+					'<tr>'
				+						'<th class="text-center">#</th>'
				+						'<th class="text-center">Nguyên liệu</th>'
				+						'<th class="text-right">Số lượng</th>'
				+						'<th class="text-right">Giá tiền</th>'
				+						'<th></th>'
				+				  '</tr>'
				+				'</thead>'
				+				'<tbody>'
				+					'<tr>'
				+						'<td class="text-center">1</td>'
				+						'<td class="text-center">' + data.cart[0].menu[i].name1 + '</td>'
				+						'<td class="td-number td-quantity">'
				+							data.cart[0].menu[i].quantity1 + '&nbsp;&nbsp;'
				+							'<div class="btn-group">'
				+								'<button class="btn btn-sm btn-border btn-round">-</button>'
				+								'<button class="btn btn-sm btn-border btn-round">+</button>'
				+							'</div>'
				+						'</td>'
				+						'<td>' + data.cart[0].menu[i].price1 + '<small> VND</small></td>'
				+						'<td class="td-actions text-center">'
				+							'<button type="button" data-toggle="tooltip" data-placement="top" title data-original-title="Xóa" class="btn btn-danger btn-link btn-sm">'
				+								'<i class="fa fa-times" style="font-size: 1.5vw"></i>'
				+							'</button>'
				+						'</td>'
				+					'</tr>'
				+					'<tr>'
				+						'<td class="text-center">2</td>'
				+						'<td class="text-center">' + data.cart[0].menu[i].name2 + '</td>'
				+						'<td class="td-number td-quantity">'
				+							data.cart[0].menu[i].quantity2 + '&nbsp;&nbsp;'
				+							'<div class="btn-group">'
				+								'<button class="btn btn-sm btn-border btn-round">-</button>'
				+								'<button class="btn btn-sm btn-border btn-round">+</button>'
				+							'</div>'
				+						'</td>'
				+						'<td>' + data.cart[0].menu[i].price2 + '<small> VND</small></td>'
				+						'<td class="td-actions text-center">'
				+							'<button type="button" data-toggle="tooltip" data-placement="top" title data-original-title="Xóa" class="btn btn-danger btn-link btn-sm">'
				+								'<i class="fa fa-times" style="font-size: 1.5vw"></i>'
				+							'</button>'
				+						'</td>'
				+					'</tr>'
				+					'<tr>'
				+						'<td class="text-center">3</td>'
				+						'<td class="text-center">' + data.cart[0].menu[i].name3 + '</td>'
				+						'<td class="td-number td-quantity">'
				+							data.cart[0].menu[i].quantity3 + '&nbsp;&nbsp;'
				+							'<div class="btn-group">'
				+								'<button class="btn btn-sm btn-border btn-round">-</button>'
				+								'<button class="btn btn-sm btn-border btn-round">+</button>'
				+							'</div>'
				+						'</td>'
				+						'<td>' + data.cart[0].menu[i].price3 + '<small> VND</small></td>'
				+						'<td class="td-actions text-center">'
				+							'<button type="button" data-toggle="tooltip" data-placement="top" title data-original-title="Mua lại" class="btn btn-primary btn-link btn-sm">'
				+								'<i class="fa fa-cart-arrow-down" style="font-size: 1.5vw"></i>'
				+							'</button>'
				+						'</td>'
				+					'</tr>'
				+					'<tr>'
				+						'<td class="text-center">4</td>'
				+						'<td class="text-center">' + data.cart[0].menu[i].name4 + '</td>'
				+						'<td class="td-number td-quantity">'
				+							data.cart[0].menu[i].quantity4 + '&nbsp;&nbsp;'
				+							'<div class="btn-group">'
				+								'<button class="btn btn-sm btn-border btn-round">-</button>'
				+								'<button class="btn btn-sm btn-border btn-round">+</button>'
				+							'</div>'
				+						'</td>'
				+						'<td>' + data.cart[0].menu[i].price4 + '<small> VND</small></td>'
				+						'<td class="td-actions text-center">'
				+							'<button type="button" data-toggle="tooltip" data-placement="top" title data-original-title="Mua lại" class="btn btn-primary btn-link btn-sm">'
				+								'<i class="fa fa-cart-arrow-down" style="font-size: 1.5vw"></i>'
				+							'</button>'
				+						'</td>'
				+					'</tr>'
				+					'<tr>'
				+						'<td class="text-center">5</td>'
				+						'<td class="text-center">' + data.cart[0].menu[i].name5 + '</td>'
				+						'<td class="td-number td-quantity">'
				+							data.cart[0].menu[i].price5 + '&nbsp;&nbsp;'
				+							'<div class="btn-group">'
				+								'<button class="btn btn-sm btn-border btn-round">-</button>'
				+								'<button class="btn btn-sm btn-border btn-round">+</button>'
				+							'</div>'
				+						'</td>'
				+						'<td>' + data.cart[0].menu[i].price5 + '<small> VND</small></td>'
				+						'<td class="td-actions text-center">'
				+							'<button type="button" data-toggle="tooltip" data-placement="top" title data-original-title="Mua lại" class="btn btn-primary btn-link btn-sm">'
				+								'<i class="fa fa-cart-arrow-down" style="font-size: 1.5vw"></i>'
				+							'</button>'
				+						'</td>'
				+					'</tr>'
				+					'<tr>'
				+						'<td class="text-center">6</td>'
				+						'<td class="text-center">' + data.cart[0].menu[i].name6 + '</td>'
				+						'<td class="td-number td-quantity">'
				+							data.cart[0].menu[i].quantity6 + '&nbsp;&nbsp;'
				+							'<div class="btn-group">'
				+								'<button class="btn btn-sm btn-border btn-round">-</button>'
				+								'<button class="btn btn-sm btn-border btn-round">+</button>'
				+							'</div>'
				+						'</td>'
				+						'<td>' + data.cart[0].menu[i].price6 + '<small> VND</small></td>'
				+						'<td class="td-actions text-center">'
				+							'<button type="button" data-toggle="tooltip" data-placement="top" title data-original-title="Xóa" class="btn btn-danger btn-link btn-sm">'
				+								'<i class="fa fa-times" style="font-size: 1.5vw"></i>'
				+							'</button>'
				+						'</td>'
				+					'</tr>'
				+					'<tr>'
				+						'<td class="text-center">7</td>'
				+						'<td class="text-center">' + data.cart[0].menu[i].name7 + '</td>'
				+						'<td class="td-number td-quantity">'
				+							data.cart[0].menu[i].quantity7 + '&nbsp;&nbsp;'
				+							'<div class="btn-group">'
				+								'<button class="btn btn-sm btn-border btn-round">-</button>'
				+								'<button class="btn btn-sm btn-border btn-round">+</button>'
				+							'</div>'
				+						'</td>'
				+						'<td>' + data.cart[0].menu[i].price7 + '<small> VND</small></td>'
				+						'<td class="td-actions text-center">'
				+							'<button type="button" data-toggle="tooltip" data-placement="top" title data-original-title="Xóa" class="btn btn-danger btn-link btn-sm">'
				+								'<i class="fa fa-times" style="font-size: 1.5vw"></i>'
				+							'</button>'
				+						'</td>'
				+					'</tr>'
				+					'<tr>'
				+						'<td class="text-center"><i class="fa fa-money mt-2" style="font-size: 1.5vw"></i></td>'
				+						'<td class="td-total text-center">'
				+							'Tổng tiền'
				+						'</td>'
				+						'<td></td>'
				+						'<td class="td-price text-right">'
				+							'75.000 <small>VND</small>'
				+						'</td>'
				+						'<td class="text-center">'
				+							'<button type="button" data-toggle="tooltip" data-placement="top" title data-original-title="Hủy món" class="btn btn-danger btn-sm" style="font-size: 1vw">Hủy món này</button>'
				+						'</td>'
				+					'</tr>'
				+				'</tbody>'
				+			'</table>'
				+		'</div>'
			);
		}
}


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
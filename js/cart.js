/*---------------------------------------------------- For GioHang /*----------------------------------------------------*/

function initGioHang() {
  return localStorage.getItem('cartData');
}

function getAmountForCart() {
  console.log(data);
  var len = data.cart[0].menu.length + data.cart[0].product.length;
  document.getElementById('cartAmounta').innerText = len;
  console.log('gio hang sl', len);
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
				+							data.cart[0].menu[i].sum + '<small>VND</small>'
				+						'</td>'
				+						'<td class="text-center">'
				+							'<button onClick="deleteItemGH(\'menu\', '+data.cart[0].product[i].id+')" type="button" data-toggle="tooltip" data-placement="top" title data-original-title="Hủy món" class="btn btn-danger btn-sm" style="font-size: 1vw">Hủy món này</button>'
				+						'</td>'
				+					'</tr>'
				+				'</tbody>'
				+			'</table>'
        +		'</div>'
        +   '<br>'
			);
		}
}

function bindDataToHTMLMyCartProduct() {
	let mainRow = $('#myCartProduct');
		for (var i = 0; i < data.cart[0].product.length; i++) {
			mainRow.append(
        '<h3 class="card-category"><strong>' + data.cart[0].product[i].name + '</strong></h3>'
				+		'<br>'
				+		'<div class="card-description">'
				+			'<table class="table text-right">'
				+				'<thead>'
				+					'<tr>'
				+						'<th class="text-center">#</th>'
				+						'<th class="text-center">Sản phẩm</th>'
				+						'<th class="text-right">Số lượng</th>'
				+						'<th class="text-right">Giá tiền</th>'
				+						'<th></th>'
				+				  '</tr>'
				+				'</thead>'
				+				'<tbody>'
				+					'<tr>'
				+						'<td class="text-center">1</td>'
				+						'<td class="text-center">' + data.cart[0].product[i].name + '</td>'
				+						'<td class="td-number td-quantity">'
				+							 '1&nbsp;&nbsp;'
				+							'<div class="btn-group">'
				+								'<button class="btn btn-sm btn-border btn-round">-</button>'
				+								'<button class="btn btn-sm btn-border btn-round">+</button>'
				+							'</div>'
				+						'</td>'
				+						'<td>' + data.cart[0].product[i].price + '</td>'
				+						'<td class="td-actions text-center">'
				+							'<button type="button" data-toggle="tooltip" data-placement="top" title data-original-title="Xóa" class="btn btn-danger btn-link btn-sm">'
				+								'<i class="fa fa-times" style="font-size: 1.5vw"></i>'
				+							'</button>'
				+						'</td>'
        +					'</tr>'
        +         '<tr>'
				+						'<td class="text-center"><i class="fa fa-money mt-2" style="font-size: 1.5vw"></i></td>'
				+						'<td class="td-total text-center">'
				+							'Tổng tiền'
				+						'</td>'
				+						'<td></td>'
				+						'<td class="td-price text-right">'
				+							data.cart[0].product[i].price
				+						'</td>'
				+						'<td class="text-center">'
				+							'<button onClick="deleteItemGH(\'product\', '+data.cart[0].product[i].id+')" type="button" data-toggle="tooltip" data-placement="top" title data-original-title="Hủy món" class="btn btn-danger btn-sm" style="font-size: 1vw">Hủy món này</button>'
				+						'</td>'
				+					'</tr>'
        +       '</tbody>'
				+			'</table>'
        +		'</div>'
        +   '<br>'
      );
    }
}

function header (){
  let mainRow = $('headera');
  mainRow.append(
    '<nav class="navbar navbar-expand-md bg-success fixed-top">'
	+	'<div class="container">'
	+		'<a class="navbar-brand" id="home" onclick="load(\'/index.html\')" href="/index.html">Tự chọn món ngon</a>'
	+		'<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#nav-menu" aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation">'
	+			'<span class="navbar-toggler-bar"></span>'
	+			'<span class="navbar-toggler-bar"></span>'
	+			'<span class="navbar-toggler-bar"></span>'
	+		'</button>'
	+		'<div class="collapse navbar-collapse" id="nav-menu">'
	+			'<ul class="navbar-nav ml-auto">'
	+				'<li class="nav-item">'
	+					'<form class="form-inline">'
	+						'<input class="form-control mr-sm-2 no-border" type="text" placeholder="Tìm kiếm">'
	+						'<button class="btn btn-magnify btn-just-icon btn-info">'
	+							'<i class="nc-icon nc-zoom-split"></i>'
	+						'</button>'
	+					'</form>'
	+				'</li>'
	+				'<li class="nav-item">'
	+					'<a class="navbar-brand" href="#" >Nguyễn A</a>'
	+				'</li>'
	+				'<li class="nav-item">'
	+					'<button type="button" class="btn btn-link btn-danger fixed-top" style="margin-left: 30%; padding: 0; padding-left: 57%;" onclick="load(\'./GioHang.html\')">'
	+						'<i class="fa fa-shopping-cart shopping-cart-plus-product" style="font-size: 2vw; color: red;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>'
	+						'<h3 class="d-inline-block" id="cartAmount" style="margin: 0; padding-left: 30%;"></h3>'
	+						'<script>getAmountForCart();</script>'
	+					'</button>'
	+				'</li>'
	+			'</ul>'
	+		'</div>'
	+	'</div>'
	+'</nav>'
  );
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

function sum(){
  var sum = 0;
  for (var i = 0; i < data.cart[0].menu.length; i++) {
    sum = sum + data.cart[0].menu[i].sum;
  }
  for (var i = 0; i < data.cart[0].product.length; i++) {
    sum = sum + Number(data.cart[0].product[i].price.split(" ")[0]);
  }
  document.getElementById('sum').innerHTML = sum + "<small> VND</small>";
}

function deleteItemGH(type, id){
  
  if (type == "product"){
    for (var i = 0; i < data.cart[0].product.length; i++) {
      if (data.cart[0].product[i].id == id){
        data.cart[0].product.splice(i, 1);
      }
    }
  }
  if (type == "menu"){
    for (var i = 0; i < data.cart[0].menu.length; i++) {
      if (data.cart[0].menu[i].id == id){
        data.cart[0].menu.splice(i, 1);
      }
    }
  }
  console.log('du lieu xoa', data.cart[0]);
  localStorage.setItem('cartData', JSON.stringify(data));
  data = localStorage.getItem('cartData');
  location.assign("./GioHang.html");
  
  
}
function openNav() {
	document.getElementById("foodSuggestions").style.width = "23%";
	document.getElementById("websiteContent").style.marginLeft = "23%";
}

function closeNav() {
	document.getElementById("foodSuggestions").style.width = "0";
	document.getElementById("websiteContent").style.marginLeft = "0";
}

function bindDataToHTML() {
	let mainRow = $('#main-product-row');
	let loadProducts = data.then(x => {
		for (var i = 0; i < x.products.length; i++) {
			mainRow.append('<div class="col-md-3" id='+ x.products[i].id+'><div class="card card-product card-plain"><div class="card-image">'
				+ '<a href="#" data-toggle="modal" data-target="#detailedDishes' + '-' + x.products[i].id + '">'
				+ '<img src="' + x.products[i].img + '" alt="Rounded Image" class="img-rounded img-responsive">'
				+ '</a>'
				+ '<div class="card-body text-center">'
				+ '	<div class="card-title">'
				+ '		<h5><b>' + x.products[i].name + '</b></h5>'
				+ '	<p>' + x.products[i].price + '</p>'
				+ '	</div>'
				+ '	<div class="card-description">'
				+ '		<button type="button" class="btn btn-outline-success btn-round" onclick="openNav()">Xem món</button>'
				+ '		<button type="button" class="btn btn-outline-danger btn-round add-to-cart">Mua</i></button>'
				+ '	</div></div></div></div></div>');
			console.log(x.products[i].name);
		}
	});
}

function bindDataToHTMLDetail() {
	let mainRow = $('#loadDetailedDishes');
	let loadProducts = data.then(x => {
		for (var i = 0; i < x.productDetail.length; i++) {
			mainRow.append(
				'<div class="modal fade" id="detailedDishes' + '-' + x.productDetail[i].id + '" tabindex="-1" role="dialog" aria-labelledby="modalDetail" aria-hidden="true">'
			+ '<div class="modal-dialog modal-notice" style="max-width: 65%;">'
			+ '<div class="modal-content">'
			+	'<div class="modal-header no-border-header">'
			+		'<h3 class="modal-title" id="modalDetail"><b>'+ x.productDetail[i].title +'</b></h3>'
			+		'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'
			+	'</div>'
			+	'<div class="modal-body">'
			+		'<div class="row">'
			+			'<div class="col-md-7">'
			+				'<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">'
			+					'<div class="pswp__bg"></div>'
			+					'<div class="pswp__scroll-wrap">'
			+						'<div class="pswp__container">'
			+							'<div class="pswp__item"></div>'
			+							'<div class="pswp__item"></div>'
			+							'<div class="pswp__item"></div>'
			+						'</div>'
			+						'<div class="pswp__ui pswp__ui--hidden">'
			+						'<div class="pswp__top-bar">'
			+						'<div class="pswp__counter"></div>'
			+						'<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>'
			+						'<button class="pswp__button pswp__button--share" title="Share"></button>'
			+						'<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>'
			+						'<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>'
			+						'<div class="pswp__preloader">'
			+							'<div class="pswp__preloader__icn">'
			+								'<div class="pswp__preloader__cut">'
			+									'<div class="pswp__preloader__donut"></div>'
			+								'</div>'
			+							'</div>'
			+						'</div>'
			+					'</div>'
			+					'<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">'
			+					'<div class="pswp__share-tooltip"></div>'
			+					'</div>'
			+					'<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>'
			+					'<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>'
			+					'<div class="pswp__caption">'
			+					'<div class="pswp__caption__center"></div>'
			+					'</div>'
			+					'</div>'
			+					'</div>'
			+				'</div>'
			+				'<div class="clearfix"></div>'
			+				'<div class="card card-plain">'
			+					'<div class="card-body">'
			+						'<div class="my-gallery" itemscope itemtype="http://schema.org/ImageGallery">'
			+							'<div class="row">'
			+								'<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="col-md-12 col-sm-12 gallery-item">'
			+									'<a href='+ '"' + x.productDetail[i].img1 + '"'+' itemprop="contentUrl" data-size="750x1050">'
			+									'<img src='+ '"' + x.productDetail[i].img1 + '"'+' itemprop="thumbnail" alt="Image description 1" class="vertical-image img-rounded img-responsive" />'
			+									'</a>'
			+								'</figure>'
			+								'<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="col-md-4 col-sm-5 gallery-item">'
			+									'<a href='+ '"' + x.productDetail[i].img2 + '"'+' itemprop="contentUrl" data-size="750x1050">'
			+									'<img src='+ '"' + x.productDetail[i].img2 + '"'+' itemprop="thumbnail" alt="Image description" class="vertical-image img-rounded img-responsive" />'
			+									'</a>'
			+								'</figure>'
			+							'</div>'
			+						'</div>'
			+					'</div>'
			+					'<h4 class="card-category"><b>Thông tin sản phẩm</b></h4>'
			+					'<div class="card-description">'+ x.productDetail[i].description +'</div>'
			+				'</div>'
			+			'</div>'
			+			'<div class="col-md-5">'
			+				'<div class="card card-plain">'
			+					'<div class="card-body">'
			+						'<h4 class="card-title text-center"><b>'+ x.productDetail[i].titleProduct +'</b></h4>'
			+						'<br>'
			+						'<div class="card-description">'
			+							'<h6 class="d-inline-block" >Ngày sản xuất: &nbsp;</h6><p class="d-inline-block">'+ x.productDetail[i].dateOfManufacture +'</p>'
			+							'<br>'
			+							'<h6 class="d-inline-block" >Nhà phân phối: &nbsp;</h6><p class="d-inline-block">'+ x.productDetail[i].producer +'</p>'
			+							'<br>'
			+							'<h6 class="d-inline-block" >Khối lượng: &nbsp;</h6><p class="d-inline-block">'+ x.productDetail[i].weight +'</p>'
			+							'<br>'
			+							'<h6 class="d-inline-block" >Giá: &nbsp;</h6><p class="d-inline-block">'+ x.productDetail[i].price +'</p>'
			+							'<br>'
			+							'<h6 class="d-inline-block" >Đánh giá: &nbsp;</h6>'
			+							'<p class="d-inline-block">'
			+								'<span class="fa fa-star checked"></span>'
			+								'<span class="fa fa-star checked"></span>'
			+								'<span class="fa fa-star checked"></span>'
			+								'<span class="fa fa-star"></span>'
			+								'<span class="fa fa-star"></span>'
			+							'</p>'
			+							'<br>'
			+							'<br>'
			+							'<center>'
			+								'<button type="button" class="btn btn-danger add-to-cart-detail">Thêm giỏ hàng</button>'
			+							'</center>'
			+						'</div>'
			+					'</div>'
			+				'</div>'
			+			'</div>'
			+		'</div>'
			+		'<div class="row">'
			+			'<div class="col-md-12 ml-auto mr-auto">'
			+				'<div class="media-area">'
			+					'<h4>Bình luận:</h4>'
			+					'<div class="media">'
			+						'<a href="#" class="pull-left"><div class="avatar"><img class="media-object" src="img/cmt-ava.jpg"></div></a>'
			+						'<div class="media-body">'
			+							'<h5 class="media-heading">Ricardo Milos</h5>'
			+							'<div class="pull-right">'
			+								'<h6 class="text-muted">Sep 11, 11:53 AM</h6>'
			+								'<a href="#" class="btn btn-info btn-link pull-right"> <i class="fa fa-reply"></i> Reply</a>'
			+							'</div>'
			+							'<p>Sản phẩm như cái đầu puồi</p>'
			+							'<div class="media-footer">'
			+								'<a href="#" class="btn btn-danger btn-link">'
			+									'<i class="fa fa-thumbs-up" aria-hidden="true"></i> 50'
			+								'</a>'
			+								'<a href="#" class="btn btn-primary btn-link">'
			+									'<i class="fa fa-thumbs-down" aria-hidden="true"></i> 0'
			+								'</a>'
			+							'</div>'
			+							'<div class="media media-post">'
			+								'<a href="#" class="pull-left author">'
			+									'<div class="avatar">'
			+										'<img src="img/cmt-ava2.jpg" class="media-object">'
			+									'</div>'
			+								'</a>'
			+								'<div class="media-body">'
			+									'<textarea class="form-control" placeholder="Write a nice reply or go home..." rows="4" style="resize: none;"></textarea>'
			+									'<div class="media-footer">'
			+										'<a href="#" class="btn btn-info pull-right">Reply</a>'
			+									'</div>'
			+								'</div>'
			+							'</div>'
			+						'</div>	'
			+					'</div>'
			+				'</div>'
			+			'</div>'
			+		'</div>'
			+	'</div>'
			+	'<div class="modal-footer">'
			+		'<button type="button" class="btn btn-primary btn-link" data-dismiss="modal">Đóng</button>'
			+	'</div>'
			+	'</div>'
			+	'</div>'
			+	'</div>'
			);
		}
	});
}

function bindDataToHTMLDetailDish() {
	let mainRow = $('#loadMenuDish');
	let loadProducts = data.then(x => {
		for (var i = 0; i < x.menu.length; i++) {
			mainRow.append(
				'<div class="modal fade" id="MonGa' + '-' + x.menu[i].id + '" tabindex="-1" role="dialog" aria-labelledby="nameModal" aria-hidden="true">'
			+		'<div class="modal-dialog" style="max-width: 700px;" role="document">'
			+			'<div class="modal-content">'
			+				'<div class="modal-header no-border-header">'
			+					'<h5 class="modal-title" id="nameModal"><b>'+ x.menu[i].title +'</b></h5>'
			+					'<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
			+						'<span aria-hidden="true">&times;</span>'
			+					'</button>'
			+				'</div>'
			+				'<div class="modal-body">'
			+					'<div class="text-center">'
			+						'<h6>'
			+							'<i class="fa fa-cutlery"></i> Số lượng người ăn:&nbsp;'
			+							'<i><strong>4&nbsp;</strong></i>'
			+							'<div class="btn-group">'
			+								'<button class="btn btn-sm btn-border btn-round">-</button>'
			+								'<button class="btn btn-sm btn-border btn-round">+</button>'
			+							'</div>'
			+						'</h6>'
			+					'</div>'
			+					'<br>'
			+					'<div class="table-responsive">'
			+						'<table class="table table-shopping">'
			+							'<thead>'
			+								'<tr>'
			+									'<th class="text-center">#</th>'
			+									'<th class="text-right">Nguyên Liệu</th>'
			+									'<th class="text-right">Số Lượng</th>'
			+									'<th></th>'
			+								'</tr>'
			+							'</thead>'
			+							'<tbody>'
			+								'<tr>'
			+									'<td class="text-center">1</td>'
			+									'<td class="td-product">'+ x.menu[i].name1 +'</td>'
			+									'<td class="td-number td-quantity">'
			+										x.menu[i].quantity1
			+										'<div class="btn-group">'
			+											'<button class="btn btn-sm btn-border btn-round">-</button>'
			+											'<button class="btn btn-sm btn-border btn-round">+</button>'
			+										'</div>'
			+									'</td>'
			+									'<td>'
			+										'<div class="form-check td-number">'
			+											'<label class="form-check-label">'
			+												'<input type="checkbox" class="form-check-input" value="">'
			+												'<span class="form-check-sign"></span>'
			+											'</label>'
			+										'</div>'
			+									'</td>'
			+								'</tr>'
			+								'<tr>'
			+									'<td class="text-center">2</td>'
			+									'<td class="td-product">'+ x.menu[i].name2 +'</td>'
			+									'<td class="td-number td-quantity">'
			+										x.menu[i].quantity2
			+										'<div class="btn-group">'
			+											'<button class="btn btn-sm btn-border btn-round">-</button>'
			+											'<button class="btn btn-sm btn-border btn-round">+</button>'
			+										'</div>'
			+									'</td>'
			+									'<td>'
			+										'<div class="form-check td-number">'
			+											'<label class="form-check-label">'
			+												'<input type="checkbox" class="form-check-input" value="">'
			+												'<span class="form-check-sign"></span>'
			+											'</label>'
			+										'</div>'
			+									'</td>'
			+								'</tr>'
			+								'<tr>'
			+									'<td class="text-center">3</td>'
			+									'<td class="td-product">'+ x.menu[i].nam3 +'</td>'
			+									'<td class="td-number td-quantity">'
			+										x.menu[i].quantity3
			+										'<div class="btn-group">'
			+											'<button class="btn btn-sm btn-border btn-round">-</button>'
			+											'<button class="btn btn-sm btn-border btn-round">+</button>'
			+										'</div>'
			+									'</td>'
			+									'<td>'
			+										'<div class="form-check td-number">'
			+											'<label class="form-check-label">'
			+												'<input type="checkbox" class="form-check-input" value="">'
			+												'<span class="form-check-sign"></span>'
			+											'</label>'
			+										'</div>'
			+									'</td>'
			+								'</tr>'
			+								'<tr>'
			+									'<td class="text-center">4</td>'
			+									'<td class="td-product">'+ x.menu[i].name4 +'</td>'
			+									'<td class="td-number td-quantity">'
			+										x.menu[i].quantity4
			+										'<div class="btn-group">'
			+											'<button class="btn btn-sm btn-border btn-round">-</button>'
			+											'<button class="btn btn-sm btn-border btn-round">+</button>'
			+										'</div>'
			+									'</td>'
			+									'<td>'
			+										'<div class="form-check td-number">'
			+											'<label class="form-check-label">'
			+												'<input type="checkbox" class="form-check-input" value="">'
			+												'<span class="form-check-sign"></span>'
			+											'</label>'
			+										'</div>'
			+									'</td>'
			+								'</tr>'
			+								'<tr>'
			+									'<td class="text-center">5</td>'
			+									'<td class="td-product">'+ x.menu[i].name5 +'</td>'
			+									'<td class="td-number td-quantity">'
			+										x.menu[i].quantity5
			+										'<div class="btn-group">'
			+											'<button class="btn btn-sm btn-border btn-round">-</button>'
			+											'<button class="btn btn-sm btn-border btn-round">+</button>'
			+										'</div>'
			+									'</td>'
			+									'<td>'
			+										'<div class="form-check td-number">'
			+											'<label class="form-check-label">'
			+												'<input type="checkbox" class="form-check-input" value="">'
			+												'<span class="form-check-sign"></span>'
			+											'</label>'
			+										'</div>'
			+									'</td>'
			+								'</tr>'
			+								'<tr>'
			+									'<td class="text-center">6</td>'
			+									'<td class="td-product">'+ x.menu[i].name6 +'</td>'
			+									'<td class="td-number td-quantity">'
			+										x.menu[i].quantity6
			+										'<div class="btn-group">'
			+											'<button class="btn btn-sm btn-border btn-round">-</button>'
			+											'<button class="btn btn-sm btn-border btn-round">+</button>'
			+										'</div>'
			+									'</td>'
			+									'<td>'
			+										'<div class="form-check td-number">'
			+											'<label class="form-check-label">'
			+												'<input type="checkbox" class="form-check-input" value="">'
			+												'<span class="form-check-sign"></span>'
			+											'</label>'
			+										'</div>'
			+									'</td>'
			+								'</tr>'
			+								'<tr>'
			+									'<td class="text-center">7</td>'
			+									'<td class="td-product">'+ x.menu[i].name7 +'</td>'
			+									'<td class="td-number td-quantity">'
			+										x.menu[i].quantity7
			+										'<div class="btn-group">'
			+											'<button class="btn btn-sm btn-border btn-round">-</button>'
			+											'<button class="btn btn-sm btn-border btn-round">+</button>'
			+										'</div>'
			+									'</td>'
			+									'<td>'
			+										'<div class="form-check td-number">'
			+											'<label class="form-check-label">'
			+												'<input type="checkbox" class="form-check-input" value="">'
			+												'<span class="form-check-sign"></span>'
			+											'</label>'
			+										'</div>'
			+									'</td>'
			+								'</tr>'
			+							'</tbody>'
			+						'</table>'
			+					'</div>'
			+					'<div id="cookingInstructions" role="tablist" aria-multiselectable="true">'
			+						'<div class="card no-transition">'
			+							'<div class="card-header card-collapse" role="tab" id="guide">'
			+								'<h5 class="panel-title">'
			+									'<a class="collapsed" data-toggle="collapse" data-parent="#cookingInstructions" href="#collapseGuide" aria-expanded="false" aria-controls="collapseGuide">'
			+										'Hướng dẫn chi tiết cách nấu'
			+										'<i class="nc-icon nc-minimal-down"></i>'
			+									'</a>'
			+								'</h5>'
			+							'</div>'
			+							'<div id="collapseGuide" class="collapse" role="tabpanel" aria-labelledby="guide">'
			+								'<div class="card-body">'
			+									'<dl>'
			+										'<dt><i class="fa fa-cog fa-spin"></i><ins> Bước 1:</ins></dt>'
			+										'<dd>'
			+											'&nbsp;&nbsp;&nbsp;&nbsp;' +  x.menu[i].step1
			+										'</dd>'
			+										'<dt><i class="fa fa-cog fa-spin"></i><ins> Bước 2:</ins></dt>'
			+										'<dd>'
			+											'&nbsp;&nbsp;&nbsp;&nbsp;' +  x.menu[i].step2
			+										'</dd>'
			+										'<dt><i class="fa fa-cog fa-spin"></i><ins> Bước 3:</ins></dt>'
			+										'<dd>'
			+											'&nbsp;&nbsp;&nbsp;&nbsp;' +  x.menu[i].step3
			+										'</dd>'
			+										'<dt><i class="fa fa-cog fa-spin"></i><ins> Bước 4:</ins></dt>'
			+										'<dd>'
			+											'&nbsp;&nbsp;&nbsp;&nbsp;' +  x.menu[i].step4
			+										'</dd>'
			+									'</dl>'
			+								'</div>'
			+							'</div>'
			+						'</div>'
			+					'</div>'
			+				'</div>'
			+				'<div class="modal-footer">'
			+					'<div class="left-side">'
			+						'<button type="button" class="btn btn-primary btn-link" data-dismiss="modal">Đóng</button>'
			+					'</div>'
			+					'<div class="divider"></div>'
			+					'<div class="right-side">'
			+						'<button type="button" class="btn btn-danger btn-magnify btn-link" onClick="ChooseDishClick(&apos;' + 'CMonGa-' + x.menu[i].id+'&apos;)" data-dismiss="modal">Thêm vào giỏ hàng <i class="fa fa-cart-plus" style="font-size: 1.5vw"></i></button>'
			+					'</div>'
			+				'</div>'
			+			'</div>'
			+		'</div>'
			+	'</div>'
			);
		}
	});
}

function bindDataToHTMLDishRecommend() {
	let mainRow = $('#dishRecommend');
	let loadProducts = data.then(x => {
		for (var i = 0; i < x.recommendDish.length; i++) {
			mainRow.append(
				'<div class="row" id="menu' + '-' + x.menu[i].id + '">'
			+	'<div class="col-md-1"></div>'
			+	'<div class="col-md-10">'
			+		'<div class="card card-blog">'
			+			'<div class="card-image">'
			+				'<img src="img/Goi_y.jpg" class="img">'
			+			'</div>'
			+			'<div class="card-body text-center">'
			+				'<h5 class="card-title">'
			+					x.recommendDish[i].name
			+				'</h5>'
			+				'<div class="card-description">'
			+					x.recommendDish[i].description
			+				'</div>'
			+				'<hr>'
			+				'<div class="card-footer">'
			+					'<button id="CMonGa' + '-' + x.menu[i].id + '" type="button" class="btn btn-outline-primary btn-round" data-toggle="modal" data-target="#MonGa' + '-' + x.recommendDish[i].id+'">Chọn món</button>'
			+				'</div>'
			+			'</div>'
			+		'</div>'
			+	'</div>'
			+	'<div class="col-md-1"></div></div><br>'
			);
		}
	});
}

function ChooseDishClick(id){
	//document.getElementById(id).click();
	
		var shoppingCart = $('.shopping-cart-plus-product');
		var imgProduct = $('#'+id).parent().parent().parent().find("img").eq(0);
		var imgProductID = $('#'+id).parent().parent().parent().parent().parent().attr('id')
		console.log(imgProductID);
		if (imgProduct) {
			var imgProductClone = imgProduct.clone()
				.offset({
					top: imgProduct.offset().top,
					left: imgProduct.offset().left
				})
				.css({
					'opacity': '0.5',
					'position': 'absolute',
					'height': 'auto',
					'width': '255px',
					'z-index': '1031'
				})
				.appendTo($('body'))
				.animate({
					'top': shoppingCart.offset().top + 13,
					'left': shoppingCart.offset().left + 15,
					'width': 40,
					'height': 'auto'
				}, 1000, 'easeInOutExpo');
	
			setTimeout(function () {
				shoppingCart.animate({ zoom: "140%" }, 300);
				shoppingCart.animate({ zoom: "100%" }, 300);
			}, 1000);
	
			imgProductClone.animate({
				'width': 0,
				'height': 0
			}, function () {
				$(this).detach()
			});
			// Add item to cart.
			addToCartDish(imgProductID.split("-")[1]);
		}
}

function addToCartDish(id){
	data.then(x => {
		for (var i = 0; i < x.menu.length; i++){
			if (x.menu[i].id == id){
				x.cart[0].menu.push(x.menu[i]);
			}
		}
		var len = x.cart[0].menu.length + x.cart[0].product.length;
		console.log(x.cart);
		document.getElementById('cartAmount').innerText = len;
		localStorage.setItem('cartData', JSON.stringify(x));
	});
}

function addToCart(id){
	data.then(x => {
		for (var i = 0; i < x.products.length; i++){
			if (x.products[i].id == id){
				x.cart[0].product.push(x.products[i]);
			}
		}
		var len = x.cart[0].menu.length + x.cart[0].product.length;
		console.log(x.cart);
		document.getElementById('cartAmount').innerText = len;
		localStorage.setItem('cartData', JSON.stringify(x));
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
	$(document).ready(function() {
		$('.add-to-cart').on('click', function () {
			var shoppingCart = $('.shopping-cart-plus-product');
			var imgProduct = $(this).parent().parent().parent().find("img").eq(0);
			var imgProductID = $(this).parent().parent().parent().parent().parent().attr('id')
			if (imgProduct) {
				var imgProductClone = imgProduct.clone()
					.offset({
						top: imgProduct.offset().top,
						left: imgProduct.offset().left
					})
					.css({
						'opacity': '0.5',
						'position': 'absolute',
						'height': 'auto',
						'width': '255px',
						'z-index': '1031'
					})
					.appendTo($('body'))
					.animate({
						'top': shoppingCart.offset().top + 13,
						'left': shoppingCart.offset().left + 15,
						'width': 40,
						'height': 'auto'
					}, 1000, 'easeInOutExpo');
		
				setTimeout(function () {
					shoppingCart.animate({ zoom: "140%" }, 300);
					shoppingCart.animate({ zoom: "100%" }, 300);
				}, 1000);
		
				imgProductClone.animate({
					'width': 0,
					'height': 0
				}, function () {
					$(this).detach()
				});
				// Add item to cart.
				addToCart(imgProductID);
			}
		});
	
		$('.add-to-cart-detail').on('click', function () {
			var shoppingCart = $('.shopping-cart-plus-product');
			var imgProduct = $(this).parent().parent().parent().parent().parent().parent().find("img").eq(0);
			var imgProductID = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().attr('id');
			var splitID = imgProductID.split('-')[1];
			if (imgProduct) {
				var imgProductClone = imgProduct.clone()
				.offset({
					top: imgProduct.offset().top,
					left: imgProduct.offset().left
				})
				.css({
					'opacity': '0.5',
					'position': 'absolute',
					'height': 'auto',
					'width': '461px',
					'z-index': '1051'
				})
				.appendTo($('body'))
				.animate({
					'top': shoppingCart.offset().top + 13,
					'left': shoppingCart.offset().left + 15,
					'width': 40,
					'height': 'auto'
				}, 1000, 'easeInOutExpo');
		
				setTimeout(function () {
					shoppingCart.animate({zoom: "140%"}, 300);
					shoppingCart.animate({zoom: "100%"}, 300);
				}, 1000);
		
		
				imgProductClone.animate({
					'width': 0,
					'height': 0
				}, function () {
					$(this).detach()
				});
				// Add item to cart.
				addToCart(splitID);
			}
		});
	});
});

function load(url){
	$("#websiteContent").load(url);
}
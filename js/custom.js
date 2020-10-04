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
			mainRow.append('<div class="col-md-3"><div class="card card-product card-plain"><div class="card-image">'
				+ '<a href="#" data-toggle="modal" data-target="#detailedDishes">'
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

	$(document).ready(function() {
		$('.add-to-cart').on('click', function () {
			var shoppingCart = $('.shopping-cart-plus-product');
			var imgProduct = $(this).parent().parent().parent().find("img").eq(0);
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
			}
		});
	
		$('.add-to-cart-detail').on('click', function () {
			var shoppingCart = $('.shopping-cart-plus-product');
			var imgProduct = $(this).parent().parent().parent().parent().parent().parent().find("img").eq(0);
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
			}
		});
	});
	
	
}


function loadDingdan(data) {
	var cont_right = document.querySelector(".cont_right");
	
	// var dingdan_nav=document.createElement("div");
	// dingdan_nav.className="dingdan_nav";
	// document.body.appendChild(dingdan_nav);
	// 	
	// 
	// var smallbox=document.createElement("div");
	// smallbox.className="smallbox";
	// document.body.appendChild(smallbox);
	
	
	var dingdan_info = document.createElement("div");
	dingdan_info.className="dingdan_info";
	cont_right.appendChild(dingdan_info);
	
	var dingdan = document.createElement("div");
	dingdan.className = "dingdan";
	dingdan_info.appendChild(dingdan);

	var order_time = document.createElement("div");
	order_time.className = "order_time";
	order_time.innerHTML = tool(data.order_time);
	dingdan_info.appendChild(order_time);

	var shop_img = document.createElement("img");
	shop_img.className = "shop_img";
	shop_img.src = data.shop_img;
	dingdan_info.appendChild(shop_img);

	var food_name = document.createElement("div");
	food_name.className = "food_name";
	food_name.innerHTML = data.food_name;
	dingdan_info.appendChild(food_name);

	var price = document.createElement("div");
	price.className = "price";
	price.innerHTML = "￥"+data.price;
	dingdan_info.appendChild(price);

}

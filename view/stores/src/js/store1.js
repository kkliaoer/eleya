function loadFood1(data) {
	console.log(data);
	// 
	// 	var box = document.createElement("div");
	// 	box.className = "box";
	// 	document.body.appendChild(box);


	// 店铺div
	var top_info = document.createElement("div");
	top_info.className = "top_info";
	document.body.appendChild(top_info);

	// 店铺头像
	var shop_img = document.createElement("img");
	shop_img.src = data[0].shop_img;
	shop_img.className = "shop_img";
	top_info.appendChild(shop_img);

	// 店铺名字
	var shop_name = document.createElement("div");
	shop_name.innerHTML = data[0].shop_name;
	shop_name.className = "shop_name";
	top_info.appendChild(shop_name);

	// 起送价
	var qisongjia = document.createElement("div");
	qisongjia.innerHTML = "起送价</br>￥" + data[0].qisongjia;
	qisongjia.className = "qisongjia";
	top_info.appendChild(qisongjia);

	// 配送费
	var peisongfei = document.createElement("div");
	if (data[0].peisongfei == 0) {
		peisongfei.innerHTML = "配送费</br>免配送费";
	} else {
		peisongfei.innerHTML = "配送费</br>￥" + data[0].peisongfei;
	}
	peisongfei.className = "peisongfei";
	top_info.appendChild(peisongfei);


	// 配送时间
	var sendtime = document.createElement("div");
	sendtime.innerHTML = "送达时间</br>" + data[0].sendtime + "分钟";
	sendtime.className = "sendtime";
	top_info.appendChild(sendtime);



	var smallbox = document.createElement("div")
	smallbox.className = "smallbox";
	document.body.appendChild(smallbox);



	for (var i = 0; i < data.length; i++) {

		// var food_img_div = document.createElement("div");
		// food_img_div.className = "food_img_div";
		// // food_img.src=data[i].food_img;
		// smallbox.appendChild(food_img_div);

		// 美食分类栏
		// var pro_class = document.createElement("div");
		// pro_class.className = "pro_class";
		// box.appendChild(pro_class);

		// for(var j=0;j<data)
		var content = document.createElement("div");
		content.className = "content";
		smallbox.appendChild(content);

		var food_img = document.createElement("img");
		food_img.className = "food_img";
		food_img.src = data[i].food_img;
		content.appendChild(food_img);

		var food_name = document.createElement("p");
		food_name.className = "food_name";
		food_name.innerHTML = data[i].food_name;
		content.appendChild(food_name);


		var price = document.createElement("p");
		price.className = "price";
		price.innerHTML = "￥"+data[i].price;
		content.appendChild(price);

		var food_pingfen = document.createElement("p");
		food_pingfen.className = "food_pingfen";
		food_pingfen.innerHTML = "评分："+data[i].food_pingfen;
		content.appendChild(food_pingfen);

		var food_sold = document.createElement("p");
		food_sold.className = "food_sold";
		food_sold.innerHTML = data[i].food_sold;
		content.appendChild(food_sold);

		var jieshao = document.createElement("p");
		jieshao.className = "jieshao";
		jieshao.innerHTML = data[i].jieshao;
		content.appendChild(jieshao);

		var button = document.createElement("button");
		button.className = "button";
		button.innerHTML="加入购物车";
		content.appendChild(button);
	}
}

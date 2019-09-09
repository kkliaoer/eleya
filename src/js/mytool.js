function loadAll(data) {
	console.log(data);

	var box = document.createElement("div");
	box.className = "box";
	document.body.appendChild(box);

	for (var i = 0; i < data.length; i++) {

		// 店铺div
		var shop_info = document.createElement("a");
		shop_info.className = "shop_info";
		shop_info.href = "view/stores/store"+i+".html";
		box.appendChild(shop_info);

		// 店铺头像

		var shop_img = document.createElement("img");
		shop_img.src = data[i].shop_img;
		shop_img.className = "shop_img";
		// document.shop_info.appendChild(shop_img);

		// 配送时间
		var sendtime = document.createElement("span");
		sendtime.innerHTML = data[i].sendtime + "分钟";
		sendtime.className = "sendtime";
		// document.shop_info.appendChild(sendtime);


		var shop_content = document.createElement("div");
		shop_content.className = "stores_content";
		shop_info.appendChild(shop_content);

		// 店铺名字
		var shop_name = document.createElement("div");
		shop_name.innerHTML = data[i].shop_name;
		shop_name.className = "shop_name";
		// document.shop_info.appendChild(shop_name);

		// 销量
		var sold = document.createElement("div");
		sold.innerHTML = "月限量 " + data[i].sold;
		sold.className = "sold";
		// document.shop_info.appendChild(sold);

		// 店铺备注
		// var beizhu = document.createElement("p");
		// beizhu.innerHTML = "备注"+data[i].beizhu;
		// beizhu.className="beizhu";
		// document.shop_info.appendChild(beizhu);

		// 配送费
		var peisongfei = document.createElement("div");
		if (data[i].peisongfei == 0) {
			peisongfei.innerHTML = "免配送费";
		} else {
			peisongfei.innerHTML = "配送费￥" + data[i].peisongfei;
		}
		peisongfei.className = "peisongfei";
		// document.shop_info.appendChild(peisongfei);

		// 起送价
		var qisongjia = document.createElement("div");
		qisongjia.innerHTML = "起送价￥" + data[i].qisongjia;
		qisongjia.className = "qisongjia";
		// document.shop_info.appendChild(qisongjia);



		shop_info.appendChild(shop_img);
		shop_info.appendChild(sendtime);
		shop_content.appendChild(shop_name);
		shop_content.appendChild(sold);
		// shop_content.appendChild(beizhu);
		shop_content.appendChild(peisongfei);
		shop_content.appendChild(qisongjia);


	}
}

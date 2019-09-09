function tool(str) {
	var order_time = new Date(str);
	var nowdt = new Date();
	var absTime = nowdt - order_time;

	if (absTime > 0 && absTime < 1000 * 60 * 60 * 24 * 30 * 3) {
		return order_time.getYear() + 1900 + "年" + (order_time.getMonth() + 1) + "月" + order_time.getDate() + "日";
	}
}

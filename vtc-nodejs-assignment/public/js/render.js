﻿var citis = document.getElementById('city');
var districts = document.getElementById('district');
var wards = document.getElementById('ward');
//console.log(citis, district, ward);
var RenderController = function () {
	this.initialize = function () {
		loadData();
		//registerEvents();
	};

	function registerEvents() {}

	function loadData() {
		$.ajax({
			type: 'Get',
			url: '/json/data.json',
			dataType: 'json',
			success: function (data) {
				//console.log(data);
				renderCity(data);
			},
			error: function () {
				alert('json not found');
			},
		});
	}
	function renderCity(data) {
		for (const x of data) {
			citis.options[citis.options.length] = new Option(x.Name, x.Id);
		}

		// xứ lý khi thay đổi tỉnh thành thì sẽ hiển thị ra quận huyện thuộc tỉnh thành đó
		citis.onchange = function () {
			district.length = 1;
			ward.length = 1;
			if (this.value != '') {
				const result = data.filter((n) => n.Id === this.value);

				for (const k of result[0].Districts) {
					district.options[district.options.length] = new Option(k.Name, k.Id);
				}
			}
		};

		// xứ lý khi thay đổi quận huyện thì sẽ hiển thị ra phường xã thuộc quận huyện đó
		district.onchange = function () {
			ward.length = 1;
			const dataCity = data.filter((n) => n.Id === citis.value);
			if (this.value != '') {
				const dataWards = dataCity[0].Districts.filter((n) => n.Id === this.value)[0]
					.Wards;

				for (const w of dataWards) {
					wards.options[wards.options.length] = new Option(w.Name, w.Id);
				}
			}
		};
	}
};

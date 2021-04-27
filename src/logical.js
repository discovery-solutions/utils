export function validateEmail(email) {
	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export function validateCPF(cpf) {
	if (cpf.length < 14) return false;

	cpf = cpf.replace(/\D/g, "");

	if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;

	let res = true;

	[9, 10].forEach(function (j) {
		let soma = 0,
			r;

		cpf.split(/(?=)/)
			.splice(0, j)
			.forEach(function (e, i) {
				soma += parseInt(e) * (j + 2 - (i + 1));
			});

		r = soma % 11;
		r = r < 2 ? 0 : 11 - r;

		if (r != cpf.substring(j, j + 1)) res = false;
	});

	return res;
}

export function validatePhone(phone) {
	const phoneRegex = new RegExp("^\\([0-9]{2}\\)(([0-9]{4}-[0-9]{4})|([0-9]{5}-[0-9]{4}))$");
	return phoneRegex.test(phone);
}

export function isFunction(fn) {
	return typeof fn === "function";
}

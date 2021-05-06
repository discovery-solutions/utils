import sha512 from "js-sha512";

export function SHA512(value) {
	return sha512(value);
}

export function getOS() {
	try {
		if (typeof navigator.product === "string" && navigator.product.toLowerCase().search("react") > -1) {
            const lib = "react-native"; // eslint-ignore-next-line
			return require(lib).Platform.OS === "ios" ? "iOS" : "Android";
		}

		const { userAgent } = window.navigator;

		if (userAgent.toLowerCase().search("win") > -1)
			return "Windows";

		if (userAgent.toLowerCase().search("x11") > -1)
			return "Unix";

		if (userAgent.toLowerCase().search("mac") > -1)
			return "MacOS";

		if (userAgent.toLowerCase().search("linux") > -1)
			return "Linux";

		return userAgent;
	} catch (e1) {
		return "Electron";
	}
}

export function searchInto(string1, string2) {
	try {
		return (
			string1.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().search(
				string2.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
			) > -1
		);
	} catch (e) {
		return false;
	}
}

export function clearString(text, extra = [], ignore = []) {
	if (typeof text !== "string")
		text += "";

	let newText = "";
	let clearStringFromThese = [".", ",", "/", "\\", "|", "-", "_", "(", ")", " ", ...extra];

	for (let i = 0; i < text.length; i++)
		if (!clearStringFromThese.includes(text[i].toUpperCase()) || ignore.includes(text[i].toUpperCase()))
			newText += text[i];

	return newText;
}

export function mask(text, mask, extra = [], ignore = []) {
	let newText = "";
	text = clearString(text + "", extra, ignore);

	let j = 0;
	for (let i = 0; i < text.length; i++) {
		if (i <= mask.length - 1) {
			if (mask[j] !== "#") {
				newText += mask[j];
				j++;
				newText += text[i];
			} else {
				newText += text[i];
			}
			j++;
		}
	}

	return newText.slice(0, mask.length);
}

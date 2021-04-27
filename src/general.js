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

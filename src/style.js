export function capitalize(s) {
	if (typeof s !== "string")
		return "";

	return s.charAt(0).toUpperCase() + s.slice(1)
}

export function elevation(value, string = true, color = "#000") {
	if (string) {
		return `
            elevation: ${value};
            shadow-color: ${color};
            shadow-opacity: ${0.015 * value + 0.18};
            shadow-radius: ${0.54 * value}px;
            shadow-offset: {
                height: ${0.6 * value}px;
            };
        `;
	}

	return {
		elevation: value,
		shadowColor: color,
		shadowOpacity: 0.0015 * value + 0.18,
		shadowRadius: 0.54 * value,
		shadowOffset: {
			height: 0.6 * value,
		},
	};
}

// * * * * * upgradeTheme * * * * *
class Color extends String {
	opacity(o = 1) {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.valueOf());
		const r = parseInt(result[1], 16);
		const g = parseInt(result[2], 16);
		const b = parseInt(result[3], 16);

		return `rgba(${r}, ${g}, ${b}, ${o})`;
	};
}

export function upgradeTheme(theme) {
	for (let color in theme)
		if (typeof theme[color] === "string")
			theme[color] = new Color(theme[color]);

	return theme;
}
// * * * * * upgradeTheme * * * * *

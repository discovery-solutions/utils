

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

export function toPascalCase(text: string): string {
	return text.replace(/\w+/g, (w) => {
		return w[0] ? w[0].toUpperCase() + w.slice(1).toLowerCase() : ""
	})
}

export function hslToHex(hsl: string): string {
	const hslNumbers = hsl
		.replace(/(\s|hsl\(|%|\))/g, "")
		.split(",")
		.map((value) => Number(value))

	const [h, s] = hslNumbers
	let [, , l] = hslNumbers

	if (!(h && s && l)) return "#000000"

	l /= 100
	const a = (s * Math.min(l, 1 - l)) / 100
	const f = (n: number) => {
		const k = (n + h / 30) % 12
		const color = l ? l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1) : 0
		return Math.round(255 * color)
			.toString(16)
			.padStart(2, "0")
	}
	return `#${f(0)}${f(8)}${f(4)}`
}

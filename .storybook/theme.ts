import { create } from "@storybook/theming/create"

export default create({
	base: "dark",
	// Typography
	fontBase: "'DM Sans', sans-serif",
	fontCode: "'IBM Plex Mono', monospace",

	/* 	brandTitle: "My custom Storybook",
	brandUrl: "https://example.com",
	brandImage: "https://storybook.js.org/images/placeholders/350x150.png",
	brandTarget: "_blank", */

	//
	colorPrimary: "hsl(245, 37%, 68%)",
	colorSecondary: "hsl(79, 58%, 81%)",

	// UI
	appBg: "hsl(206, 14%, 22%)",
	appContentBg: "hsl(206, 14%, 22%)",
	appBorderColor: "hsl(245, 37%, 68%, 0.3)",
	appBorderRadius: 8,

	// Text colors
	textColor: "hsl(245, 37%, 68%)",
	textInverseColor: "hsl(79, 58%, 81%)",
	textMutedColor: "hsl(31, 100%, 87%)",

	// Toolbar default and active colors
	barTextColor: "hsl(31, 100%, 87%)",
	barHoverColor: "hsl(245, 37%, 68%)",
	barSelectedColor: "hsl(79, 58%, 81%)",
	barBg: "hsl(206, 14%, 22%)",

	// Form colors
	buttonBg: "hsl(206, 14%, 22%)",
	buttonBorder: "hsl(31, 100%, 87%, 0.3)",
	booleanBg: "hsl(206, 14%, 22%)",
	booleanSelectedBg: "hsl(206, 14%, 32%)",
	inputBg: "hsl(206, 14%, 22%)",
	inputBorder: "hsl(31, 100%, 87%, 0.25)",
	inputTextColor: "hsl(31, 100%, 87%)",
	inputBorderRadius: 8,
})

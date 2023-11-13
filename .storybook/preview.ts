import type { Preview } from "@storybook/react"
import { renderToStaticMarkup } from "react-dom/server"
import xmlFormat from "xml-formatter"

import theme from "./theme"
import "./style.scss"

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		docs: {
			theme,
			toc: true,
			source: {
				transform: (_: any, storyContext: any) => {
					return xmlFormat(
						renderToStaticMarkup(
							storyContext.originalStoryFn(storyContext.args)
						),
						{ indentation: "  " }
					)
						.replace(/=""/g, "")
						.replace(/\ssrc=".*"/g, ' src="..." ')
						.replace(/\sstyle=".*"/g, "")
				},
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
			sort: "requiredFirst",
		},
	},
}

export default preview

import type { Preview } from "@storybook/react"
import { renderToStaticMarkup, renderToString } from "react-dom/server"
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
				transform: (source: any, storyContext: any) => {
					return `// react\n${source}\n\n// html\n${xmlFormat(
						renderToStaticMarkup(
							storyContext.originalStoryFn(storyContext.args)
						),
						{ indentation: "  " }
					)
						.replace(/=""/g, "")
						.replace(/\ssrc=".*"/g, ' src="..." ')
						.replace(/\sstyle=".*"/g, "")}`
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

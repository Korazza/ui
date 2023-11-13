import type { StoryObj, Meta } from "@storybook/react"

import { Heading, type HeadingProps } from "@/components/heading"
import { headingSizes } from "@/config"

type HeadingArgs = HeadingProps & { text: string }

const render = ({ text, ...args }: HeadingArgs) => (
	<Heading {...args}>{text}</Heading>
)

const meta = {
	title: "Components/Heading",
	tags: ["autodocs"],
	component: Heading,
	render,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		text: { control: "text", description: "Heading text" },
		size: {
			control: { type: "radio" },
			options: headingSizes,
		},
	},
	args: {
		text: "Heading 1",
		size: "1",
	},
} satisfies Meta<HeadingArgs>

type Story = StoryObj<HeadingArgs>

export default meta

/** Heading 1 */
export const Heading1: Story = {
	args: {
		text: "Heading 1",
		size: "1",
	},
}

/** Heading 2 */
export const Heading2: Story = {
	args: {
		text: "Heading 2",
		size: "2",
	},
}

/** Heading 3 */
export const Heading3: Story = {
	args: {
		text: "Heading 3",
		size: "3",
	},
}

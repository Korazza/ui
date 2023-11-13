import type { StoryObj, Meta } from "@storybook/react"

type AnchorArgs = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
	text: string
}

const render = ({ text, ...args }: AnchorArgs) => <a {...args}>{text}</a>

const meta: Meta<AnchorArgs> = {
	title: "Components/Anchor",
	tags: ["autodocs"],
	render,
	parameters: {
		layout: "centered",
	},
	argTypes: { text: { control: "text", description: "Anchor text" } },
	args: { text: "Link" },
}

type Story = StoryObj<AnchorArgs>

export default meta

export const _Anchor: Story = {}

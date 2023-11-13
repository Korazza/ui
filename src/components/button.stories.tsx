import type { StoryObj, Meta } from "@storybook/react"

import { Button, type ButtonProps } from "@/components/button.js"
import { buttonSizes, buttonVariants } from "@/config"

type ButtonArgs = ButtonProps & { text: string }

const render = ({ text, ...args }: ButtonArgs) => (
	<Button {...args}>{text}</Button>
)

const meta: Meta<ButtonArgs> = {
	title: "Components/Button",
	tags: ["autodocs"],
	component: Button,
	render,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		text: { control: "text", description: "Button text" },
		variant: {
			control: { type: "radio" },
			options: buttonVariants,
		},
		size: {
			control: { type: "select" },
			options: buttonSizes,
		},
	},
	args: {
		text: "Button",
	},
}

type Story = StoryObj<ButtonArgs>

export default meta

/** Primary button variant */
export const Primary: Story = {
	args: {
		variant: "primary",
	},
}

/** Secondary button variant */
export const Secondary: Story = {
	args: {
		variant: "secondary",
	},
}

/** Accent button variant */
export const Accent: Story = {
	args: {
		variant: "accent",
	},
}

/** Ghost button variant */
export const Ghost: Story = {
	args: {
		variant: "ghost",
	},
}

/** Button sm size */
export const Small: Story = {
	args: {
		size: "sm",
	},
}

/** Button md size */
export const Medium: Story = {
	args: {
		size: "md",
	},
}

/** Button lg size */
export const Large: Story = {
	args: {
		size: "lg",
	},
}

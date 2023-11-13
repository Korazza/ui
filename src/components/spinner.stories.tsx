import type { StoryObj, Meta } from "@storybook/react"

import { Spinner, type SpinnerProps } from "@/components/spinner"
import { sizes } from "@/config"

type SpinnerArgs = SpinnerProps

const render = ({ ...args }: SpinnerArgs) => <Spinner {...args} />

const meta: Meta<SpinnerArgs> = {
	title: "Components/Spinner",
	tags: ["autodocs"],
	render,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		size: {
			control: { type: "select" },
			options: sizes,
		},
	},
	args: {},
}

type Story = StoryObj<SpinnerArgs>

export default meta

export const _Spinner: Story = {}

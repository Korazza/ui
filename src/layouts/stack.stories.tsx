import type { StoryObj, Meta } from "@storybook/react"

import { Stack, type StackProps } from "@/layouts/stack"
import { spaces } from "@/config"

type StackArgs = StackProps & { nested: boolean }

const render = ({ nested, ...args }: StackArgs) => (
	<Stack {...args}>
		{[...Array(3).keys()].map((num, index) =>
			!nested || index !== 1 ? (
				<div key={num} className="bg-accent-200 text-base-800 py-xs px-sm">
					{num + 1}
				</div>
			) : (
				<div key={num} className="stack" data-space="xs">
					{[...Array(3).keys()].map((num) => (
						<div
							key={`nested${num}`}
							className="bg-accent-200 text-base-800 py-xs px-sm"
						>
							{num + 1}
						</div>
					))}
				</div>
			)
		)}
	</Stack>
)

const meta = {
	title: "Layouts/Stack",
	tags: ["autodocs"],
	component: Stack,
	render,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		as: { control: "text" },
		space: {
			control: { type: "radio" },
			options: spaces,
		},
		nested: {
			control: "boolean",
			description: "Whether it should have a nested stack",
		},
	},
	args: {
		as: "div",
		space: "md",
		nested: false,
	},
} satisfies Meta<StackArgs>

type Story = StoryObj<StackArgs>

export default meta

/** Space xs */
export const ExtraSmall: Story = {
	args: {
		space: "xs",
	},
}

/** Space sm */
export const Small: Story = {
	args: {
		space: "sm",
	},
}

/** Space md (default) */
export const Medium: Story = {
	args: {
		space: "md",
	},
}

/** Space lg */
export const Large: Story = {
	args: {
		space: "lg",
	},
}

/** Space xl */
export const ExtraLarge: Story = {
	args: {
		space: "xl",
	},
}

/** Stack with a nested stack inside */
export const Nested: Story = {
	args: {
		nested: true,
	},
}

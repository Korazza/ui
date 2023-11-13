import type { StoryObj, Meta } from "@storybook/react"

import { Cluster } from "@/layouts/cluster"
import { Stack } from "@/layouts/stack"
import { toPascalCase } from "@/utils"

type InputArgs = React.InputHTMLAttributes<HTMLInputElement> & {
	label: boolean
}

const render = ({ label, type = "text", ...args }: InputArgs) => (
	<>
		{label ? (
			["checkbox", "radio"].includes(type) ? (
				<Cluster space="xs" className="place-items-center">
					<input
						{...args}
						id={type}
						type={type}
						placeholder={
							["checkbox", "radio"].includes(type)
								? undefined
								: String.fromCharCode(8230)
						}
					/>
					<label htmlFor={type}>{toPascalCase(type).replace("-", " ")}</label>
				</Cluster>
			) : (
				<Stack space="xs">
					<label htmlFor={type}>{toPascalCase(type).replace("-", " ")}</label>
					<input
						{...args}
						id={type}
						type={type}
						placeholder={
							["checkbox", "radio"].includes(type)
								? undefined
								: String.fromCharCode(8230)
						}
					/>
				</Stack>
			)
		) : (
			<input
				{...args}
				type={type}
				placeholder={`${toPascalCase(type)}${String.fromCharCode(8230)}`}
			/>
		)}
	</>
)

const meta = {
	title: "Components/Input",
	tags: ["autodocs"],
	render,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		label: {
			control: "boolean",
			description: "Whether it should have a label",
		},
		type: {
			control: "select",
			description: "Input type",
			options: [
				"checkbox",
				"color",
				"date",
				"datetime-local",
				"email",
				"file",
				"month",
				"number",
				"password",
				"radio",
				"range",
				"search",
				"tel",
				"text",
				"time",
				"url",
				"week",
			],
		},
	},
	args: {
		label: true,
		type: "text",
	},
} satisfies Meta<InputArgs>

type Story = StoryObj<InputArgs>

export default meta

/** Input with label */
export const InputWithLabel: Story = {
	args: {
		label: true,
	},
}

/** Input without label */
export const InputWithoutLabel: Story = {
	args: {
		label: false,
	},
}

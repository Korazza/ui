import type { StoryObj, Meta } from "@storybook/react"

import { Stack } from "@/layouts/stack"
import { toPascalCase } from "@/utils"

type SelectArgs = React.SelectHTMLAttributes<HTMLSelectElement> & {
	label: boolean
}

const render = ({ label, id = "animal", ...args }: SelectArgs) => (
	<>
		{label ? (
			<Stack space="xs">
				<label htmlFor={id}>{toPascalCase(id)}</label>
				<select {...args} id={id}>
					<option hidden selected disabled>
						Select a{/[aeiou]/i.test(id ?? id[0]) && "n"} {id}
					</option>
					<option value="dog">Dog</option>
					<option value="cat">Cat</option>
					<option value="capybara">Capybara</option>
				</select>
			</Stack>
		) : (
			<select {...args} id={id}>
				<option disabled selected>
					Select a{/[aeiou]/i.test(id ?? id[0]) && "n"} {id}
				</option>
				<option value="dog">Dog</option>
				<option value="cat">Cat</option>
				<option value="capybara">Capybara</option>
			</select>
		)}
	</>
)

const meta = {
	title: "Components/Select",
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
	},
	args: { label: true },
} satisfies Meta<SelectArgs>

type Story = StoryObj<SelectArgs>

export default meta

/** Select with label */
export const SelectWithLabel: Story = {
	args: { label: true },
}

/** Select without label */
export const SelectWithoutLabel: Story = {
	args: { label: false },
}

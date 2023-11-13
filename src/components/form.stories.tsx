import type { StoryObj, Meta } from "@storybook/react"

import { Stack } from "@/layouts/stack"
import { Cluster } from "@/layouts/cluster"
import { Button } from "@/components/button"

type FormArgs = React.FormHTMLAttributes<HTMLFormElement>

const render = ({ ...args }: FormArgs) => (
	<Stack as="form" {...args}>
		<Stack space="xs">
			<label htmlFor="email">Email</label>
			<input id="email" type="email" placeholder="&hellip;" />
		</Stack>
		<Stack space="xs">
			<label htmlFor="password">Password</label>
			<input id="password" type="password" placeholder="&hellip;" />
		</Stack>
		<Cluster space="xs" className="place-items-center">
			<input id="remember" type="checkbox" />
			<label htmlFor="remember">Remember me</label>
		</Cluster>
		<Button type="submit">Submit</Button>
	</Stack>
)

const meta = {
	title: "Components/Form",
	tags: ["autodocs"],
	render,
	parameters: {
		layout: "centered",
	},
	argTypes: {},
	args: {},
} satisfies Meta<FormArgs>

type Story = StoryObj<FormArgs>

export default meta

export const _Form: Story = {}

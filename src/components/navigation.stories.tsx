import type { StoryObj, Meta } from "@storybook/react"

import { Navigation, type NavigationProps } from "@/components/navigation"
import { Cluster } from "@/layouts/cluster"

type NavigationArgs = NavigationProps

const links = ["Pricing", "Docs", "Customers"]

const render = ({ ...args }: NavigationArgs) => (
	<Navigation {...args}>
		<Cluster as="ul">
			{links.map((link) => (
				<li key={link}>
					<a>{link}</a>
				</li>
			))}
		</Cluster>
	</Navigation>
)

const meta: Meta<NavigationArgs> = {
	title: "Components/Navigation",
	tags: ["autodocs"],
	component: Navigation,
	render,
	parameters: {
		layout: "centered",
	},
	argTypes: {},
	args: {},
}

type Story = StoryObj<NavigationArgs>

export default meta

export const _Navigation: Story = {}

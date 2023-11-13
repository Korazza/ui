import type { StoryObj, Meta } from "@storybook/react"

import { SiteHeader, type SiteHeaderProps } from "@/components/site-header"
import { Navigation } from "@/components/navigation"
import { Cluster } from "@/layouts/cluster"
import { Stack } from "@/layouts/stack"

type SiteHeaderArgs = SiteHeaderProps

const render = ({ ...args }: SiteHeaderArgs) => (
	<Stack className="bg-base-800 pb-xl shadow-3" space="lg">
		<SiteHeader {...args} className="shadow-1">
			<div className="site-header__inner">
				<div className="text-800 text-accent-200">Logo</div>
				<Navigation>
					<Cluster as="ul">
						<li>
							<a>Pricing</a>
						</li>
						<li>
							<a>Docs</a>
						</li>
						<li>
							<a>Customers</a>
						</li>
					</Cluster>
				</Navigation>
			</div>
		</SiteHeader>
		<section className="px-md">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam
			iste ea, provident incidunt at reiciendis, quo a voluptas vitae
			consequatur nesciunt tenetur? Ipsum assumenda nemo cupiditate. Eaque,
			labore ratione.
		</section>
		<section className="px-md">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam
			iste ea, provident incidunt at reiciendis, quo a voluptas vitae
			consequatur nesciunt tenetur? Ipsum assumenda nemo cupiditate. Eaque,
			labore ratione.
		</section>
		<section className="px-md">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam
			iste ea, provident incidunt at reiciendis, quo a voluptas vitae
			consequatur nesciunt tenetur? Ipsum assumenda nemo cupiditate. Eaque,
			labore ratione.
		</section>
	</Stack>
)

const meta: Meta<SiteHeaderArgs> = {
	title: "Components/SiteHeader",
	tags: ["autodocs"],
	component: SiteHeader,
	render,
	parameters: {
		layout: "centered",
	},
	argTypes: {},
	args: {},
}

type Story = StoryObj<SiteHeaderArgs>

export default meta

export const _SiteHeader: Story = {}

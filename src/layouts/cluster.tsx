import React from "react"
import { spaces } from "@/config"

export interface ClusterProps<T extends React.ElementType = "div"> {
	/** Element rendered */
	as?: T
	/** Space size */
	space?: (typeof spaces)[number]
}

export function Cluster<T extends React.ElementType = "div">({
	className,
	children,
	as,
	space,
	...props
}: ClusterProps<T> &
	Omit<React.ComponentPropsWithoutRef<T>, keyof ClusterProps<T>>) {
	const Component = as || "div"

	return (
		<Component
			className={["cluster", className].join(className ? " | " : "").trim()}
			data-space={space}
			{...props}
		>
			{children}
		</Component>
	)
}

import { spaces } from "@/config"

export interface StackProps<T extends React.ElementType = "div"> {
	/** Element rendered */
	as?: T
	/** Spacing size */
	space?: (typeof spaces)[number]
}

export function Stack<T extends React.ElementType = "div">({
	className,
	children,
	as,
	space,
	...props
}: StackProps<T> &
	Omit<React.ComponentPropsWithoutRef<T>, keyof StackProps<T>>) {
	const Component = as || "div"

	return (
		<Component
			className={["stack", className].join(className ? " | " : "").trim()}
			data-space={space}
			{...props}
		>
			{children}
		</Component>
	)
}

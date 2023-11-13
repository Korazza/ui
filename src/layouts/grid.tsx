import { spaces } from "@/config"

export interface GridProps<T extends React.ElementType = "div"> {
	/** Element rendered */
	as?: T
	/** Space size */
	space?: (typeof spaces)[number]
	/** Min size before wrap */
	min?: string
}

export function Grid<T extends React.ElementType = "div">({
	className,
	children,
	as,
	space,
	min = "250px",
	...props
}: GridProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof GridProps<T>>) {
	const Component = as || "div"

	return (
		<Component
			className={["grid", className].join(className ? " | " : "").trim()}
			data-space={space}
			style={{
				gridTemplateColumns: `repeat(auto-fill, minmax(min(${min}, 100%), 1fr))`,
			}}
			{...props}
		>
			{children}
		</Component>
	)
}

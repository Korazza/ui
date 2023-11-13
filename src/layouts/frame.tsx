import { aspectRatios } from "@/config"

export interface FrameProps<T extends React.ElementType = "div"> {
	/** Element rendered */
	as?: T
	/** Media aspect ratio */
	aspectRatio?: (typeof aspectRatios)[number]
}

export function Frame<T extends React.ElementType = "div">({
	className,
	children,
	as,
	aspectRatio = "16:9",
	...props
}: FrameProps<T> &
	Omit<React.ComponentPropsWithoutRef<T>, keyof FrameProps<T>>) {
	const Component = as || "div"

	return (
		<Component
			className={["frame", className].join(className ? " | " : "").trim()}
			data-aspect-ratio={aspectRatio}
			{...props}
		>
			{children}
		</Component>
	)
}

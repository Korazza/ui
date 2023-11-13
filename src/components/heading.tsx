import { headingSizes } from "@/config"

export interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Heading size */
	size: (typeof headingSizes)[number]
}

/** Heading component */
export function Heading({ className, children, size, ...props }: HeadingProps) {
	return (
		<div
			className={[`heading-${size}`, className]
				.join(className ? " | " : "")
				.trim()}
			{...props}
		>
			{children}
		</div>
	)
}

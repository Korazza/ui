import { buttonSizes, buttonVariants } from "@/config"

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/** Button variant */
	variant?: (typeof buttonVariants)[number]

	/** Button size */
	size?: (typeof buttonSizes)[number]
}

/** Button component */
export function Button({
	className,
	children,
	size,
	variant,
	...props
}: ButtonProps) {
	return (
		<button
			className={["button", className].join(className ? " | " : "").trim()}
			data-variant={variant}
			data-size={size}
			{...props}
		>
			{children}
		</button>
	)
}

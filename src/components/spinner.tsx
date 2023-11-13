import { sizes } from "@/config"

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Spinner size */
	size?: (typeof sizes)[number]
}

/** Spinner component */
export function Spinner({ className, size, ...props }: SpinnerProps) {
	return (
		<div
			className={["spinner", className].join(className ? " | " : "").trim()}
			data-size={size}
			{...props}
		/>
	)
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

/** Card component */
export function Card({ className, children, ...props }: CardProps) {
	return (
		<div
			className={["card", className].join(className ? " | " : "").trim()}
			{...props}
		>
			{children}
		</div>
	)
}

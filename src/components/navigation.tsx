export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {}

export function Navigation({ className, children, ...props }: NavigationProps) {
	return (
		<nav
			className={["navigation", className].join(className ? " | " : "").trim()}
			{...props}
		>
			{children}
		</nav>
	)
}

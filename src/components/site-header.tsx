export interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {}

/** SiteHeader component */
export function SiteHeader({ className, children, ...props }: SiteHeaderProps) {
	return (
		<header
			className={["site-header", className].join(className ? " | " : "").trim()}
			{...props}
		>
			{children}
		</header>
	)
}

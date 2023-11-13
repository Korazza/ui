export interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {}

/** SiteFooter component */
export function SiteFooter({ className, children, ...props }: SiteFooterProps) {
	return (
		<footer
			className={["site-footer", className].join(className ? " | " : "").trim()}
			{...props}
		>
			{children}
		</footer>
	)
}

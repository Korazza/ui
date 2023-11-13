import { spaces } from "@/config"
import React, { useEffect, useRef } from "react"

export interface ReelProps<T extends React.ElementType = "div"> {
	/** Element rendered */
	as?: T
	/** Space size */
	space?: (typeof spaces)[number]
}

export function Reel<T extends React.ElementType = "div">({
	className,
	children,
	as,
	space,
	...props
}: ReelProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ReelProps<T>>) {
	const ref = useRef<Element>(null)

	const Component: React.ElementType = as || "div"

	const toggleOverflowClass = (elem: Element) => {
		elem.classList.toggle("overflowing", elem.scrollWidth > elem.clientWidth)
	}

	useEffect(() => {
		if (!ref.current) return

		const resizeObserver = new ResizeObserver((entries) => {
			if (!entries[0]) return
			toggleOverflowClass(entries[0].target)
		})
		const mutationObserver = new MutationObserver((entries) => {
			if (!entries[0]) return
			console.log(entries[0].target)
			toggleOverflowClass(entries[0].target as Element)
		})

		resizeObserver.observe(ref.current)
		mutationObserver.observe(ref.current, { childList: true })

		return () => {
			resizeObserver.disconnect()
			mutationObserver.disconnect()
		}
	}, [])

	return (
		<Component
			ref={ref}
			className={["reel", className].join(className ? " | " : "").trim()}
			data-space={space}
			{...props}
		>
			{children}
		</Component>
	)
}

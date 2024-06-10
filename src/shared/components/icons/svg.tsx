export const ScaleIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
		<path
			d="M0.555664 8.33269V11.4436M0.555664 11.4436H3.66658M0.555664 11.4436L4.44416 7.55511M11.4442 3.66719V0.556274M11.4442 0.556274H8.33325M11.4442 0.556274L7.55566 4.44477"
			stroke="#7000FF"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
)
export const MenuPartnersIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path
			d="M5.57715 5.63799L8.00015 3.21499L10.4231 5.63799M8.00015 8.86199V3.22199M13.5771 6.28699L16.0001 8.70999L18.4231 6.28699M16.0001 3.06299V8.70299M12.0001 12V21.332M6.66715 12H17.3341V21.332H6.66715V12Z"
			stroke="currentColor"
			stroke-width="1.2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
)

export const ArrowIcon = ({
	direction,
	width,
	height
}: {
	direction: "top" | "right" | "bottom" | "left"
	width?: number
	height?: number
}) => {
	let rotateDeg

	switch (direction) {
		case "left":
			rotateDeg = 0
			break

		case "right":
			rotateDeg = 180
			break

		case "top":
			rotateDeg = 90
			break

		case "bottom":
			rotateDeg = 270
			break

		default:
			rotateDeg = 0
	}

	return (
		<svg
			style={{ transform: `rotate(${rotateDeg}deg)` }}
			width={width || "24"}
			height={height || "24"}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M7.29289 12.3537L13.5858 18.6466C13.9763 19.0371 14.6095 19.0371 15 18.6466C15.3905 18.256 15.3905 17.6229 15 17.2323L9.41421 11.6466L15 6.06077C15.3905 5.67025 15.3905 5.03708 15 4.64656C14.6095 4.25604 13.9763 4.25603 13.5858 4.64656L7.29289 10.9395C6.90237 11.33 6.90237 11.9631 7.29289 12.3537Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export const XIcon = (props: any) => (
	<svg width={props.width || "14"} height={props.height || "14"} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M0.889983 11.6343C0.506081 12.0182 0.498246 12.6999 0.897818 13.0994C1.30522 13.499 1.98685 13.4912 2.36291 13.1151L7.00108 8.47694L11.6314 13.1073C12.0231 13.499 12.6969 13.499 13.0965 13.0994C13.4961 12.692 13.4961 12.0261 13.1043 11.6343L8.47401 7.00401L13.1043 2.36586C13.4961 1.97412 13.5039 1.30033 13.0965 0.900763C12.6969 0.501191 12.0231 0.501191 11.6314 0.892928L7.00108 5.52325L2.36291 0.892928C1.98685 0.509026 1.29739 0.493357 0.897818 0.900763C0.498246 1.30033 0.506081 1.98979 0.889983 2.36586L5.52031 7.00401L0.889983 11.6343Z"
			fill={props.color || "#999BA6"}
		/>
	</svg>
)

export const UzbFlagIcon = () => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="#000" xmlns="http://www.w3.org/2000/svg" class="ui-icon ">
		<mask id="mask0_9302_12006" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
			<path
				d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
				fill="#F4F5F5"
			></path>
		</mask>
		<g mask="url(#mask0_9302_12006)">
			<rect width="20" height="20" fill="#0099B5"></rect>
			<rect y="13" width="20" height="7" fill="#1EB53A"></rect>
			<rect y="13" width="20" height="1" fill="#CE1126"></rect>
			<rect y="6" width="20" height="1" fill="#CE1126"></rect>
			<rect y="6.5" width="20" height="7" fill="white"></rect>
		</g>
	</svg>
)

export const RusFlagIcon = () => (
	<svg width="20" height="20" viewBox="0 0 20 21" fill="#000" xmlns="http://www.w3.org/2000/svg" class="ui-icon ">
		<mask id="mask0_9302_3025" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
			<path
				d="M10 20.5C15.5228 20.5 20 16.0228 20 10.5C20 4.97715 15.5228 0.5 10 0.5C4.47715 0.5 0 4.97715 0 10.5C0 16.0228 4.47715 20.5 10 20.5Z"
				fill="#F4F5F5"
			></path>
		</mask>
		<g mask="url(#mask0_9302_3025)">
			<rect y="0.5" width="20" height="20" fill="white"></rect>
			<rect y="13.5" width="20" height="7" fill="#E63838"></rect>
			<rect y="7" width="20" height="7" fill="#3131C4"></rect>
		</g>
	</svg>
)

export const ArrowLeft = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M15.2152 18.4299L8.78516 11.9999L15.2152 5.56995"
			stroke="currentColor"
			stroke-width="0.7"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
)

export const ArrowRight = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M9.50391 5.56995L15.9339 11.9999L9.50391 18.4299"
			stroke="currentColor"
			stroke-width="0.7"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
)

export const MediaContentIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
		<path
			d="M3.55713 18.2867C5.51713 17.7787 7.5718 17.5094 9.69046 17.5094C16.9771 17.5094 23.5171 20.704 27.9865 25.768M24.4425 28.4427H7.55713C5.3478 28.4427 3.55713 26.652 3.55713 24.4427V7.55737C3.55713 5.34804 5.3478 3.55737 7.55713 3.55737H24.4425C26.6518 3.55737 28.4425 5.34804 28.4425 7.55737V24.4427C28.4425 26.652 26.6518 28.4427 24.4425 28.4427ZM24.1558 11.612C24.1558 13.576 22.5637 15.168 20.5998 15.168C18.6359 15.168 17.0438 13.576 17.0438 11.612C17.0438 9.64811 18.6359 8.05604 20.5998 8.05604C22.5637 8.05604 24.1558 9.64811 24.1558 11.612Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
)

export const MediaContentIcon2 = () => (
	<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M5.78064 29.7158C8.96564 28.8903 12.3045 28.4527 15.7473 28.4527C27.5881 28.4527 38.2156 33.644 45.4783 41.873M39.7193 46.2193H12.2806C8.69047 46.2193 5.78064 43.3095 5.78064 39.7193V12.2807C5.78064 8.6905 8.69047 5.78067 12.2806 5.78067H39.7193C43.3095 5.78067 46.2193 8.6905 46.2193 12.2807V39.7193C46.2193 43.3095 43.3095 46.2193 39.7193 46.2193ZM39.2535 18.8695C39.2535 22.0609 36.6664 24.648 33.475 24.648C30.2836 24.648 27.6965 22.0609 27.6965 18.8695C27.6965 15.6781 30.2836 13.091 33.475 13.091C36.6664 13.091 39.2535 15.6781 39.2535 18.8695Z"
			stroke="#CCCCCC"
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
)

export const ZoomInIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path
			d="M5.70737 5H7.32772L11.0351 14.0351H9.75177L8.93511 12.0474H4.09998L3.28332 14.0351H2L5.70737 5ZM8.48141 10.9632L6.54995 6.09712H6.48514L4.54071 10.9632H8.48141Z"
			fill="black"
		/>
		<path
			d="M14.2356 7.33398L14.2359 9.69995M14.2359 9.69995L14.2362 12.0656M14.2359 9.69995L11.8701 9.69979M14.2359 9.69995L16.6017 9.7001"
			stroke="#1E1E1E"
			stroke-width="1.4"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
)

export const ZoomOutIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path
			d="M5.5014 6H7.03174L10.5331 14.5331H9.32112L8.54983 12.6559H3.98331L3.21202 14.5331H2L5.5014 6ZM8.12134 11.6319L6.29718 7.03617H6.23596L4.39956 11.6319H8.12134Z"
			fill="currentColor"
		/>
		<path
			d="M12.21 10.4375L16.6787 10.4378"
			stroke="currentColor"
			stroke-width="1.4"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
)

export const ToolbarHomeIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path
			d="M15.556 9.98096V14.3443C15.556 15.7251 14.4368 16.8443 13.056 16.8443H6.80599C5.42516 16.8443 4.30599 15.7251 4.30599 14.3443V9.98096M2.22266 8.70846L10.0002 3.1543L17.7777 8.70846"
			stroke="currentColor"
			stroke-width="1.4"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
)

export const ToolbarLeftIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path
			d="M12.6796 15.3592L7.32129 10.0009L12.6796 4.64258"
			stroke="currentColor"
			stroke-width="1.4"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
)

export const ToolbarRightIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path
			d="M7.91992 4.64258L13.2783 10.0009L7.91992 15.3592"
			stroke="currentColor"
			stroke-width="1.4"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
)

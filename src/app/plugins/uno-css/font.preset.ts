import { definePreset } from "unocss"

export default definePreset(() => ({
	name: "font-size",
	rules: [
		["h40", { "font-size": "40px", "line-height": "48px", "font-weight": 700 }],
		["h32", { "font-size": "32px", "line-height": "40px", "font-weight": 700 }],
		["h26", { "font-size": "26px", "line-height": "40px", "font-weight": 700 }],
		["h24", { "font-size": "24px", "line-height": "28px", "font-weight": 700 }],
		["h20", { "font-size": "20px", "line-height": "24px", "font-weight": 700 }],
		["h16", { "font-size": "16px", "line-height": "20px", "font-weight": 700 }],
		["h14", { "font-size": "14px", "line-height": "20px", "font-weight": 700 }],
		["h12", { "font-size": "12px", "line-height": "16px", "font-weight": 700 }],
		["h10", { "font-size": "10px", "line-height": "13px", "font-weight": 700 }],
		["s24", { "font-size": "24px", "line-height": "33.6px", "font-weight": 600 }],
		["s20", { "font-size": "20px", "line-height": "28px", "font-weight": 600 }],
		["s16", { "font-size": "16px", "line-height": "22.4px", "font-weight": 600 }],
		["s14", { "font-size": "14px", "line-height": "19.6px", "font-weight": 600 }],
		["s12", { "font-size": "12px", "line-height": "16.8px", "font-weight": 600 }],
		["s10", { "font-size": "10px", "line-height": "14px", "font-weight": 600 }],
		["t20", { "font-size": "20px", "line-height": "32px", "font-wight": 500 }],
		["t16", { "font-size": "16px", "line-height": "25.6px", "font-wight": 500 }],
		["t14", { "font-size": "14px", "line-height": "22.4px", "font-wight": 500 }],
		["t12", { "font-size": "12px", "line-height": "19.2px", "font-wight": 500 }],
		["t10", { "font-size": "10px", "line-height": "16px", "font-wight": 500 }]
	]
}))

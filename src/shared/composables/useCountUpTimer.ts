import { watch, ref } from "vue"

interface ITime {
	min: number
	sec: number
	interval: ReturnType<typeof setInterval> | null
}

export default function useCountUpTimer() {
	const time = ref<ITime>({
		min: 0,
		sec: 0,
		interval: null
	})

	watch(
		() => time.value.sec,
		val => {
			if (val > 59) {
				time.value.min++
				time.value.sec = 0
			}
		}
	)

	const onStartCounting = () => {
		time.value.interval = setInterval(() => {
			time.value.sec++
		}, 1000)
	}

	const onStopCounting = () => {
		time.value.sec = 0
		time.value.min = 0
		clearInterval(time.value.interval!)
	}

	return { time, onStartCounting, onStopCounting }
}

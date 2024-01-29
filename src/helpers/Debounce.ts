export const debounce = <F extends (...args: any[]) => void>(func: F, time: number) => {
	let timer: number | undefined;
	return function (...args: Parameters<F>){
		clearTimeout(timer)
		timer = setTimeout(() => {
			func(...args)
		}, time) as unknown as number;
	}
}
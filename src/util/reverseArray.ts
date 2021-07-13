export function reverseArray<T>(array: ReadonlyArray<T>): Array<T> {
	const size = array.size();
	const result = new Array<T>(size);
	for (let i = 0; i < size; i++) {
		result[i] = array[size - 1 - i];
	}
	return result;
}

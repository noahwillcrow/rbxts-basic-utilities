export interface ReadonlyFiniteIterator<T> {
	getNextValue(): T | undefined;

	isEmpty(): boolean;

	size(): number;
}

export interface ReadonlyDoublyLinkedList<T> {
	getHeadValue(): T | undefined;

	getTailValue(): T | undefined;

	isEmpty(): boolean;

	size(): number;
}

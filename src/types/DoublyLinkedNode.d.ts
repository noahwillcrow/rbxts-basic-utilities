export type DoublyLinkedNode<T> = {
	previousNode?: DoublyLinkedNode<T>;
	nextNode?: DoublyLinkedNode<T>;
	value: T;
}

export type ReadonlyDoublyLinkedNode<T> = {
	readonly previousNode?: ReadonlyDoublyLinkedNode<T>;
	readonly nextNode?: ReadonlyDoublyLinkedNode<T>;
	readonly value: T;
}

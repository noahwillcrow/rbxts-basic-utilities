export type DoublyLinkedNode<T> = {
	previousNode?: DoublyLinkedNode<T>;
	nextNode?: DoublyLinkedNode<T>;
	value: T;
}

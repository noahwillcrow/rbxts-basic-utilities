import { DoublyLinkedList } from "./DoublyLinkedList";
import { ReadonlyFiniteIterator } from "../interfaces/ReadonlyFiniteIterator";
import { reverseArray } from "../util/reverseArray";

export class Stack<T> implements ReadonlyFiniteIterator<T> {
	private readonly linkedList: DoublyLinkedList<T>;

	public constructor(values?: ReadonlyArray<T>) {
		this.linkedList = new DoublyLinkedList(values !== undefined ? reverseArray(values) : undefined);
	}

	public getNextValue() {
		return this.linkedList.getHeadValue();
	}

	public isEmpty() {
		return this.linkedList.isEmpty();
	}

	public popNextValue() {
		return this.linkedList.popHeadValue();
	}

	public push(value: T) {
		this.linkedList.pushToHead(value);
	}

	public pushArray(values: ReadonlyArray<T>) {
		const tempLinkedList = new DoublyLinkedList(reverseArray(values));
		this.linkedList.pushListToHead(tempLinkedList);
	}

	public size() {
		return this.linkedList.size();
	}
}

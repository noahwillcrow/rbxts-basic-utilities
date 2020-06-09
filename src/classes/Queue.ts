import { DoublyLinkedList } from "./DoublyLinkedList";
import { ReadonlyFiniteIterator } from "../interfaces/ReadonlyFiniteIterator";

export class Queue<T> implements ReadonlyFiniteIterator<T> {
	private readonly linkedList: DoublyLinkedList<T>;

	public constructor(values?: ReadonlyArray<T>) {
		this.linkedList = new DoublyLinkedList(values);
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
		this.linkedList.pushToTail(value);
	}

	public pushArray(values: ReadonlyArray<T>) {
		const tempLinkedList = new DoublyLinkedList(values);
		this.linkedList.pushListToTail(tempLinkedList);
	}

	public size() {
		return this.linkedList.size();
	}
}

import { DoublyLinkedNode } from "../types/DoublyLinkedNode";
import { ReadonlyDoublyLinkedList } from "../interfaces/ReadonlyDoublyLinkedList";

export class DoublyLinkedList<T> implements ReadonlyDoublyLinkedList<T> {
	private currentSize: number;
	private head?: DoublyLinkedNode<T>;
	private tail?: DoublyLinkedNode<T>;

	public constructor(values?: ReadonlyArray<T>) {
		if (values !== undefined && values.size() > 0) {
			this.head = {
				value: values[0]
			};
			let lastNewNode = this.head;

			for (let i = 1; i < values.size(); i++) {
				const node = {
					previousNode: lastNewNode,
					value: values[i]
				};
				lastNewNode.nextNode = node;
				lastNewNode = node;
			}

			this.currentSize = values.size();
			this.tail = lastNewNode;
		} else {
			this.currentSize = 0;
		}
	}

	public getHeadValue() {
		if (this.head !== undefined) {
			this.currentSize--;
			return this.head.value;
		}
	}

	public getTailValue() {
		if (this.tail !== undefined) {
			this.currentSize--;
			return this.tail.value;
		}
	}

	public isEmpty() {
		return this.head === undefined;
	}

	public popHeadValue() {
		if (this.head !== undefined) {
			const currentHead = this.head;

			if (this.head.nextNode !== undefined) {
				this.head = this.head.nextNode;
			} else {
				this.head = undefined;
				this.tail = undefined;
			}

			this.currentSize--;

			return currentHead.value;
		}
	}

	public popTailValue() {
		if (this.tail !== undefined) {
			const currentTail = this.tail;

			if (this.tail.previousNode !== undefined) {
				this.tail = this.tail.previousNode;
			} else {
				this.head = undefined;
				this.tail = undefined;
			}

			this.currentSize--;

			return currentTail.value;
		}
	}

	public pushToHead(value: T) {
		const node: DoublyLinkedNode<T> = {
			value
		};

		if (this.head !== undefined) {
			node.nextNode = this.head;
			this.head = node;
		} else {
			this.head = node;
			this.tail = node;
		}

		this.currentSize++;
	}

	public pushToTail(value: T) {
		const node: DoublyLinkedNode<T> = {
			value
		};

		if (this.tail !== undefined) {
			node.previousNode = this.tail;
			this.tail = node;
		} else {
			this.head = node;
			this.tail = node;
		}

		this.currentSize++;
	}

	public pushListToHead(otherList: DoublyLinkedList<T>) {
		if (otherList.head === undefined || otherList.tail === undefined) {
			return;
		}

		if (this.head !== undefined) {
			otherList.tail.nextNode = this.head;
			this.head = otherList.head;
		} else {
			this.head = otherList.head;
			this.tail = otherList.tail;
		}

		this.currentSize += otherList.size();
	}

	public pushListToTail(otherList: DoublyLinkedList<T>) {
		if (otherList.head === undefined || otherList.tail === undefined) {
			return;
		}

		if (this.tail !== undefined) {
			otherList.head.previousNode = this.tail;
			this.tail = otherList.tail;
		} else {
			this.head = otherList.head;
			this.tail = otherList.tail;
		}

		this.currentSize += otherList.size();
	}

	public size() {
		return this.currentSize;
	}
}

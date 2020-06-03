import { ReadonlyStrictMap } from "../interfaces/ReadonlyStrictMap";

export class StrictMap<K, V> implements ReadonlyStrictMap<K, V> {
	private map: Map<K, V>;

	public constructor(
		entries?: ReadonlyArray<[K, V]>,
		private readonly getMissingKeyErrorMessage?: (key: K) => string,
	) {
		this.map = new Map<K, V>(entries);
	}

	// Read methods

	public entries() {
		return this.map.entries();
	}

	public forEach(callbackfn: (value: V, key: K, self: this) => void) {
		this.map.forEach((value, key) => callbackfn(value, key, this));
	}

	public has(key: K) {
		return this.map.has(key);
	}

	public isEmpty() {
		return this.map.isEmpty();
	}

	public keys() {
		return this.map.keys();
	}

	public mustGet(key: K) {
		const value = this.map.get(key);
		if (value === undefined) {
			if (this.getMissingKeyErrorMessage !== undefined) {
				throw this.getMissingKeyErrorMessage(key);
			} else {
				throw `Missing value for key: ${key}`;
			}
		}

		return value;
	}

	public size() {
		return this.map.size();
	}

	public toReadonlyMap(): ReadonlyMap<K, V> {
		return this.map;
	}

	public toString() {
		return this.map.toString();
	}

	public values() {
		return this.map.values();
	}

	// Mutation methods

	/**
	 * Deletes all members of the Map
	 */
	public clear() {
		this.map = new Map<K, V>();
	}

	/**
	 * Deletes the given key from the SafeMap.
	 *
	 * @returns A boolean indicating whether or not a value was removed.
	 */
	public delete(key: K) {
		return this.map.delete(key);
	}

	/**
	 * Associates a key with a value which can be accessed later by `SafeMap.mustGet`
	 */
	public set(key: K, value: V) {
		this.map.set(key, value);
	}
}

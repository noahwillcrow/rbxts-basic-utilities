/**
 * A Map wrapper that provides a strict API, allowing gets to be trusted to never return undefined
 */
export interface ReadonlyStrictMap<K, V extends defined> {
	/**
	 * Returns an array of tuples for all members of this SafeMap
	 */
	entries(): Array<[K, V]>;

	/**
	 * Performs the specified action for each (element / pair of elements) in the Map
	 * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each (element / pair of elements) in the array.
	 */
	forEach(callbackfn: (value: V, key: K, self: this) => void): void;

	/**
	 * Returns a boolean for whether the given key exists in the SafeMap
	 */
	has(key: K): boolean;

	/**
	 * Returns true if empty, otherwise false.
	 */
	isEmpty(): boolean;

	/**
	 * Returns an array with all of this SafeMap's keys
	 */
	keys(): Array<K>;

	/**
	 * Returns the value associated with the given key and throws if it does not exist
	 */
	mustGet(key: K): V;

	/**
	 * Returns the number of elements in the SafeMap
	 */
	size(): number;

	/**
	 * Returns a readonly map with the same data.
	 * Useful for networking through RBXScriptSignals.
	 */
	toReadonlyMap(): ReadonlyMap<K, V>;

	/**
	 * Returns a string representation of this data structure.
	 */
	toString(): string;

	/**
	 * Returns an array with all values of this SafeMap
	 */
	values(): Array<V>;
}

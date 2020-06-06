/**
 * Lazy-loads a value and stores that value for the rest of the instance's lifetime
 */
export class Lazy<T> {
	private hasValueBeenLoaded: boolean;
	private value?: T;

	/**
	 * Creates a new lazy-loading instance of the given type
	 * @param loadCallback A callback function that returns type T which is used to populate the value of the instance
	 */
	public constructor(private readonly loadCallback: () => T) {
		this.hasValueBeenLoaded = false;
	}

	/**
	 * Gets the value of the instance - will lazy-load if value has not yet been loaded
	 */
	public getValue(): T {
		if (!this.hasValueBeenLoaded) {
			this.value = this.loadCallback();
			this.hasValueBeenLoaded = true;
		}

		// Needs the `as T` to make TypeScript ignore that
		// `this.value`'s type is `T | undefined` at this point
		// `hasValueBeenLoaded` will control that
		return this.value as T;
	}
}

/**
 * Lazy-loads a value and stores that value for the rest of the instance's lifetime
 */
export class Lazy<T extends defined> {
	private value?: T;

	/**
	 * Creates a new lazy-loading instance of the given type
	 * @param loadCallback A callback function that returns type T which is used to populate the value of the instance
	 */
	public constructor(private readonly loadCallback: () => T) {}

	/**
	 * Gets the value of the instance - will lazy-load if value is currently undefined
	 */
	public getValue(): T {
		if (this.value === undefined) {
			this.value = this.loadCallback();
		}

		return this.value;
	}
}

/**
 * @typedef {{
 *	eTag: string,
 *	size: number,
 *	mimetype: string,
 *	cacheControl: string,
 *	lastModified: string,
 *	contentLength: number,
 *	httpStatusCode: number
 * }} Metadata
 */

/**
 * @typedef {{
 * 	id: string,
 * 	name: string,
 * 	createdAt: Date,
 * 	updatedAt: Date,
 * 	publicUrl: string,
 * 	metadata: Metadata
 * }} File
 */

/**
 * @typedef {File[]} RepositoryProps
 */

class Repository {
	/**
	 * @param {RepositoryProps} props
	 */
	constructor(props) {
		this.files = props;
	};
};

export default Repository;
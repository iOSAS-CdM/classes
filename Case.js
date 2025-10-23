/** @typedef {'open' | 'closed'} CaseStatus */
/** @typedef {'bullying' | 'cheating' | 'disruptive_behavior' | 'fraud' | 'gambling' | 'harassment' | 'improper_uniform' | 'littering' | 'plagiarism' | 'prohibited_items' | 'vandalism' | 'other'} CaseViolation */


/**
 * @typedef {{
 * 	author: string,
 * 	raw: true
 * }} CaseRaw
 */

/**
 * @typedef {{
 * 	attachments: import('./Repository').RepositoryProps[],
 * 	author: import('./Student').Student,
 * 	raw: false
 * }} CaseProcessed
 */

/**
 * @typedef {{
 * 	id: number | string,
 * 	violation: CaseViolation,
 * 	content: string
 * }} BaseCaseProps
 */

/**
 * @typedef {BaseCaseProps & (CaseRaw | CaseProcessed)} CaseProps
 */

class Case {
	/**
	 * @param {CaseProps} props
	 */
	constructor({
		id,
		violation,
		description,
		attachments,
		author,
		raw = false
	}) {
		this.id = id;
		this.violation = violation;
		this.description = description;
		this.attachments = attachments;
		this.author = author;
		this.raw = raw;
	};
};

export default Case;
/** @typedef {'ongoing' | 'resolved' | 'archived'} RecordStatus */
/** @typedef {'minor' | 'major' | 'severe'} RecordSeverity */
/** @typedef {'bullying' | 'cheating' | 'disruptive_behavior' | 'fraud' | 'gambling' | 'harassment' | 'improper_uniform' | 'littering' | 'plagiarism' | 'prohibited_items' | 'vandalism' | 'other'} RecordViolation */

/**
 * @typedef {{
 * 	occurrences: number,
 * 	id: string
 * }} RecordComplainanee
 */

/**
 * @typedef {{
 * 	id: number | string,
 * 	title: string,
 * 	violation: RecordViolation,
 * 	description: string,
 * 	tags: {
 * 		status: RecordStatus,
 * 		severity: RecordSeverity,
 * 		progress: number
 * 	},
 * 	complainants: string[],
 * 	complainees: RecordComplainanee[] | string[],
 * 	date: Date,
 * 	author: string,
 * 	coauthors: string[],
 * 	repository?: string
 * }} RecordProps
 */

class Record {
	/**
	 * @param {RecordProps} props
	 */
	constructor({
		id = Math.floor(Math.random() * 1000000),
		title,
		violation,
		description,
		tags: {
			status,
			severity,
			progress = 0
		},
		complainants = [],
		complainees = [],
		date = new Date(new Date().getFullYear(), new Date().getMonth(), new
			Date().getDate() - (Math.floor(Math.random() * 10) + 1)),
		author,
		coauthors = [],
		repository
	}) {
		// Initialize the record properties
		this.id = id;
		this.title = title;
		this.violation = violation;
		this.description = description;
		this.tags = {
			status,
			severity,
			progress
		};
		this.complainants = complainants;
		this.complainees = complainees;
		this.date = date;
		this.author = author;
		this.coauthors = coauthors;
		this.repository = repository;
	};
};

export default Record;
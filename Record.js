/** @typedef {'ongoing' | 'resolved' | 'dismissed'} RecordStatus */
/** @typedef {'minor' | 'major' | 'severe'} RecordSeverity */
/** @typedef {'bullying' | 'cheating' | 'disruptive_behavior' | 'fraud' | 'gambling' | 'harassment' | 'improper_uniform' | 'littering' | 'plagiarism' | 'prohibited_items' | 'vandalism' | 'other'} RecordViolation */

/**
 * @typedef {{
 * 	occurrences: number,
 * 	id: string,
 * 	student?: import('./Student').Student
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
 * 		progress: 0 | 1 | 2 | 3 | 4 | 5
 * 	},
 * 	date: Date
 * }} BaseRecordProps
 */

/**
 * @typedef {{
 * 	complainants: string[],
 * 	complainees: string[],
 * 	raw: true
 * }} RecordRaw
 */

/**
 * @typedef {{
 * 	complainants: import('./Student').Student[],
 * 	complainees: RecordComplainanee[],
 * 	raw: false
 * }} RecordProcessed
 */

/**
 * @typedef {BaseRecordProps & (RecordRaw | RecordProcessed)} RecordProps
 */

class Record {
	/**
	 * @param {RecordProps} props
	 */
	constructor({
		id,
		title,
		violation,
		description,
		tags,
		date,
		complainants,
		complainees,
		raw = false
	}) {
		this.id = id;
		this.title = title;
		this.violation = violation;
		this.description = description;
		this.tags = tags;
		this.date = new Date(date);
		this.complainants = complainants;
		this.complainees = complainees;
		this.raw = raw;
	};
};

export default Record;
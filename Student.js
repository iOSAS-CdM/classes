/**
 * @typedef {'BSCpE' | 'BSIT'} ICSPrograms
 * @typedef {'BSEd-SCI' | 'BEEd-GEN' | 'BEEd-ECED' | 'BTLEd-ICT' | 'TCP'} ITEPrograms
 * @typedef {'BSBA-HRM' | 'BSE'} IBEPrograms
 */

/**
 * @typedef {{
 * 	name: {
 * 		first: string,
 * 		middle: string,
 * 		last: string
 * 	},
 * 	role: 'student' | 'unverified-student',
 * 	email: string,
 * 	id: string,
 * 	profilePicture?: string,
 * 	status?: 'active' | 'restricted' | 'dismissed',
 * 	organizations?: import('./Organization').OrganizationProps[],
 * 	ongoingCases?: number
 * }} BaseStudentProps
 */

/** @typedef {BaseStudentProps & { institute: 'ics', program: ICSPrograms, year: number }} ICSStudent */
/** @typedef {BaseStudentProps & { institute: 'ite', program: ITEPrograms, year: number }} ITEStudent */
/** @typedef {BaseStudentProps & { institute: 'ibe', program: IBEPrograms, year: number }} IBEStudent */

/** @typedef {ICSStudent | ITEStudent | IBEStudent} StudentProps */

class Student {
	/**
	 * @param {StudentProps} props
	 */
	constructor({
		name,
		role,
		email,
		id,
		institute,
		program,
		year,
		profilePicture = '/Placeholder Image.svg',
		status = 'active',
		organizations = [],
		ongoingCases = 0
	}) {
		this.name = name;
		this.role = role;
		this.email = email;
		this.id = id;
		this.institute = institute;
		this.program = program;
		this.year = year;
		this.profilePicture = profilePicture;
		this.status = status;
		this.organizations = organizations;
		this.ongoingCases = ongoingCases;
	};
};

export default Student;

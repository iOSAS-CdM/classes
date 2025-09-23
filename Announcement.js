/**
 * @typedef {{
 * 	type: 'staff',
 * 	user: import('./Staff').default
 * }} StaffAuthor
 */
/**
 * @typedef {{
 * 	type: 'student',
 * 	user: import('./Student').default
 * }} StudentAuthor
 */

/**
 * @typedef {{
 * 	id: number | string,
 * 	title: string,
 * 	description: string,
 * 	cover: string,
 * 	content: string,
 * 	date: Date,
 * 	authors: (StaffAuthor | StudentAuthor)[],
 * 	dismissed?: Boolean,
 * 	images: HTMLImageElement[]
 * }} AnnouncementProps
 */

class Announcement {
	/**
	 * @param {AnnouncementProps} props
	 */
	constructor({
		id = Math.floor(Math.random() * 1000000),
		title,
		description,
		cover = '/Placeholder Image.svg',
		content = '',
		date = new Date(),
		authors = [],
		dismissed = false
	}) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.cover = cover;
		this.content = content;
		this.date = date;
		this.authors = authors;
		this.dismissed = dismissed;
	};
};

export default Announcement;
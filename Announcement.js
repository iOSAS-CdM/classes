
/**
 * @typedef {{
 * 	id: number | string,
 * 	title: string,
 * 	description: string,
 * 	cover: string,
 * 	content: string,
 * 	date: Date,
 * 	author: import('./Staff').default | import('./Student').default | string,
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
		author = null,
		dismissed = false
	}) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.cover = cover;
		this.content = content;
		this.date = date;
		this.author = author;
		this.dismissed = dismissed;
	};
};

export default Announcement;
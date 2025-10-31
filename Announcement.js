
/**
 * @typedef {{
 * 	id: number | string,
 * 	title: string,
 * 	description: string,
 * 	cover: string,
 * 	content: string,
 * 	date: Date,
 * 	type: 'information' | 'event',
 * 	event_date: Date | null,
 * 	author: import('./Staff').default | import('./Student').default | string,
 * 	images: HTMLImageElement[]
 * 	likes: {
 * 		author: import('./Student').default | string,
 * 		date: Date
 * 	}[],
 * 	comments: {
 * 		id: number | string,
 * 		author: import('./Student').default | string,
 * 		content: string,
 * 		date: Date
 * 	}[]
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
		type = 'information',
		event_date = null,
		author = null,
		dismissed = false
	}) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.cover = cover;
		this.content = content;
		this.date = date;
		this.type = type;
		this.event_date = event_date;
		this.author = author;
		this.dismissed = dismissed;
		this.likes = [];
		this.comments = [];
	};
};

export default Announcement;
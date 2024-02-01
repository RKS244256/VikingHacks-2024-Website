import axios from "axios";


export interface Identity {
	uid: string | null;
	role: string | null;
	status: string | null;
}

export default async function getUserIdentity(): Promise<Identity> {
	console.log('getUserIdentity')
}

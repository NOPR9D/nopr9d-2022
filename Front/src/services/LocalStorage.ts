export class LocalStorage {
	public set(key: string, data: any) {
		localStorage.setItem(key, JSON.stringify(data));
	}

	public get(key: string) {
		return JSON.parse(localStorage.getItem(key) as any);
	}

	public delete(key: string) {
		localStorage.removeItem(key);
	}

	public clear() {
		localStorage.clear();
	}
}

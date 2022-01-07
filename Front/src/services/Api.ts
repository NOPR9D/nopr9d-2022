import axios, { AxiosObservable } from 'axios-observable';
export class Api {
	private url = 'http://localhost:3000';

	public getScenes(): AxiosObservable<any> {
		return axios.get<any>(this.url + '/scenes');
	}

	public getArticles(): AxiosObservable<any> {
		return axios.get<any>(this.url + '/articles/');
	}

	public getArticle(filename: string): AxiosObservable<any> {
		return axios.get<any>(this.url + '/articles/' + filename);
	}

	public getHome(): AxiosObservable<any> {
		return axios.get<any>(this.url + '/home');
	}
}

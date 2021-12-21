import axios, { AxiosObservable } from 'axios-observable';

export class Api {
	private url = 'http://localhost:3000';

	public getScenes(): AxiosObservable<any> {
		return axios.get<any>(this.url + '/scenes');
	}

	public getArticles(): AxiosObservable<any> {
		return axios.get<any>(this.url + '/articles');
	}

	public getArticle(title: string): AxiosObservable<any> {
		return axios.get<any>(this.url + '/article/' + title);
	}

	public getHome(): AxiosObservable<any> {
		return axios.get<any>(this.url + '/home');
	}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let apiUrl = 'https://aulatix.com/api/';
let Url = 'https://aulatix.com/';

@Injectable()
export class UserService {

	constructor(public http: HttpClient) {
		console.log('Hello UserService Provider');
	}
	login(credentials) {
		return new Promise((resolve, reject) => {
			this.http.post(apiUrl+'login', credentials, {headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://www.aulatix.com'}})
			  .subscribe(res => {
				resolve(res)
			  }, (err) => {
				reject(err);
			  });
		});
	}
	portfolioupload(portfolio) {
		return new Promise((resolve, reject) => {
			this.http.post(apiUrl+'portfolio/picture', portfolio, {headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token'),'Access-Control-Allow-Origin': 'https://www.aulatix.com' }}, )
			  .subscribe(res => {
				resolve(res)
			  }, (err) => {
				reject(err);
			  });
		});
	}
	estados() {
		return new Promise((resolve, reject) => {
			this.http.get(Url+'state')
			  .subscribe(res => {
				resolve(res);
			  }, (err) => {
				reject(err);
			  });
		});
	}
	semestres() {
		return new Promise((resolve, reject) => {
			this.http.get(apiUrl+'semester', {headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') }})
			.subscribe(res => {
				resolve(res);
			  }, (err) => {
				reject(err);
			  });
		});
	}
	profileget() {
		return new Promise((resolve, reject) => {
			this.http.get(apiUrl+'users/profile', {headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') }})
			.subscribe(res => {
				resolve(res);
			  }, (err) => {
				reject(err);
			  });
		});
	}
	mysubjects() {
		return new Promise((resolve, reject) => {
			this.http.get(apiUrl+'shop/my-subjects', {headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') }})
			.subscribe(res => {
				resolve(res);
			  }, (err) => {
				reject(err);
			  });
		});
	}
	 materias(num) {
		 console.log(apiUrl+'semester/'+num+'/subjects');
		return new Promise((resolve, reject) => {
			this.http.get(apiUrl+'semester/'+num+'/subjects', {headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') }})
			.subscribe(res => {
				resolve(res);
			  }, (err) => {
				reject(err);
			  });
		});
	}
	contents(num) {
		 console.log(apiUrl+'group/'+num+'/contents');
		return new Promise((resolve, reject) => {
			this.http.get(apiUrl+'group/'+num+'/contents', {headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') }})
			.subscribe(res => {
				resolve(res);
			  }, (err) => {
				reject(err);
			  });
		});
	}
	activities(num) {
		 console.log(apiUrl+'group/'+num+'/activities');
		return new Promise((resolve, reject) => {
			this.http.get(apiUrl+'group/'+num+'/activities', {headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') }})
			.subscribe(res => {
				resolve(res);
			  }, (err) => {
				reject(err);
			  });
		});
	}
	subject() {
		return new Promise((resolve, reject) => {
			this.http.get(apiUrl+'subjects', {headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') }})
			.subscribe(res => {
				resolve(res);
			  }, (err) => {
				reject(err);
			  });
		});
	}
	mygroup() {
		return new Promise((resolve, reject) => {
			this.http.get(apiUrl+'group/my-groups', {headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') }})
			.subscribe(res => {
				resolve(res);
			  }, (err) => {
				reject(err);
			  });
		});
	}
	contentsub(groupid) {
		return new Promise((resolve, reject) => {
			this.http.get(apiUrl+'group/'+groupid+'/contents', {headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('access_token') }})
			.subscribe(res => {
				resolve(res);
			  }, (err) => {
				reject(err);
			  });
		});
	}
}

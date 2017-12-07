import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Injectable()
export class Request {

    private _domain = 'https://app.ticketphone.com.br/webrun/';
    private _rule = '.rule?sys=EVS';

    constructor(private _http: Http) {}

    // CALL REQUEST (POST)
    public call(webservice: string, data?: any, toJson?: boolean) {
        return this._http
                .post(this._domain + webservice + this._rule, this._queryData(data), this._getOptions())
                .timeout(90000)
                .map(response => toJson === false ? response.text() : this._encodeJson(response));
    }

    // UPLOAD REQUEST (POST)
    public upload(webservice: string, data: any) {
        return this._http
                .post(this._domain + webservice + this._rule, this._formData(data))
                .timeout(60000)
                .map(response => this._encodeJson(response));
    }

    // HEADER / OPTIONS
    private _getOptions(file: boolean = false) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        return new RequestOptions({headers: (headers)});
    }

    // REQUEST STANDART DATA FORMAT
    private _queryData(data: any) {
        const str = [];
        for (var d in data) {
            str.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        }
        return str.join('&');
    }

    // REQUEST FILE DATA FORMAT
    private _formData(data: any) {
        const fileData = new FormData();
        for (var d in data) {
            fileData.append(d, data[d]);
        }
        return fileData;
    }

    //  GET FILE EXTENSION
    private _ext(s: string) {
        return s.substr(s.lastIndexOf(".") + 1, s.length);
    }

    // RESPONSE DATA ENCODE JSON
    private _encodeJson = function (data) {
        return JSON.parse(
            data.text()
            .replace(/\n/g, '')
            .replace(/\r/g, '')
            .replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec))
        );
    };
}

import { Injectable }     from '@angular/core';
import { Observable }     from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FeesExpensesClaim}     from '../models/fees-expenses.model';

@Injectable()
export class FeesSubmissionService {
    constructor(private http: Http) {

    }
    private submitFeesClaimUrl = '/api/FeesExpenseClaim'; // URL to web api
  
    submitClaim(feesExpensesClaim: FeesExpensesClaim): Observable<Object> {
        debugger;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.submitFeesClaimUrl, JSON.stringify(feesExpensesClaim), { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);

    }


    private extractData(res: Response) {
        let body = res.json();
        return body.message || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message)
            ? error.message
            : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}


import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { RestResponse} from '../models/rests.models';
import { Observable } from 'rxjs/Observable';
import { Task } from '../models/tasks.models';
import 'rxjs';

@Injectable()
export class TasksRestService {
    
    constructor(
        private http: Http
    ) { }

    public getTasks(){
        return this.http.get('/api/tasks').map(
            response => { return this.processResponse<Task[]>(response) 
            });
    }

     private processResponse<T>(response: Response): T {
        if (response.status === 401) {
            
        }
        if (response.status !== 200) {
            
        }
        const restResponse: RestResponse<T> = response.json();
        if (restResponse.isSuccess) {
            return restResponse.data;
        } else {
            
        }
    }
}



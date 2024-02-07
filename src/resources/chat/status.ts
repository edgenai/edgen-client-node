import * as StatusAPI from 'edgen/resources/status';
import * as Core from 'edgen/core';
import { APIPromise } from 'edgen/core';
import { APIResource } from 'edgen/resource';

export class Status extends APIResource {
    create(): APIPromise<StatusAPI.EdgenStatus> {
        return this._client.get('/chat/completions/status') as APIPromise<StatusAPI.EdgenStatus>;
    }
}

export namespace Status {
    export import Status = StatusAPI.Status;
    export import EdgenStatus = StatusAPI.EdgenStatus;
}

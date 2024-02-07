import * as StatusAPI from 'edgen/resources/status';
import * as Core from 'edgen/core';
import { APIPromise } from 'edgen/core';
import { APIResource } from 'edgen/resource';

export interface EdgenStatus {
    active_model: string;
    download_ongoing: number;
    download_progress: number; 
    last_errors: string[];
}

export namespace Status {
    export import EdgenStatus = StatusAPI.EdgenStatus;
}

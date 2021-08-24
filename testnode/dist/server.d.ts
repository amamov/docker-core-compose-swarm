/// <reference types="node" />
import * as express from 'express';
import * as http from 'http';
export default class Server extends http.Server {
    app: express.Application;
    private isDBConnected;
    constructor();
    private setDatabase;
    private setRouter;
    private setMiddleware;
    start(): Promise<http.Server>;
}

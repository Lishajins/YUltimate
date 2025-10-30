import { Repository } from 'typeorm';
import { Session } from './session.entity';
export declare class SessionService {
    private sessionRepo;
    constructor(sessionRepo: Repository<Session>);
    findAll(): Promise<Session[]>;
    findOne(id: number): Promise<Session | null>;
    create(sessionData: Partial<Session>): Promise<Session>;
    update(id: number, sessionData: Partial<Session>): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}

// eslint-disable-next-line
declare namespace Express {
  export interface Request {
    userId: { username: string; role: string; id: number };
    id: number;
  }
}

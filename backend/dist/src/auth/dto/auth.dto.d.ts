export declare enum Role {
    ADMIN = "ADMIN",
    COACH = "COACH",
    PLAYER = "PLAYER",
    SPECTATOR = "SPECTATOR"
}
export declare class SignUpDto {
    name: string;
    email: string;
    password: string;
    role?: Role;
}
export declare class SignInDto {
    email: string;
    password: string;
}

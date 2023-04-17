import {SetMetadata} from '@nestjs/common';
export enum UserRole {
    USER = 'user',
    ADMIN = 'admin'
}


export enum Role {
    USER = 'user',
    ADMIN = 'admin'
}

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
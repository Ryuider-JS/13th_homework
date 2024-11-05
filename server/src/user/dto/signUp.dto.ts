import {
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsString,
    Matches,
    MaxLength,
    MinLength,
} from 'class-validator';

import { Role } from 'src/common/enums/role.enum';

export class signUpDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail({}, { message: 'Invalid email format' })
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8, { message: 'password must be at least 8 characters long' })
    @MaxLength(20, { message: 'password must not exceed 20 characters' })
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/,
        {
            message:
                'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character from !@#$%^&*()',
        },
    )
    password: string;

    @IsString()
    @IsNotEmpty()
    @IsEnum(Role, {
        message: 'Role must be either USER or MANAGER',
    })
    role: Role;
}

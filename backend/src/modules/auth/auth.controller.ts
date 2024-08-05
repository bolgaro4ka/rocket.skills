import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO, LoginUserDTO } from 'src/common/dto/user';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('reg')
    async registerUser(@Body() dto: CreateUserDTO) {
        return this.authService.registerUser(dto);
    }

    @Get('all')
    async getAllUsers() {
        return this.authService.getAllUsers();
    }

    @Post('login')
    async loginUser(@Body() dto: LoginUserDTO) {
        return this.authService.loginUser(dto);
    }
}

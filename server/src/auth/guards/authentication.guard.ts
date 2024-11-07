import { ExecutionContext, Injectable } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationGuard extends AuthGuard('jwt') {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        console.log(2);
        console.log(context);
        // const path: string = req.path || req.url;

        // if (path && (path.includes('signup') || path.includes('login'))) {
        //     return true;
        // }

        return super.canActivate(context);
    }
}

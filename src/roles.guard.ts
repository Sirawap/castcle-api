import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // const user = {
    //   name: 'John Doa',
    //   role: 'normalUser',
    // }
    
    const requiredRoles = 'admin'
    const requiredRoles2 = 'tester'

    const roles = this.reflector.get<string>('roles',context.getHandler());
    console.log(roles)

    if(!(roles == requiredRoles||roles ==requiredRoles2)){
      return false
    }

    // if(!user.role.includes(requiredRoles||requiredRoles2)){
    //   // return new UnauthorizedException('User is not allow to access the data')
    //   return false
    // }
    return true
  }
}

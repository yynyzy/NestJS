import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

// 路由守卫，先于装饰器触发
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private minlevel: number = 0) {} // 设置一个等级，当 ··query 中的 level 值大于设置的 minlevel 时才能通过
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const level = parseInt(request.query?.level || '0');
    console.log('Auth Guard request=', request);
    return level > this.minlevel;
  }
}

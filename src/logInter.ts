import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // 前置拦截器
    console.log('Url Before...');
    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        // tap 中是后置拦截器
        console.log('Url After...', Date.now() - now);
      }),
    );
  }
}

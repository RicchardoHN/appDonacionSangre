/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ModuloEducativo } from '../../models/modulo-educativo';
import { NewModuloEducativo } from '../../models/new-modulo-educativo';

export interface Create$Params {
      body?: NewModuloEducativo
}

export function create(http: HttpClient, rootUrl: string, params?: Create$Params, context?: HttpContext): Observable<StrictHttpResponse<ModuloEducativo>> {
  const rb = new RequestBuilder(rootUrl, create.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ModuloEducativo>;
    })
  );
}

create.PATH = '/modulo-educativos';

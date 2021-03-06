/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { SignalDto } from '../models/signal-dto';

@Injectable({
  providedIn: 'root',
})
export class SignalService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation throwSignal
   */
  static readonly ThrowSignalPath = '/signal';

  /**
   * A signal is an event of global scope (broadcast semantics) and is delivered to all
   * active handlers. Internally this maps to the engine's signal event received builder
   * method `RuntimeService#createSignalEvent()`. For more information about the signal
   * behavior, see the [Signal Events](https://docs.camunda.org/manual/7.13/reference/bpmn20/events/signal-events/)
   * section of the [BPMN 2.0 Implementation Reference](https://docs.camunda.org/manual/7.13/reference/bpmn20/).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `throwSignal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  throwSignal$Response(params?: {
    body?: SignalDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SignalService.ThrowSignalPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * A signal is an event of global scope (broadcast semantics) and is delivered to all
   * active handlers. Internally this maps to the engine's signal event received builder
   * method `RuntimeService#createSignalEvent()`. For more information about the signal
   * behavior, see the [Signal Events](https://docs.camunda.org/manual/7.13/reference/bpmn20/events/signal-events/)
   * section of the [BPMN 2.0 Implementation Reference](https://docs.camunda.org/manual/7.13/reference/bpmn20/).
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `throwSignal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  throwSignal(params?: {
    body?: SignalDto
  }): Observable<void> {

    return this.throwSignal$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

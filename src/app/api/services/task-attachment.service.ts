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

import { AttachmentDto } from '../models/attachment-dto';
import { MultiFormAttachmentDto } from '../models/multi-form-attachment-dto';

@Injectable({
  providedIn: 'root',
})
export class TaskAttachmentService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAttachments
   */
  static readonly GetAttachmentsPath = '/task/{id}/attachment';

  /**
   * Gets the attachments for a task.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAttachments()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAttachments$Response(params: {

    /**
     * The id of the task to retrieve the attachments for.
     */
    id: string;
  }): Observable<StrictHttpResponse<Array<AttachmentDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TaskAttachmentService.GetAttachmentsPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AttachmentDto>>;
      })
    );
  }

  /**
   * Gets the attachments for a task.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAttachments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAttachments(params: {

    /**
     * The id of the task to retrieve the attachments for.
     */
    id: string;
  }): Observable<Array<AttachmentDto>> {

    return this.getAttachments$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AttachmentDto>>) => r.body as Array<AttachmentDto>)
    );
  }

  /**
   * Path part for operation addAttachment
   */
  static readonly AddAttachmentPath = '/task/{id}/attachment/create';

  /**
   * Creates an attachment for a task.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addAttachment()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  addAttachment$Response(params: {

    /**
     * The id of the task to add the attachment to.
     */
    id: string;
    body?: MultiFormAttachmentDto
  }): Observable<StrictHttpResponse<AttachmentDto>> {

    const rb = new RequestBuilder(this.rootUrl, TaskAttachmentService.AddAttachmentPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AttachmentDto>;
      })
    );
  }

  /**
   * Creates an attachment for a task.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addAttachment$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  addAttachment(params: {

    /**
     * The id of the task to add the attachment to.
     */
    id: string;
    body?: MultiFormAttachmentDto
  }): Observable<AttachmentDto> {

    return this.addAttachment$Response(params).pipe(
      map((r: StrictHttpResponse<AttachmentDto>) => r.body as AttachmentDto)
    );
  }

  /**
   * Path part for operation getAttachment
   */
  static readonly GetAttachmentPath = '/task/{id}/attachment/{attachmentId}';

  /**
   * Retrieves a task attachment by task id and attachment id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAttachment()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAttachment$Response(params: {

    /**
     * The id of the task.
     */
    id: string;

    /**
     * The id of the attachment to be retrieved.
     */
    attachmentId: string;
  }): Observable<StrictHttpResponse<AttachmentDto>> {

    const rb = new RequestBuilder(this.rootUrl, TaskAttachmentService.GetAttachmentPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('attachmentId', params.attachmentId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AttachmentDto>;
      })
    );
  }

  /**
   * Retrieves a task attachment by task id and attachment id.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAttachment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAttachment(params: {

    /**
     * The id of the task.
     */
    id: string;

    /**
     * The id of the attachment to be retrieved.
     */
    attachmentId: string;
  }): Observable<AttachmentDto> {

    return this.getAttachment$Response(params).pipe(
      map((r: StrictHttpResponse<AttachmentDto>) => r.body as AttachmentDto)
    );
  }

  /**
   * Path part for operation deleteAttachment
   */
  static readonly DeleteAttachmentPath = '/task/{id}/attachment/{attachmentId}';

  /**
   * Removes an attachment from a task by id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAttachment()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAttachment$Response(params: {

    /**
     * The id of the task.
     */
    id: string;

    /**
     * The id of the attachment to be removed.
     */
    attachmentId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TaskAttachmentService.DeleteAttachmentPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('attachmentId', params.attachmentId, {});
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
   * Removes an attachment from a task by id.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteAttachment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAttachment(params: {

    /**
     * The id of the task.
     */
    id: string;

    /**
     * The id of the attachment to be removed.
     */
    attachmentId: string;
  }): Observable<void> {

    return this.deleteAttachment$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAttachmentData
   */
  static readonly GetAttachmentDataPath = '/task/{id}/attachment/{attachmentId}/data';

  /**
   * Retrieves the binary content of a task attachment by task id and attachment id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAttachmentData$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAttachmentData$Any$Response(params: {

    /**
     * The id of the task.
     */
    id: string;

    /**
     * The id of the attachment to be retrieved.
     */
    attachmentId: string;
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, TaskAttachmentService.GetAttachmentDataPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('attachmentId', params.attachmentId, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/octet-stream'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * Retrieves the binary content of a task attachment by task id and attachment id.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAttachmentData$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAttachmentData$Any(params: {

    /**
     * The id of the task.
     */
    id: string;

    /**
     * The id of the attachment to be retrieved.
     */
    attachmentId: string;
  }): Observable<Blob> {

    return this.getAttachmentData$Any$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Retrieves the binary content of a task attachment by task id and attachment id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAttachmentData$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAttachmentData$Plain$Response(params: {

    /**
     * The id of the task.
     */
    id: string;

    /**
     * The id of the attachment to be retrieved.
     */
    attachmentId: string;
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, TaskAttachmentService.GetAttachmentDataPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('attachmentId', params.attachmentId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * Retrieves the binary content of a task attachment by task id and attachment id.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAttachmentData$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAttachmentData$Plain(params: {

    /**
     * The id of the task.
     */
    id: string;

    /**
     * The id of the attachment to be retrieved.
     */
    attachmentId: string;
  }): Observable<Blob> {

    return this.getAttachmentData$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

}

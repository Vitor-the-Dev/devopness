/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { ApiError } from '../../generated/models';
import { ApplicationEnvironmentScript } from '../../generated/models';
import { ApplicationEnvironmentScriptCreate } from '../../generated/models';
import { ApplicationEnvironmentVariable } from '../../generated/models';
import { ApplicationEnvironmentVariableCreate } from '../../generated/models';

/**
 * ApplicationsEnvironmentsApiService - Auto-generated
 */
export class ApplicationsEnvironmentsApiService extends ApiBaseService {
    /**
     * 
     * @summary Create a new variable linked to an application environment
     * @param {number} applicationEnvironmentId Unique id of the application environment
     * @param {ApplicationEnvironmentVariableCreate} applicationEnvironmentVariableCreate A JSON object containing data for creating a new record of application environment variable
     */
    public async addEnvironmentVariableToApplication(applicationEnvironmentId: number, applicationEnvironmentVariableCreate: ApplicationEnvironmentVariableCreate): Promise<ApiResponse<ApplicationEnvironmentVariable>> {
        if (applicationEnvironmentId === null || applicationEnvironmentId === undefined) {
            throw new ArgumentNullException('applicationEnvironmentId', 'addEnvironmentVariableToApplication');
        }
        if (applicationEnvironmentVariableCreate === null || applicationEnvironmentVariableCreate === undefined) {
            throw new ArgumentNullException('applicationEnvironmentVariableCreate', 'addEnvironmentVariableToApplication');
        }
        const response = await this.post <ApplicationEnvironmentVariable, ApplicationEnvironmentVariableCreate>(`/application-environments/{application_environment_id}/variables`.replace(`{${"application_environment_id"}}`, encodeURIComponent(String(applicationEnvironmentId))), applicationEnvironmentVariableCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Add script to application environment as a deployment step
     * @param {number} applicationEnvironmentId Unique ID of the application environment to retrieve scripts from
     * @param {ApplicationEnvironmentScriptCreate} applicationEnvironmentScriptCreate A JSON object containing application environment script data
     */
    public async addScriptToApplicationEnvironment(applicationEnvironmentId: number, applicationEnvironmentScriptCreate: ApplicationEnvironmentScriptCreate): Promise<ApiResponse<Array<ApplicationEnvironmentScript>>> {
        if (applicationEnvironmentId === null || applicationEnvironmentId === undefined) {
            throw new ArgumentNullException('applicationEnvironmentId', 'addScriptToApplicationEnvironment');
        }
        if (applicationEnvironmentScriptCreate === null || applicationEnvironmentScriptCreate === undefined) {
            throw new ArgumentNullException('applicationEnvironmentScriptCreate', 'addScriptToApplicationEnvironment');
        }
        const response = await this.post <Array<ApplicationEnvironmentScript>, ApplicationEnvironmentScriptCreate>(`/application-environments/{application_environment_id}/scripts`.replace(`{${"application_environment_id"}}`, encodeURIComponent(String(applicationEnvironmentId))), applicationEnvironmentScriptCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary List scripts to be executed as custom deployment steps of an application environment
     * @param {number} applicationEnvironmentId Unique ID of the application environment to retrieve scripts from
     */
    public async listApplicationEnvironmentScripts(applicationEnvironmentId: number): Promise<ApiResponse<Array<ApplicationEnvironmentScript>>> {
        if (applicationEnvironmentId === null || applicationEnvironmentId === undefined) {
            throw new ArgumentNullException('applicationEnvironmentId', 'listApplicationEnvironmentScripts');
        }
        const response = await this.get <Array<ApplicationEnvironmentScript>>(`/application-environments/{application_environment_id}/scripts`.replace(`{${"application_environment_id"}}`, encodeURIComponent(String(applicationEnvironmentId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Returns a list of variables belonging to an application environment
     * @param {number} applicationEnvironmentId Unique ID of the application environment to retrieve variables from
     */
    public async listApplicationEnvironmentVariables(applicationEnvironmentId: number): Promise<ApiResponse<Array<ApplicationEnvironmentVariable>>> {
        if (applicationEnvironmentId === null || applicationEnvironmentId === undefined) {
            throw new ArgumentNullException('applicationEnvironmentId', 'listApplicationEnvironmentVariables');
        }
        const response = await this.get <Array<ApplicationEnvironmentVariable>>(`/application-environments/{application_environment_id}/variables`.replace(`{${"application_environment_id"}}`, encodeURIComponent(String(applicationEnvironmentId))));
        return new ApiResponse(response);
    }
}

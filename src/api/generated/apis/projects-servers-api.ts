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
import { Server } from '../../generated/models';
import { ServerCreate } from '../../generated/models';

/**
 * ProjectsServersApiService - Auto-generated
 */
export class ProjectsServersApiService extends ApiBaseService {
    /**
     * 
     * @summary Creates a server and link it to the given project
     * @param {number} projectId The project numeric Id
     * @param {ServerCreate} serverCreate A JSON object containing server data
     */
    public async addServerToProject(projectId: number, serverCreate: ServerCreate): Promise<ApiResponse<Server>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'addServerToProject');
        }
        if (serverCreate === null || serverCreate === undefined) {
            throw new ArgumentNullException('serverCreate', 'addServerToProject');
        }
        const response = await this.post <Server, ServerCreate>(`/projects/{project_id}/servers`.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))), serverCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary List all servers linked to a project
     * @param {number} projectId The project numeric Id
     */
    public async listProjectServers(projectId: number): Promise<ApiResponse<Array<Server>>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'listProjectServers');
        }
        const response = await this.get <Array<Server>>(`/projects/{project_id}/servers`.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))));
        return new ApiResponse(response);
    }
}

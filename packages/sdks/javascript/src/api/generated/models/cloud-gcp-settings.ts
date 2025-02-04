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


import { CloudOsVersionCode } from './cloud-os-version-code';

/**
 * 
 * @export
 * @interface CloudGcpSettings
 */
export interface CloudGcpSettings {
    /**
     * The instance type to be launched on the cloud provider
     * @type {string}
     * @memberof CloudGcpSettings
     */
    instance_type: string;
    /**
     * Datacenter region where the cloud instance will be launched
     * @type {string}
     * @memberof CloudGcpSettings
     */
    region: string;
    /**
     * 
     * @type {CloudOsVersionCode}
     * @memberof CloudGcpSettings
     */
    os_version_code: CloudOsVersionCode | null;
}


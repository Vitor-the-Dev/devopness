import { ApiBaseService } from './ApiBaseService';
import { ApplicationsApiService } from '../api/generated/apis/applications-api';
import { ApplicationsDeploymentsApiService } from '../api/generated/apis/applications-deployments-api';
import { ApplicationsSSLCertificatesApiService } from '../api/generated/apis/applications-sslcertificates-api';
import { mergeSiblingClasses } from '../common/MergeSiblingClasses';
import { ApplicationsVariablesApiService } from '../api/generated/apis/applications-variables-api';

export class ApplicationService extends ApiBaseService { }
export interface ApplicationService extends
    ApplicationsApiService,
    ApplicationsDeploymentsApiService,
    ApplicationsApiService,
    ApplicationsSSLCertificatesApiService,
    ApplicationsVariablesApiService {
}

mergeSiblingClasses(ApplicationService, [
    ApplicationsApiService,
    ApplicationsDeploymentsApiService,
    ApplicationsSSLCertificatesApiService,
    ApplicationsVariablesApiService
]);

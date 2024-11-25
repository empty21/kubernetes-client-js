/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.31
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { CoreV1EndpointPort } from './coreV1EndpointPort';
import { V1EndpointAddress } from './v1EndpointAddress';

/**
* EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:   {    Addresses: [{\"ip\": \"10.10.1.1\"}, {\"ip\": \"10.10.2.2\"}],    Ports:     [{\"name\": \"a\", \"port\": 8675}, {\"name\": \"b\", \"port\": 309}]  }  The resulting set of endpoints can be viewed as:   a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],  b: [ 10.10.1.1:309, 10.10.2.2:309 ]
*/
export class V1EndpointSubset {
    /**
    * IP addresses which offer the related ports that are marked as ready. These endpoints should be considered safe for load balancers and clients to utilize.
    */
    'addresses'?: Array<V1EndpointAddress>;
    /**
    * IP addresses which offer the related ports but are not currently marked as ready because they have not yet finished starting, have recently failed a readiness check, or have recently failed a liveness check.
    */
    'notReadyAddresses'?: Array<V1EndpointAddress>;
    /**
    * Port numbers available on the related IP addresses.
    */
    'ports'?: Array<CoreV1EndpointPort>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<V1EndpointAddress>"
        },
        {
            "name": "notReadyAddresses",
            "baseName": "notReadyAddresses",
            "type": "Array<V1EndpointAddress>"
        },
        {
            "name": "ports",
            "baseName": "ports",
            "type": "Array<CoreV1EndpointPort>"
        }    ];

    static getAttributeTypeMap() {
        return V1EndpointSubset.attributeTypeMap;
    }
}


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
import { V1alpha3DeviceAttribute } from './v1alpha3DeviceAttribute';

/**
* BasicDevice defines one device instance.
*/
export class V1alpha3BasicDevice {
    /**
    * Attributes defines the set of attributes for this device. The name of each attribute must be unique in that set.  The maximum number of attributes and capacities combined is 32.
    */
    'attributes'?: { [key: string]: V1alpha3DeviceAttribute; };
    /**
    * Capacity defines the set of capacities for this device. The name of each capacity must be unique in that set.  The maximum number of attributes and capacities combined is 32.
    */
    'capacity'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "{ [key: string]: V1alpha3DeviceAttribute; }"
        },
        {
            "name": "capacity",
            "baseName": "capacity",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha3BasicDevice.attributeTypeMap;
    }
}

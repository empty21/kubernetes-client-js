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

/**
* ExpressionWarning is a warning information that targets a specific expression.
*/
export class V1alpha1ExpressionWarning {
    /**
    * The path to the field that refers the expression. For example, the reference to the expression of the first item of validations is \"spec.validations[0].expression\"
    */
    'fieldRef': string;
    /**
    * The content of type checking information in a human-readable form. Each line of the warning contains the type that the expression is checked against, followed by the type check error from the compiler.
    */
    'warning': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fieldRef",
            "baseName": "fieldRef",
            "type": "string"
        },
        {
            "name": "warning",
            "baseName": "warning",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1ExpressionWarning.attributeTypeMap;
    }
}


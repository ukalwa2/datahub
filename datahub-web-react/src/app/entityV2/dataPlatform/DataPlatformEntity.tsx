import * as React from 'react';
import { DatabaseOutlined } from '@ant-design/icons';
import { DataPlatform, EntityType, SearchResult } from '../../../types.generated';
import { Entity, IconStyleType, PreviewType } from '../Entity';
import { GenericEntityProperties } from '../../entity/shared/types';
import { TYPE_ICON_CLASS_NAME } from '../shared/components/subtypes';

const getDisplayName = (data?: DataPlatform): string => {
    return data?.properties?.displayName || data?.name || '';
};

/**
 * Definition of the DataHub DataJob entity.
 */
export class DataPlatformEntity implements Entity<DataPlatform> {
    type: EntityType = EntityType.DataPlatform;

    icon = (fontSize?: number, _styleType?: IconStyleType, color?: string) => {
        return (
            <DatabaseOutlined
                className={TYPE_ICON_CLASS_NAME}
                style={{
                    fontSize,
                    color: color || '#BFBFBF',
                }}
            />
        );
    };

    isSearchEnabled = () => false;

    isBrowseEnabled = () => false;

    isLineageEnabled = () => false;

    // Currently unused.
    getAutoCompleteFieldName = () => 'name';

    // Currently unused.
    getPathName = () => 'platform';

    // Currently unused.
    getEntityName = () => 'Data Platform';

    // Currently unused.
    getCollectionName = () => 'Data Platforms';

    // Currently unused.
    renderProfile = (_: string) => <></>;

    // Currently unused.
    renderPreview = (_: PreviewType, _1: DataPlatform) => <></>;

    // Currently unused.
    renderSearch = (_: SearchResult) => <></>;

    displayName = (data: DataPlatform) => {
        return getDisplayName(data);
    };

    getGenericEntityProperties = (data: DataPlatform) => {
        return {
            ...data,
            entityType: this.type,
            name: getDisplayName(data),
            platform: data,
        } as GenericEntityProperties;
    };

    supportedCapabilities = () => {
        return new Set([]);
    };

    getGraphName = () => {
        return 'dataPlatform';
    };
}

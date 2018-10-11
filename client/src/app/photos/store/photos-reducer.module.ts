import { StoreModule } from '@ngrx/store';
import { PHOTOS_FEATURE_NAME } from './photos.constants';

export const PhotosReducerModule = StoreModule.forFeature(PHOTOS_FEATURE_NAME, {}, {});
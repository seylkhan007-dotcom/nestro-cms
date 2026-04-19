import {type SchemaTypeDefinition} from 'sanity'

import {localizedStringType} from './localizedStringType'
import {localizedTextType} from './localizedTextType'

import {apartmentType} from './apartmentType'
import {advantageType} from './advantageType'
import {reviewType} from './reviewType'
import {contactType} from './contactType'
import {homepageSettingsType} from './homepageSettingsType'
import {seoSettingsType} from './seoSettingsType'

export const schemaTypes: SchemaTypeDefinition[] = [
  localizedStringType,
  localizedTextType,
  apartmentType,
  advantageType,
  reviewType,
  contactType,
  homepageSettingsType,
  seoSettingsType,
]
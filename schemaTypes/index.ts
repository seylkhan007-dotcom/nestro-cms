import {type SchemaTypeDefinition} from 'sanity'

import {localizedStringType} from './localizedStringType'
import {localizedTextType} from './localizedTextType'

import {apartmentType} from './apartmentType'
import {complexType} from './complexType'
import {advantageType} from './advantageType'
import {reviewType} from './reviewType'
import {contactType} from './contactType'
import {guestLeadType} from './guestLeadType'
import {ownerLeadType} from './ownerLeadType'
import {homepageSettingsType} from './homepageSettingsType'
import {seoSettingsType} from './seoSettingsType'

export const schemaTypes: SchemaTypeDefinition[] = [
  localizedStringType,
  localizedTextType,
  complexType,
  apartmentType,
  advantageType,
  reviewType,
  contactType,
  guestLeadType,
  ownerLeadType,
  homepageSettingsType,
  seoSettingsType,
]

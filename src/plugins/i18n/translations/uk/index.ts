import ukLocale from 'element-plus/lib/locale/lang/uk'
import { generalTranslations as general } from './general.translation'
import { validationTranslations as validation } from './validation.translation'

export const uk = {
  [ukLocale.name]: {
    el: ukLocale.el,

    general,
    validation
  }
}

import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { CustomerApi } from 'src/app/customer/customer.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class CustomerField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/customer',
      Permissions.values.customerRead,
      CustomerApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/customer',
      Permissions.values.customerRead,
      CustomerApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }
}

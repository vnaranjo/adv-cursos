import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'arbovida',
  isDefault: true,
   access: (allow) => ({
    'cursos/*': [
        allow.authenticated.to(['read', 'write', 'delete']),
    ]
   })
});




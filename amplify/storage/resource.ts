import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'arbovida',
  isDefault: true,
   access: (allow) => ({
    'arbovida.org/cursos/*': [
        allow.authenticated.to(['read']),
        allow.groups(['admin', 'teacher']).to(['read', 'write', 'delete']),
    ],
    'arbovida.org/website/*': [
        allow.authenticated.to(['read']),
        allow.groups(['admin', 'website']).to(['read', 'write', 'delete']),
    ]
   })
});